import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategories, deleteCategory, getAVideo, getCategories, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from '../Components/VideoCard'






function Category() {




  // to hold category name from the form 
  const [CategoryName,setCategoryName]=useState('')
  console.log(CategoryName);


  //to hold category details(including name and id)

  const [categoryDetails,setcategoryDetails]=useState([])


  //add category
  const handleAddCategory=async()=>{
    const body={
      CategoryName,
      allvideos:[]
    }
    //to make api call
    if(CategoryName){
      const response=await addCategories(body)
      console.log(response);
      toast.success("CATEGORY ADDED SUCCESSFULLY" )
     
      setCategoryName('')
      getCategory()
      handleClose()
    }
    else{
      alert('Cannot add category')
    }
  }

  // get categories
  
  
    const getCategory=async()=>{
     const {data}= await getCategories()
     console.log(data);
     setcategoryDetails(data)
    }
    console.log(categoryDetails)//array of categories;


     useEffect(()=>{
      getCategory()
     },[])

  // delete category

  // const [deleteCategoryStatus,setdeleteCategoryStatus]=useState()

  const removeCategory=async(id)=>{
    const response=await deleteCategory(id);
    getCategory();
    // setdeleteCategoriesStatus(true);
    toast.error('delete successfully')

   }

     
//drag over
const dragOver=(e)=>{
  console.log("video Drag Over");
  e.preventDefault();

}

   //drop function

   const videoDrop=async(e,categoryId)=>{
    console.log("videoDropped"+categoryId);
    const videoId=e.dataTransfer.getData('videoId')
    console.log(videoId);
    //api call to fetch video data
    const {data}=await getAVideo(videoId)
    console.log(data);//data
    //get category details
    const selectedCategory=categoryDetails.find(item=>item.id===categoryId)
    console.log(selectedCategory);
    //add video detials into the array(allvideos[])
    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);

    //make an api call to update category Details
    await updateCategory(categoryId,selectedCategory)
    getCategory()
  }

    
 



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <div className=' d-grid gap-2'>
       <ToastContainer/>

      <Button className='btn btn-primary  m-5' size="lg" onClick={handleShow}>Add New Category</Button>

      <div>
        {
          categoryDetails.length>0?categoryDetails.map(item=>(
            <div onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)} className='my-1 p-3'>
              <div className='d-flex justify-content-between '>
                <h4>{item.CategoryName}</h4>
                {/* <div>{item.allvideos.map(e=>
                  <p>{e.caption}</p>
                )}
                </div> */}
        <button onClick={()=>{removeCategory(item.id)}} className='btn'><i className='fa-solid fa-trash text-dark'></i></button>
         
              </div>
              <Row>
                    {

                        item.allvideos && item.allvideos.map(data=>(
                   
                    <Col>
                    <VideoCard displaydata={data} insideCategory={true}/>

                    </Col>
                        ))
                     }
                  </Row>

            </div>

          )):<p>No DATA</p>
        }
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>-
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form action="">
       
      <FloatingLabel controlId="floatingPassword" label="Category Name">
        <Form.Control type="text" onChange={(e)=>setCategoryName(e.target.value)} placeholder="Category Name" />
        
      </FloatingLabel>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


      
      </div>
  )
}

export default Category