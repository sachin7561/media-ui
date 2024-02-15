import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getWatchVideo } from '../services/allAPI';


function WatchHistory() {

  const [watchallVideoHistory,setwatchAllVideoHistory]=useState([])

  const handleHistory=async()=>{
    //make an api call to fetch data from the server
    const {data}=await getWatchVideo()
    console.log(data);//array of videos
    setwatchAllVideoHistory(data)
  }
  useEffect(()=>{
    handleHistory();

  },[])
 
  return (
    <div>
      <div className='d-flex justify-content-between m-3'>
        <h3 className='text-danger'>Watch History</h3>
        <Link to={'/home'}>
        <i class="fa-solid fa-arrow-left fa-beat-fade me-3 fs-5 p-1 gap-1">Back to Home</i>

        </Link>

    </div>
    <div>
    <Table striped bordered hover variant="light">
      <thead>
        <tr>
          <th>Id</th>
          <th>Caption</th>
          <th>Url</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
       {
      watchallVideoHistory.map(e=>(
        <tr>
          <td>{e.id}</td>
          <td>{e.caption}</td>
          <td><Link to={e.embedLink} target='blank'>{e.embedLink}</Link></td>
          <td>{e.timestamp}</td>
        </tr>
      ))
      }
      
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default WatchHistory