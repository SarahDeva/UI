import { React, useState } from "react";
import "../App.css";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { RiLockPasswordFill, RiUser3Fill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdSettingsPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import usePage from "./usePage";

const UIJoinPage = ({ submitPage }) => {
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
    <div className="uijoin">
      <div className="uijoinform">
        <b>Join Now</b>
        <div>
          <div>
            <div
              className={
                Object.keys(uiErrors).length === 0 ? "uiemail" : "uierrors"
              }
            >
              <RiUser3Fill size={25} />
              <input
                placeholder="User Name"
                type="text"
                name="username"
                value={names.username}
                onChange={handleChange}
              />
              {uiErrors.username && <p>{uiErrors.username}</p>}
            </div>
          </div>
          <div
            className={
              Object.keys(uiErrors).length === 0 ? "uiemail" : "uierrors"
            }
          >
            <HiMail size={25} />
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={names.email}
              onChange={handleChange}
            />
            {uiErrors.email && <p>{uiErrors.email}</p>}
          </div>
          <div
            className={
              Object.keys(uiErrors).length === 0 ? "uiemail" : "uierrors"
            }
          >
            <MdSettingsPhone size={25} />
            <input
              placeholder="Phone Number"
              type="number"
              name="phonenumber"
              value={names.phonenumber}
              onChange={handleChange}
            />
            {uiErrors.phonenumber && <p>{uiErrors.phonenumber}</p>}
          </div>
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
          {/* <button
            onClick={handlePageSubmit}
            className={
              Object.keys(uiErrors).length === 0 ? "join" : "joinerror"
            }
            type="submit"
          > */}
          <div
            className="join"
            onClick={handlePageSubmit}
            type="submit"
            // lsRememberMe();
          >
            Join
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

export default UIJoinPage;
