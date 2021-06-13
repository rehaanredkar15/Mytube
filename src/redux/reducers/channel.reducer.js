import { CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, CHANNEL_DETAILS_FAIL, SET_SUSBSCRIPTTION_STATUS } from './../actionType';


export const channelDetailsReducer = (
    
    state ={
        loading:true,
        channel: {},
        subscriptionStatus:false,
    },
    action
   ) => {
     
     const {payload,type} = action

     switch (type) { 
         case CHANNEL_DETAILS_REQUEST:
             return{
                 ...state,
                 loading:true,
             }
         case CHANNEL_DETAILS_SUCCESS:
             return{
                 ...state,
                 channel:payload,
                 loading:false,

             }     
         case CHANNEL_DETAILS_FAIL:
              return{
                  ...state,
                  loading:false,
                  error:payload,
              }
         case SET_SUSBSCRIPTTION_STATUS:
                return{

                    ...state,
                    subscriptionStatus:payload,


                }
         default:
             return state;
     }

    
}
