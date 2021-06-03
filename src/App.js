import React, { useState } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import "./_app.scss";
import Homescreen from "./screens/Homescreen/Homescreen";
import LoginScreen from "./screens/Loginscreen/Loginscreen";

const Layout = ({children}) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggle = () => toggleSidebar((value) => !value);

  return (
     <Header handleToggle={handleToggle} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggle={handleToggle} />
        <Container fluid className="app_main">
         {children}
        </Container>
      </div> 
  );
};

const App = () => {
  return (
    <>
      <LoginScreen />
    </>
  );
};

export default App;
