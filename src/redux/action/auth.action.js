import firebase from 'firebase/app'
import auth from '../../firebase';



//so this is the action creator , this actioncreator will be dispatched 

//from loginscreen
export const login = () => async dispatch => {


   try{

    //  GoogleAuthProvider constructor gives the provider oject which is passed to signin function
//   Creates a credential for Google. At least one of idToken and accessToken is required.
       
       const provider = new firebase.auth.GoogleAuthProvider()
        

        //this is return a promise so this function needs to be await
       
       
       const res = await auth.signInWithPopup(provider)
       
       console.log(res)

   }  
   catch(error)
   {

   }

}

