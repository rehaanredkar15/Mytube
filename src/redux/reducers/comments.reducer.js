import { CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCCESS, CHANNEL_DETAILS_FAIL, SET_SUSBSCRIPTTION_STATUS, COMMENT_LIST_REQUEST, COMMENT_DETAILS_SUCCESS, COMMENT_LIST_SUCCESS, COMMENT_LIST_FAIL } from './../actionType';


export const commentListReducer = (
    
    state ={
        loading:true,
        comments: null,
    },
    action
   ) => {
     
     const {payload,type} = action 

     switch (type) { 
         case COMMENT_LIST_REQUEST:
             return{
                 ...state,
                 loading:true,
             }
         case COMMENT_LIST_SUCCESS:
             return{
                 ...state,
                 comments:payload,
                 loading:false,

             }     
         case COMMENT_LIST_FAIL:
              return{
                  ...state,
                  loading:false,
                  error:payload,
              }
         default:
             return state;
     }
}
