// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// default

import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Form from "./webpage/Form";
import Call from "./webpage/Call";
import Login from "./webpage/Login";
import Table from "./webpage/Table";
import Todolist from "./webpage/Todolist";
import Stepper from "./webpage/Stepper";
import Gallery from "./webpage/Gallery";
import Image from "./webpage/Image";
import SubMenu1 from "./webpage/SubMenu1";
import SubMenu3 from "./webpage/SubMenu3";
import SubMenu2 from "./webpage/SubMenu2";
import Signupformsuccess from "./webpage/Signupformsuccess";
import PrivateRoute from "./redux-saga/container/privateRoute";
import LoginPage from "./redux-saga/component/loginPage";
import RegisterPage from "./redux-saga/component/registerPage";
import DashboardPage from "./redux-saga/component/dashboardPage";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import New from "./UI/New";
import Layout from "./pages/Layout";
import Redux from "./class/Redux";
import UIHomePage from "./new UI/UIHomePage";
import UILoginPage from "./new UI/UILoginPage";
import UIJoinPage from "./new UI/UIJoinPage";
import UIJoined from "./new UI/UIJoined";
import UISignedIn from "./new UI/UISignedIn";
import UIForgotPage from "./new UI/UIForgotPage";
import UIResetPage from "./new UI/UIResetPage";
import UIResetSuccess from "./new UI/UIResetSuccess";
import Settings from "./new UI/Settings";

ReactDOM.render(
  <div>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/New" element={<New />} />
          <Route path="/Layout" element={<Layout />} />
          <Route path="/Redux" element={<Redux />} />
          <Route path="/Signupform" element={<Form />} />
          <Route path="/Webpage" element={<Call />} />
          <Route path="/Loginform" element={<Login />} />
          <Route path="/Todolist" element={<Todolist />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Stepper" element={<Stepper />} />
          <Route path="/Table" element={<Table />} />
          <Route path="/Image" element={<Image />} />
          <Route path="/SubMenu1" element={<SubMenu1 />} />
          <Route path="/SubMenu2" element={<SubMenu2 />} />
          <Route path="/SubMenu3" element={<SubMenu3 />} />
          <Route path="/Signupformsuccess" element={<Signupformsuccess />} />
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/newui" element={<UIHomePage />} />
          <Route path="/uilogin" element={<UILoginPage />} />
          <Route path="/uijoin" element={<UIJoinPage />} />
          <Route path="/uijoined" element={<UIJoined />} />
          <Route path="/uisignedin" element={<UISignedIn />} />
          <Route path="/uiforgotpage" element={<UIForgotPage />} />
          <Route path="/uiresetpage" element={<UIResetPage />} />
          <Route path="/uiresetsuccess" element={<UIResetSuccess />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/dashboardpage"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  </div>,
  document.getElementById("root")
);

// Routes and paths

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Reg from "./final-saga/Reg";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import allReducers from "./final-saga/reducers";

// const store = createStore(allReducers);

// ReactDOM.render(
//   <Router>
//     <div>
//       <Provider store={store}>
//         <Routes>
//           <Route exact path="/" element={<App />} />
//           <Route path="register" element={<Reg />} />
//         </Routes>
//       </Provider>
//     </div>
//   </Router>,
//   document.getElementById("root")
// );

//final redux saga

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './redux-saga/store/configureStore';
// import './index.css';
// import Main from './redux-saga/container/Main';

// const store = configureStore();

// ReactDOM.render(
//   <Provider store={store}>
//     <Main />
//   </Provider>
//   , document.getElementById('root'));

//redux-saga

// import React, { version } from 'react';
// import ReactDOM from 'react-dom';
// import { Router, browserHistory } from 'react-router-3';
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';
// import routes from './routes';
// import './index.css';

// const store = configureStore();
// // console.log(version)

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory} routes={routes} />
//   </Provider>
//   , document.getElementById('root'));

//Redux-saga
