import firebase from 'firebase/app'
import auth from '../../firebase';
import { Provider } from 'react-redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_PROFILE , LOGIN_FAIL} from './../actionType';



//so this is the action creator , this actioncreator will be dispatched 

//from loginscreen
export const login = () => async dispatch => {


   try{
     
     dispatch({
          
          type:LOGIN_REQUEST,

     })




    //  GoogleAuthProvider constructor gives the provider oject which is passed to signin function
//   Creates a credential for Google. At least one of idToken and accessToken is required.
       
       const provider = new firebase.auth.GoogleAuthProvider()
        

        //this is return a promise so this function needs to be await
       
       
       const res = await auth.signInWithPopup(provider)
       
       

        const accessToken= res.credential.accessToken
        const profile={
            name: res.additionalUserInfo.profile.name,
            photoURL : res.additionalUserInfo.profile.picture,
        }

        dispatch({
            type:LOGIN_SUCCESS,
            payload:accessToken
        })
        
        dispatch({

            type:LOGIN_PROFILE,
            payload:profile,
        })
   }  
   catch(error)
   { 
       
        dispatch({

            type:LOGIN_FAIL,
            payload:error.message,
        })

   }

}

