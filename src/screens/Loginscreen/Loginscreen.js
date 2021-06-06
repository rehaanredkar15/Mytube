import React,{useEffect} from "react";
import "./_loginscreen.scss";
import { useDispatch,useSelector} from "react-redux";
import { login } from './../../redux/action/auth.action';
import {useHistory} from 'react-router-dom';



const LoginScreen = () => {

  const dispatch = useDispatch()  

   
   //to Read data from store we will require useSelector hook
  const accessToken = useSelector(state => state.auth.accessToken)


  const handleLogin=()=>{

    //now for dispatching we need distpatch hook  
    
    dispatch(login())
  }

 

  const history = useHistory();


  //when acessToken is not null we will redirect

  useEffect(() => {
     
     if(accessToken){

        history.push('/')
     }
  }, [accessToken,history])
  return (
    <div className="login">
     
      <div className="login__container">
        <p>Welcome To </p> <h3>Youtube 2.0</h3>
        <img
          src="https://1.bp.blogspot.com/-nOuBEwrQuu8/XVz350_NaZI/AAAAAAAAAlc/3ne3fqrd1ugo5TaPx4MVJ_mdr8UGJnKLwCPcBGAYYCw/s1600/TestyDeafeningCanine-size_restricted.gif"
          alt=" "
        />
        <button onClick = {handleLogin}>Login with Google </button>
      </div>
    </div>
  );
};

export default LoginScreen;
