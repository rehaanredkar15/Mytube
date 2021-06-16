import React, { useEffect,useState } from "react";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import "./_app.scss";
import Homescreen from "./screens/Homescreen/Homescreen";
import Watchscreen from "./screens/watchscreen/Watchscreen";
import Searchscreen from "./screens/Searchscreen";
import LoginScreen from "./screens/Loginscreen/Loginscreen";
import Subscriptionscreen from './screens/Subscriptionscreen/Subscriptionscreen.js'
import { BrowserRouter as Router, Route,Switch, Link, Redirect,useHistory } from "react-router-dom";
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
         history.push('/auth')
     }
   },[accessToken,loading,history])

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

      <Route path = '/search/:query'>
      <Layout>
        <Searchscreen/>
      </Layout>
      </Route>

      <Route path = '/watch/:id'>
      <Layout>
        <Watchscreen/>
      </Layout>
      </Route>

      <Route path = '/feed/subscriptions'>
      <Layout>
        <Subscriptionscreen/>
      </Layout>
      </Route>

      <Route>
        <Redirect to ='/' />
      </Route>

     </Switch>
    
  );
};

export default App;





