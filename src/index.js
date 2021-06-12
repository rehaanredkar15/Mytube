import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_base.scss";
import { BrowserRouter as Router, Route,Switch, Link, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import 'react-lazy-load-image-component/src/effects/blur.css';

ReactDOM.render(
     <Provider store = {store}>
     <Router>
      <App />
      </Router>
    </Provider>, document.getElementById("root"));




//The <Provider> component makes the Redux store available to any nested
// components that need to access the Redux store.