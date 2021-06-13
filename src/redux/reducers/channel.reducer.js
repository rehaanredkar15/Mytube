import { CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, CHANNEL_DETAILS_FAIL } from './../actionType';


export const channelDeatilsReducer = (
    
    state ={
        loading:true,
        channel: {},
    },
    action
   ) => {
     
     const {type,payload} = action

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
         default:
             return state;
     }

    
}