import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
// import View from '../Components/View'
import Category from '../Components/Category'
import View from '../Components/View'


function Home() {

  //state creation
  const [uploadVideoServerRseponse,setUploadVideoServerRseponse]=useState({})
  return (
    <div>
      {/* 1st div  */}
      <div className='container d-flex align-items-center justify-content-between mb-3'>
        <div className='add-videos'>
          <Add setUploadVideoServerRseponse={setUploadVideoServerRseponse}/>
      
        </div>
        <Link to={'/watch-history'} style={{textDecoration:'none'}}>Watch History</Link>
        
      </div>

      {/* 2 div  */}
      <div className='container-fluid d-flex  justify-content-between'>
        <div className='all-videos'>
          <h5 className='text-center my-3'>All Videos</h5>
          <View uploadVideoServerRseponse={uploadVideoServerRseponse}/>
      
        </div>
       <div style={{width:'450px',padding:'60px'}}><Category/></div>
        
      </div>
    </div>
  )
}

export default Home