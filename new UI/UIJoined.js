import React from "react";
import { Link } from "react-router-dom";
import { FaHandsHelping } from "react-icons/fa";
import "../App.css";

const UIJoined = () => {

  return (
    <div className="uijoined">
      <div className="uijoinedform">
        <div className="helpicon">
          <FaHandsHelping size={50} />
          <br />
        </div>
        <b className="joined">
          <div className="hurrah">
            Hurrah ! <br />
          </div>
          <div className="uijoinedsuccess">You Joined Successfully</div>
        </b>
        <Link to="/uilogin" className="uiloginlink">
          Log In
        </Link>
      </div>
      <div className="kaylogin">
        <b>KAY VENTURES</b>
        <div className="paralogin">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco loboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
};

export default UIJoined;
