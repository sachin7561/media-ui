import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Add({setUploadVideoServerRseponse}) {

  const [video,setVideo]=useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })

console.log(video);

const getEmbedLink=(e)=>{
  const {value}=e.target
  console.log(value.slice(-11));
  const link=`https://www.youtube.com/embed/${value.slice(-31)}`
  setVideo({...video,embedLink:link})

}
  const handleupload=async()=>{// to upload a video

      const{id,caption,url,embedLink}=video
      if(!id || !caption || !embedLink)
      {
        toast.error("please fill the form")
      }
      else{
        // make an api call

        const response= await uploadVideo(video)
        console.log(response)

        if(response.status>=200 && response.status<=300)
        {
          setUploadVideoServerRseponse(response.data)
          toast.success(`${response.data.caption} added successfully`)
          setVideo({
            id:"",caption:"",url:"",
            embedLink:""
          })
          handleClose() //to close modal
        }
        else
        {
          toast.warning("please provide a unique id")
        }
      }

    }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <div className='mx-3'>
      <ToastContainer/>

      <div className='container d-flex mt-4 gap-2'>
        <h5 className='my-2' >Upload New Video</h5>
        <button className='btn ' onClick={handleShow}><i class="fa-solid fa-upload fa-bounce fs-4 mx-2"></i></button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill following details</p>




         <form  className='border border-2 border-primary rounded'>
         <FloatingLabel
        controlId="floatingInput"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" onChange={(e)=>setVideo({...video,id:e.target.value})} placeholder="Video Id" />
      </FloatingLabel>
      <FloatingLabel label="Video Caption"  className="mb-3">
        <Form.Control type="text" onChange={(e)=>setVideo({...video,caption:e.target.value})} placeholder="Video Caption" />
      </FloatingLabel>

      <FloatingLabel label="Video Image url"  className="mb-3">
        <Form.Control type="text" onChange={(e)=>setVideo({...video,url:e.target.value})} placeholder="Video image Url" />
      </FloatingLabel>

      <FloatingLabel label="YouTube Link"  className="mb-3">
        <Form.Control 
        onChange={getEmbedLink}

        type="text" placeholder="YouTube Link" />
      </FloatingLabel>
         </form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleupload}>UPLOAD</Button>
        </Modal.Footer>
      </Modal>

      </div>

    </div>
  )
}

export default Add