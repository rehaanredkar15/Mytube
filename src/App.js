import React, { useEffect } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import "./_app.scss";
import Homescreen from "./screens/Homescreen/Homescreen";
import LoginScreen from "./screens/Loginscreen/Loginscreen";
import { BrowserRouter as Router, Route,Switch, Link, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';



//layout component is for displaying whatever props is passed means which ever component is passed 
const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggle = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggle={handleToggle} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggle={handleToggle} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {

  const {accessToken,loading}  = useSelector(state => state.auth)
   
   const  history = useHistory()
   useEffect(() => {
 
     if(!loading && !accessToken)
     {

     }
   },[accessToken,loading])

  return (
      <Switch>
      <Route  path ='/' exact>
      <Layout>
          <Homescreen/>
      </Layout>
      </Route>

      <Route path = '/auth'>     
      <LoginScreen />
      </Route>

      <Route path = '/search'>
      <Layout>
        <h1>Search </h1>
      </Layout>
      </Route>
  

      <Route>
        <Redirect to ='/' />
      </Route>

     </Switch>
    
  );
};

export default App;





