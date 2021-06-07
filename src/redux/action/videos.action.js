import { log_out } from './auth.action';
import { HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, HOME_VIDEOS_FAIL } from './../actionType';
import request from '../../api';


export const getPopularVideos = () => async dispatch => {

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
              pageToken:'',
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