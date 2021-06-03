import React from "react";
import "./_loginscreen.scss";
const LoginScreen = () => {
  return (
    <div className="login">
      {/* <img
        src="https://flickerreport.com/wp-content/uploads/2020/03/YTLogo_old_new_1680.gif"
        alt=" "
      /> */}
      <div className="login__container">
        <p>Welcome To </p> <h3>Youtube 2.0</h3>
        <img
          src="https://1.bp.blogspot.com/-nOuBEwrQuu8/XVz350_NaZI/AAAAAAAAAlc/3ne3fqrd1ugo5TaPx4MVJ_mdr8UGJnKLwCPcBGAYYCw/s1600/TestyDeafeningCanine-size_restricted.gif"
          alt=" "
        />
        <button>Login with Google </button>
      </div>
    </div>
  );
};

export default LoginScreen;
