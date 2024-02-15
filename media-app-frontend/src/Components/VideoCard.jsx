import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button'; 
import Modal from 'react-bootstrap/Modal';
import { addToWatchHistory, deleteVideo } from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function VideoCard({displaydata,setDeleteVideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => { setShow(true);
    //api call to add watch history
    const {caption,embedLink}=displaydata;
    // to get current date and time
    let today= new Date();
    let timestamp = new Intl.DateTimeFormat('en-in',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today);    console.log(today);
    console.log(timestamp);

    let videoDetails={
      caption,
      embedLink,
      timestamp
      
    }
    //api call to get video details
    await addToWatchHistory(videoDetails)
  }



  console.log(displaydata);


  



    // const handleDelete=async()=>{
  //   const{id}=displaydata;
  //   if(id)
  //   {
  //     const deleted = await deleteVideo(id);
  //     toast.error("deleted")
      
  //   }
  // }
  

  //remove video
   const removeVideo=async(id)=>{
    const response=await deleteVideo(id)
    setDeleteVideoStatus(true);
    toast.error('delete successfully')

   }

   //drag

   const dragStarted=(e,id)=>{
    console.log("drag started",+id,e);
    e.dataTransfer.setData("videoId",id)//videoId:23123
   }


  return (
    <div >
       <ToastContainer/>

    <Row>
      <Col className=' p-1' >
      <Card draggable onDragStart={(e)=>dragStarted(e,displaydata.id)} style={{ width: '17rem' }} className='m-3 border border-1   border-primary rounded'>
      <Card.Img onClick={handleShow} variant="top" src={displaydata.url}  width={'100%'} />
      <Card.Body className='d-flex justify-content-between align-item-center'>
        <Card.Title>{displaydata.caption}</Card.Title>

        {insideCategory?"":<button onClick={()=>{removeVideo(displaydata.id)}} className='btn'><i className='fa-solid fa-trash text-dark'></i></button>}
      </Card.Body>
    </Card>
      </Col>
    </Row>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displaydata.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <iframe width={"100%"} height="315" src={displaydata.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
      
      

    </div>
  )
}

export default VideoCard