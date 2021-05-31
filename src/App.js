import React from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import Homescreen from "./screens/Homescreen/Homescreen";
const App = () => {
  return (
    <>
      <Header />
      <div className="app_container border border-info">
        <Sidebar />
        <Container fluid className="app_main border border-warning">
          <Homescreen />
        </Container>
      </div>
    </>
  );
};

export default App;
