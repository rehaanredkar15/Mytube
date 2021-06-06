//this reducer will handle the data coming from the action performed 
import { LOGIN_REQUEST } from './../actionType';
import { LOGIN_SUCCESS } from './../actionType';
import {LOGIN_FAIL} from './../actionType';
import { LOGIN_PROFILE } from './../actionType';
const initialState = {

    accessToken:null,
    user:null,
    loading:false
}

export const authReducer = (prevState = initialState, action) =>{
  

    //this reducer catches the dispatched actions and make changes to the store and state

   //destructing the props to get type and payload from action
   const {type,payload} = action
    
    switch (type) {
        case LOGIN_REQUEST:
                return{
                    ...prevState,  //copying the previous state so that we dont loose the current state 
                    loading:true,  //changing the loading state to true
                }
        case LOGIN_SUCCESS:
              return{

                  ...prevState,
                   accessToken:payload,
                   loading:false,
              }
         case LOGIN_FAIL:
              return {
                  ...prevState,
                  accessToken:null,
                  loading:false,
                  error:payload,   
              }

        case LOGIN_PROFILE:

            return {
                ...prevState,
                 user:payload,
            }
        default:
            return prevState
    }
}