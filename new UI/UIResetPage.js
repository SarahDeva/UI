import "../App.css";
import { HiLockClosed } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { React, useState } from "react";
import usePage from "./usePage";
import { Link } from "react-router-dom";

const UIResetPage = ({ submitPage }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [rePasswordShown, setRePasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const toggleRePassword = () => {
    setRePasswordShown(!rePasswordShown);
  };
  const { handleChange, handlePageSubmit, names, uiErrors } =
    usePage(submitPage);

  return (
    <div className="uilogin">
      <div className="uiloginform">
        <b>Reset Password</b>
        <div>
          <div
            className={
              Object.keys(uiErrors).length === 0 ? "uipass" : "uipasserrors"
            }
          >
            <HiLockClosed size={27} />
            <input
              placeholder="Password"
              type={passwordShown ? "text" : "password"}
              name="password"
              value={names.password}
              onChange={handleChange}
            />
            {uiErrors.password && <p>{uiErrors.password}</p>}
            <button onClick={togglePassword} className="eye">
              {passwordShown ? (
                <AiFillEyeInvisible size={25} />
              ) : (
                <AiFillEye size={25} />
              )}
            </button>
          </div>
          <div
            className={
              Object.keys(uiErrors).length === 0 ? "uipass" : "uirepasserrors"
            }
          >
            <RiLockPasswordFill size={25} />
            <input
              placeholder="Retype-Password"
              type={rePasswordShown ? "text" : "password"}
              name="repassword"
              value={names.repassword}
              onChange={handleChange}
            />
            {uiErrors.repassword && <p>{uiErrors.repassword}</p>}
            <button onClick={toggleRePassword} className="eye">
              {rePasswordShown ? (
                <AiFillEyeInvisible size={25} />
              ) : (
                <AiFillEye size={25} />
              )}
            </button>
          </div>
          <div className="forgot" onClick={handlePageSubmit}>
            {Object.keys(uiErrors).length === 0 ? (
              <Link to="/uiresetsuccess" />
            ) : (
              ""
            )}
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

export default UIResetPage;
