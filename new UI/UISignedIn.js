import { React } from "react";
import pic1 from "./pic1.png";
import "../App.css";
import UISide from "./UISide";
import { Link } from "react-router-dom";
import { Navbar } from "reactstrap";

const UISignedIn = () => {
  return (
    <div>
      <div className="uijoined">
        <Navbar>
          <h5 className="buttons-head">
            <input
              type="button"
              className="buttons-active"
              value="Home"
            ></input>
          </h5>
          <div>
            <h6 className="user-account">
              <i className="fas fa-user-circle"></i>
              <div className="dropdown-content">
                <Link to="/newui">Log Out</Link>
              </div>
            </h6>
            <h6 className="text">Mrs. Jane Doe </h6>
            <h6 className="text" style={{ color: "#a3a3a3" }}>
              User Designation
            </h6>
          </div>
        </Navbar>
        <div className="uisignedform">
          <iframe
            className="iframe-image"
            src={pic1}
            title="Iframe Example"
          ></iframe>
          <b>
            <div className="welcome">
              WELCOME! to Kay <br />
            </div>
          </b>
          <div className="para-signedin">
            Follow the instructions to complete the business,
            <br />
            operation related information settings :
          </div>

          <iframe
            className="iframe"
            src="https://www.youtube.com/embed/K4XUiZAzX4U"
            title="Iframe-video"
          ></iframe>
          <p className="kyc">Click on the settings to start with the KYC</p>
        </div>
      </div>{" "}
      <UISide />
    </div>
  );
};

export default UISignedIn;
