import { log_out } from './auth.action';
import { HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS, RELATED_VIDEO_FAIL, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS, SEARCHED_VIDEO_FAIL } from './../actionType';
import request from '../../api';


export const getPopularVideos = () => async (dispatch,getState) => {

   try{


       dispatch({
           type:HOME_VIDEOS_REQUEST,
       })

       const {data} = await request("/videos",{

         params: {

              part:"snippet,contentDetails,statistics",
              chart:'mostPopular',
              regionCode:'US',
              maxResults:20,  
              pageToken:getState().homeVideos.nextPageToken,
           },
       })
    
      dispatch({


          type: HOME_VIDEOS_SUCCESS,
          payload:{

              videos:data.items,
              nextPageToken:data.nextPageToken,
              category:'All',
          }

      })
   } 
   catch(error)
   {
  
     
      dispatch({

          type:HOME_VIDEOS_FAIL,
          payload:error.message,
      })
   }


}




//For categories we want the videos related to a specific topic 
export const getVideosByCategory = (keyword) => async (dispatch,getState) => {

   try{
        

       dispatch({
           type:HOME_VIDEOS_REQUEST,
       })

       const {data} = await request("/search",{

         params: {

              part:"snippet",
              maxResults:20,  
              pageToken:getState().homeVideos.nextPageToken,
              q:keyword,
              type:'video'
           },
       })
    
      dispatch({


          type: HOME_VIDEOS_SUCCESS,
          payload:{

              videos:data.items,
              nextPageToken:data.nextPageToken,
              category:keyword,  //the videos of specific categorys
          }

      })
   } 
   catch(error)
   {
  
      console.log(error.message)
      dispatch({

          type:HOME_VIDEOS_FAIL,
          payload:error.message,
      })
   }


}

export const getVideoById = (id) => async(dispatch) => {
   

   try {

       dispatch({
           type:SELECTED_VIDEO_REQUEST,
       })

       const { data } = await request ('/videos', {

           params:{
               part:'snippet,statistics',
               id:id,
           }
       })
       dispatch({

           type:SELECTED_VIDEO_SUCCESS,
           payload:data.items[0]
           //first item which is recieved 
       })
   } catch (error) { 

       dispatch({

           type:SELECTED_VIDEO_FAIL,
           payload: error.message,
       })
       
   }


}

export const getRelatedVideos = (id) => async(dispatch) => {
   try {

       dispatch({
           type:RELATED_VIDEO_REQUEST,
       })

       const { data } = await request ('/search', {

           params:{
               part:'snippet',
               relatedToVideoId:id,
               maxResults:15,
               type:'video',
           }
       })
       dispatch({

           type:RELATED_VIDEO_SUCCESS,
           payload:data.items,
           
       })
   } catch (error) { 
        // console.log(error.response.data.message);
       dispatch({
           type:RELATED_VIDEO_FAIL,
           payload: error.message,
       })
       
   }

}


export const getVideosBySearch = (keyword) => async (dispatch) => {

   try{
       dispatch({
           type:SEARCHED_VIDEO_REQUEST,
       })

       const {data} = await request("/search",{

         params: {
              part:"snippet",
              maxResults:20,  
              q:keyword,
              type:'video,channel'
           },
       })
    
      dispatch({
          type: SEARCHED_VIDEO_SUCCESS,
          payload:data.items,
          
      })
   } 
   catch(error)
   {
      console.log(error.message)
      dispatch({
          type:SEARCHED_VIDEO_FAIL,
          payload:error.message,
      })
   }


}