import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";


//1 1st request-upload a video to the server

export const uploadVideo=async(reqBody)=>{

    //make post http request to 'http;//localhost:3000/videos' to add video in json server 
    //- return response to add component

    return await commonAPI("post",`${serverURL}/videos`,reqBody)

}


//get all videos from json server

export const getAllVideos=async()=>{
     //make post http request to 'http;//localhost:3000/videos' to add video in json server 
    //- return response to view component
    
    return await commonAPI("get",`${serverURL}/videos`,"")
}

//get a particular video from json server

export const getAVideo=async(id)=>{
     //make post http request to 'http;//localhost:3000/videos/id' to add video in json server 
    //- return response to videocard component
    return await commonAPI("get",`${serverURL}/videos/${id}`,"")

}
//delete a particular video

export const deleteVideo=async(id)=>{
         //make delet http request to 'http;//localhost:3000/videos/id' to delete video in json server 
    //- return response to view component
        

    return await commonAPI("delete",`${serverURL}/videos/${id}`,{})
}


//store watching video history to json server
export const addToWatchHistory=async(videoDetails)=>{
    //make post http request to 'http://localhost:4000/watch-history' to add video in json-server return response to videocRd Component
    return await commonAPI("post",`${serverURL}/watch-history`,videoDetails)

}


export const getWatchVideo=async()=>{
        //make post http request to 'http://localhost:4000/watch-history' to add video in json-server return response to watch-history Component


 return await commonAPI("get",`${serverURL}/watch-history`,"")
}

//add categories
export const addCategories=async(reqBody)=>
{

    //make post http request to 'http;//localhost:3000/category' to get video in json server 
    //- return response to category component

        return await commonAPI("post",`${serverURL}/category`,reqBody)
}


// get categories

export const getCategories=async()=>{
        //make post http request to 'http;//localhost:3000/category' to get category from json server 
    //- return response to category component
    return await commonAPI("get",`${serverURL}/category`,'')
}

// delete category

export const deleteCategory=async(id)=>{
      //make post http request to 'http;//localhost:3000/category' to delete category from json server 
    //- return response to category component
    return await commonAPI("delete",`${serverURL}/category/${id}`,{})
}


//update 
export const updateCategory=async(id,body)=>{
//   
  return await commonAPI("put",`${serverURL}/category/${id}`,body   )
}
