import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import warping from "./warping.jpg";

const UIHomePage = () => {
  return (
    <div className="home">
      <div className="warping">
        <img src={warping} />
      </div>
      <div className="kay">
        <div>
          <b>KAY VENTURES</b>
          <div className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco loboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="joinnow">
            <Link to="/uijoin">Join Now</Link>
          </div>
          <div className="member">
            Already a member? Then{" "}
            <Link to="/uilogin" className="log">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIHomePage;
