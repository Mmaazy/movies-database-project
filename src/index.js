import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter
} from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {fontawesome} from "./services/fontawesome";
import Sidebar from './components/sidebar';

fontawesome();

ReactDOM.render(
   <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById("root")
);