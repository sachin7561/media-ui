import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'
import { getAllVideos, uploadVideo } from '../services/allAPI'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'



function View({uploadVideoServerRseponse}) {

  const [allVideo,setAllVideo]=useState([])


  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

    //api call for displaying video cards
  const getUploadedVideos=async()=>{
    const {data}=await getAllVideos()//all uploaded videos,{data}-destructuring
    console.log(data);//array of videos
    setAllVideo(data)
  }
console.log(allVideo); // array of videos

  useEffect(()=>{
    getUploadedVideos()
    setDeleteVideoStatus(false)// not   refresh 

  },[uploadVideoServerRseponse,deleteVideoStatus])
 
  return (

    <Row>
      {
        allVideo.length>0?allVideo.map(video=>(
        <Col sm={12} md={6} lg={4} xl={3}>

          <VideoCard displaydata={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
        
        </Col>
        )):<p>No data</p>
      }
    </Row>
  )
}

export default View