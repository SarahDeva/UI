// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h3>User Authentication System</h3>
//         {this.props.children}
//       </div>
//     );
//   }
// }

// App.propTypes = {
//   children: PropTypes.object.isRequired
// };

// export default App;

import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Link to="/Layout">Pages</Link><br />
      <Link to="/Loginform">Webpage</Link><br />
      <Link to="/New">UI</Link><br />
      <Link to="/Redux">Redux</Link><br />
      <Link to="/login">Redux Saga</Link><br />
      <Link to="/newui">New UI</Link><br />
    </div>
  );
};

export default App;

//all

// import "./App.css";
// import React from "react";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Link } from "react-router-dom";
// import { Alert } from "@mui/material";
// import { useSelector } from "react-redux";
// import Bar from "./final-saga/Bar";

// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       mail: 0,
//       pwd: 0,
//       mailValue: "",
//       pwdValue: "",
//     };
//     // this.loggedin = useSelector(state=>state.log)
//   }

//   handleValChange(e, type) {
//     if (type === "mail") {
//       this.setState({
//         mailValue: e.target.value,
//       });
//     }
//     if (type === "pwd") {
//       this.setState({
//         pwdValue: e.target.value,
//       });
//     }
//   }

//   render() {
//     return (
//       <div className="Login">
//         <Box
//           component="form"
//           sx={{
//             "& .MuiTextField-root": { m: 1, width: "40ch" },
//           }}
//           noValidate
//           autoComplete="off"
//         >
//           <div className="Inputs">
//             {this.state.mail === 0 && this.state.pwd === 0 ? (
//               <div style={{ paddingTop: "70px" }} />
//             ) : (
//               <Alert
//                 style={{ marginTop: "20px", marginBottom: "20px" }}
//                 severity="error"
//               >
//                 This is an error alert — check it out!
//               </Alert>
//             )}
//             <TextField
//               id="outlined-basic"
//               label="Email"
//               variant="outlined"
//               value={this.state.mailValue}
//               onChange={(e) => {
//                 this.handleValChange(e, "mail");
//               }}
//             />
//             <div />
//             <TextField
//               id="outlined-basic"
//               label="Password"
//               variant="outlined"
//               value={this.state.pwdValue}
//               onChange={(e) => {
//                 this.handleValChange(e, "pwd");
//               }}
//             />
//             <div style={{ marginTop: "30px" }} />
//             <Button style={{ backgroundColor: "black" }} variant="contained">
//               Login To the DashBoard
//             </Button>
//             <div style={{ marginTop: "20px" }} />
//             <Link to="/register" style={{ textDecoration: "none" }}>
//               <Button style={{ backgroundColor: "red" }} variant="contained">
//                 Register new user
//               </Button>
//             </Link>
//           </div>
//         </Box>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Bar />
//         <Login />
//       </div>
//     );
//   }
// }

// export default App;

//Final redux saga

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//default normal and router
