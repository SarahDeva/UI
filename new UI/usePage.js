import { useState, useEffect } from "react";
import UIValidation from "./UIValidation";
import UILogValidation from "./UILogValidation";
import UIResetValidation from "./UIResetValidation";
import { Link } from "react-router-dom";

const usePage = (submitPage, pageSubmit) => {
  const customers =
    localStorage.getItem("CUSTOMERS") !== null
      ? JSON.parse(localStorage.getItem("CUSTOMERS"))
      : [];
  const [names, setNames] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: "",
    repassword: "",
  });

  const [uiErrors, setUiErrors] = useState({});
  const [uiError, setUiError] = useState({});
  const [uiReset, setUiReset] = useState({});
  const [nameIsCorrect, setNameIsCorrect] = useState(false);

  const handleChange = (event) => {
    setNames({
      ...names,
      [event.target.name]: event.target.value,
    });
  };

  const handlePageSubmit = (event) => {
    // event.preventDefault();
    // setErrors(values);
    setUiErrors(UIValidation(names));
    setNameIsCorrect(true);
  };

  const handlePage = (event) => {
    // event.preventDefault();
    setUiError(UILogValidation(names));
    setNameIsCorrect(true);
  };

  const handleReset = (event) => {
    // event.preventDefault();
    setUiReset(UIResetValidation(names));
    setNameIsCorrect(true);
  };

  useEffect(() => {
    if (
      Object.keys(uiErrors).length === 0 &&
      nameIsCorrect &&
      Object.keys(uiError).length === 0 &&
      nameIsCorrect &&
      Object.keys(uiReset).length === 0 &&
      nameIsCorrect
    ) {
      //users.push({ values[fullname]= values });
      let username = names.username;
      const userobj = { username: names };
      console.log(username, userobj);
      customers.push(names);
      localStorage.setItem("CUSTOMERS", JSON.stringify(customers));
      <Link to="/uijoined" />;
      submitPage(true);
      // pageSubmit(true);
    }
  }, [uiErrors, uiError]);

  return {
    handleChange,
    handlePage,
    handleReset,
    handlePageSubmit,
    uiReset,
    uiError,
    uiErrors,
    names,
  };
};

export default usePage;
