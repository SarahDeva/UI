const UIValidation = (names) => {
  let uiErrors = {};
  
  if (!names.username) {
    uiErrors.username = "Name is required";
  } else if (names.username.length < 5) {
    uiErrors.username = "Name must be more than 5 characters";
  }

  if (!names.email) {
    uiErrors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(names.email)) {
    uiErrors.email = "Email is Invalid";
  }

  if (!names.phonenumber) {
    uiErrors.phonenumber = "Phone Number is required";
  } else if (names.phonenumber.length !== 10) {
    uiErrors.phonenumber = "Phone Number must be 10 numbers";
  }
  // else if(/^(\+91-|\+91|0)?\d{10}$/.test(names.phonenumber)){
  //     uiErrors.phonenumber="Phone Number is Invalid."
  // }

  if (!names.password) {
    uiErrors.password = "Password is required";
  } else if (names.password.length < 8) {
    uiErrors.password = "Password must be more than 8 characters";
  }

  if (!names.repassword) {
    uiErrors.repassword = "Re-type Password is required";
  } else if (names.password !== names.repassword) {
    uiErrors.repassword = "Re-typing the Password must be same as Password";
  }
    
  return uiErrors;
};

export default UIValidation;
