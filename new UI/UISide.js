import { AiFillHome, AiOutlineDashboard } from "react-icons/ai";
import { RiSettings5Line } from "react-icons/ri";
import { CgGlobeAlt } from "react-icons/cg";
import { VscPlug } from "react-icons/vsc";
import { React, useState } from "react";
import { Link } from "react-router-dom";

const UISide = () => {
  const [step, setStep] = useState(false);

  const onChange = () => {
    setStep(true);
  };

  // var header = document.getElementById("myDIV");
  // if (header !== null) {
  //   var btns = header.getElementsByClassName("signed-icons");
  //   for (var i = 0; i < btns.length; i++) {
  //     btns[i].addEventListener("click", function () {
  //       var current = document.getElementsByClassName("active");
  //       current[0].className = current[0].className.replace(" active", "");
  //       this.className += " active";
  //     });
  //   }
  // }

  return (
    <div className="signed">
      <div id="myDIV">
        <div
         className={step === true ? "signed-icons active" : "signed-icons"}
          onClick={onChange}
          // className="signed-icons"
         
        >
          <Link to="/uisignedin">
            <AiFillHome size={35} />
          </Link>
        </div>
        <div
          onClick={onChange}
          // className="signed-icons active"
          className={step === true ? "signed-icons active" : "signed-icons"}
        >
          <Link to="/dashboard">
            <AiOutlineDashboard size={30} />
          </Link>
        </div>
        <div
          onClick={onChange}
          // className="signed-icons"
          className={step === true ? "signed-icons active" : "signed-icons"}
        >
          <Link to="/settings">
            <RiSettings5Line size={30} />
          </Link>
        </div>
        <div
          onClick={onChange}
          // className="signed-icons"
          className={step === true ? "signed-icons active" : "signed-icons"}
        >
          <Link to="/globe">
            <CgGlobeAlt size={30} />
          </Link>
        </div>
        <div
          onClick={onChange}
          // className="signed-icons"
          className={step === true ? "signed-icons active" : "signed-icons"}
        >
          <Link to="/plug">
            <VscPlug size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UISide;
