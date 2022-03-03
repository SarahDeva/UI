const UILogValidation = (names) => {
  let uiError = {};
  let nocustomer = true;

  // if (localStorage.getItem("rememberMe") !== true) {

  if (!names.email) {
    uiError.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(names.email)) {
    uiError.email = "Email is Invalid";
  }

  if (!names.password) {
    uiError.password = "Password is required";
  } else if (names.password.length < 8) {
    uiError.password = "Password must be more than 8 characters";
  }

  const customers =
    localStorage.getItem("CUSTOMERS") !== null
      ? JSON.parse(localStorage.getItem("CUSTOMERS"))
      : [];

  Object.keys(customers).map((name) => {
    if (customers[name]["email"] === names.email) {
      nocustomer = false;
      if (customers[name]["password"] === names.password) {
        alert("Log In Successful!");
      } else uiError.pass = "Wrong Password!";
    }
  });
  if (nocustomer) uiError.mail = "User Does Not Exist!";
  // } else alert("Log In Successful!");

  return uiError;
};

export default UILogValidation;
