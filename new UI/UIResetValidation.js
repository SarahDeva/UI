import { Link } from "react-router-dom";

const UIResetValidation = (names) => {
  let uiReset = {};

  const customers =
    localStorage.getItem("CUSTOMERS") !== null
      ? JSON.parse(localStorage.getItem("CUSTOMERS"))
      : [];

  Object.keys(customers).map((name) => {
    if (customers[name]["username"] === names.username)
      if (customers[name]["phonenumber"] === names.phonenumber) {
        <Link to="" />;
      } else uiReset.reset = "Invalid Details. Please try again";
  });

  return uiReset;
};

export default UIResetValidation;
