import { CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, CHANNEL_DETAILS_FAIL, SET_SUSBSCRIPTTION_STATUS } from './../actionType';
import request from '../../api';

export const getChannelDetails  = (id) => async(dispatch) => {
   

   try {

       dispatch({
           type:CHANNEL_DETAILS_REQUEST,
       })

       const { data } = await request('/channels', {

           params:{
               part:'snippet,statistics,contentDetails',
                id,
           },
       })
       dispatch({

           type:CHANNEL_DETAILS_SUCCESS,
           payload:data.items[0],
           //first item which is recieved 
       })
   } catch (error) { 
       
       console.log(error.response.data)
       dispatch({

           type:CHANNEL_DETAILS_FAIL,
           payload: error.response.data,
       })
       
   }

}

  
export const checkSubscriptionStatus = (id) => async(dispatch,getState) => {
   

   try {

       const { data } = await request('/channels', {

           params:{
               part:'snippet,statistics,contentDetails',
                firChannelId: id,
                mine:true
           }, 

           header:{

            Authorization:`Bearer ${getState().auth.accessToken}`,
           }

       })
       dispatch({

           type:SET_SUSBSCRIPTTION_STATUS,
       })

       console.log(data)
   } catch (error) { 
       
       console.log(error.response.data)
       
   }

} 