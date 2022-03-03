import "../App.css";
import { HiMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { React, useEffect, useState } from "react";
import usePage from "./usePage";
import { Link } from "react-router-dom";

const UILoginPage = ({ pageSubmit }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    handleChange,
    handlePage,
    names,
    uiError,
    uiErrors,
  } = usePage(pageSubmit);

  const handleChangeEmail = (event) => {
    const input = event.target;
    const value = input.value;
    setEmail(value);
  };

  const handleChangePass = (event) => {
    const input = event.target;
    const value = input.value;
    setPass(value);
  };

  const handleChangeRememberMe = (event) => {
    const input = event.target;
    const value = input.checked;
    setRememberMe(value);
  };

  useEffect(() => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const email = rememberMe ? localStorage.getItem("email") : "";
    const pass = rememberMe ? localStorage.getItem("pass") : "";
    console.log(email);
    setEmail(email);
    setPass(pass);
    setRememberMe(rememberMe);
  }, []);

  const handleCheckSubmit = () => {
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("email", rememberMe ? email : "");
    localStorage.setItem("pass", rememberMe ? pass : "");
  };

  return (
    <div className="uilogin">
      <div className="uiloginform">
        <b>Log In</b>
        <div>
          <div
            className={
              Object.keys(uiErrors).length === 0 &&
              Object.keys(uiError).length === 0
                ? "uiemail"
                : "uierrors"
            }
          >
            <HiMail size={25} />
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              value={(names.email, email)}
              onChange={(handleChange, handleChangeEmail)}
            />
            {(uiErrors.email && <p>{uiErrors.email}</p>) ||
              (uiError.mail && <p>{uiError.mail}</p>)}
          </div>
          <div
            className={
              Object.keys(uiErrors).length === 0 &&
              Object.keys(uiError).length === 0
                ? "uipass"
                : "uipasserrors"
            }
          >
            <RiLockPasswordFill size={25} />
            <input
              placeholder="Password"
              id="password"
              type={passwordShown ? "text" : "password"}
              name="password"
              value={(names.password, pass)}
              onChange={(handleChange, handleChangePass)}
            />
            {(uiErrors.password && <p>{uiErrors.password}</p>) ||
              (uiError.pass && <p>{uiError.pass}</p>)}
            <button onClick={togglePassword} className="eye">
              {passwordShown ? (
                <AiFillEyeInvisible size={25} />
              ) : (
                <AiFillEye size={25} />
              )}
            </button>
          </div>
          <div className="remember">
            <input
              name="rememberMe"
              checked={rememberMe}
              onChange={handleChangeRememberMe}
              className="check"
              id="rememberMe"
              type="checkbox"
            />
            Remember Me
            <div className="forgotlink">
              <Link to="/uiforgotpage">Forgot Password?</Link>
            </div>
          </div>
          <div
            className="sign"
            onClick={() => {
              handlePage();
              handleCheckSubmit();
            }}
          >
            Sign In
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

export default UILoginPage;
