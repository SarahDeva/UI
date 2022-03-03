import "../App.css";
import { RiUser3Fill } from "react-icons/ri";
import { MdSettingsPhone } from "react-icons/md";
import { React } from "react";
import usePage from "./usePage";
import { Link } from "react-router-dom";

const UIForgotPage = ({ pageSubmit }) => {
  const {
    handleChange,
    handleReset,
    handlePageSubmit,
    names,
    uiReset,
    uiErrors,
  } = usePage(pageSubmit);

  return (
    <div className="uilogin">
      <div className="uiloginform">
        <b>Forgot Password</b>
        <div>
          <div
            className={
              Object.keys(uiErrors).length === 0 &&
              Object.keys(uiReset).length === 0
                ? "uiemail"
                : "uierrors"
            }
          >
            <RiUser3Fill size={25} />
            <input
              placeholder="User Name"
              type="text"
              name="username"
              id="username"
              value={names.username}
              onChange={handleChange}
            />
            {uiErrors.username && <p>{uiErrors.username}</p>}
          </div>
          <div
            className={
              Object.keys(uiErrors).length === 0 &&
              Object.keys(uiReset).length === 0
                ? "uiemail"
                : "uierrors"
            }
          >
            <MdSettingsPhone size={25} />
            <input
              placeholder="Phone Number"
              id="phonenumber"
              type="number"
              name="phonenumber"
              value={names.phonenumber}
              onChange={handleChange}
            />
            {(uiErrors.phonenumber && <p>{uiErrors.phonenumber}</p>) ||
              (uiReset.reset && <p>{uiReset.reset}</p>)}
          </div>
          <div
            className={
              Object.keys(uiErrors).length === 0 &&
              Object.keys(uiReset).length === 0
                ? "forgot"
                : "forgoterror"
            }
            onClick={() => {
              handlePageSubmit();
              handleReset();
            }}
          >
            {Object.keys(uiReset).length === 0 ? <Link to="/uiresetpage" /> : ""}
            Reset
          </div>
        </div>
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

export default UIForgotPage;
