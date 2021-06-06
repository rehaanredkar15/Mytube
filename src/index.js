import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./_base.scss";
import { Provider } from 'react-redux';
import store from './redux/store';
ReactDOM.render(
     <Provider store = {store}>
      <App />
    </Provider>, document.getElementById("root"));




//The <Provider> component makes the Redux store available to any nested
// components that need to access the Redux store.