// import { log_out } from './auth.action';
// import { HOME_VIDEOS_REQUEST } from './../actionType';
// import request from '../../api';


// export const getPopularVideos = () => async dispatch => {

//    try{
       

//        dispatch({
//            type:HOME_VIDEOS_REQUEST
//        })

//        const res = await request("/videos",{

//          params: {

//               part:"snippet,contentDetails,statistics",
//               chart:'mostPopular',
//               regionCode:'IN',
//               maxResults:20,  
//               pageToken:'',
//            },
//        })
//       console.log('hi')
//       console.log(res);
//    } 
//    catch(error)
//    {
  

//    }


// }