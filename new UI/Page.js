import React, { useState } from "react";
import UIJoined from "./UIJoined";
import UIJoinPage from "./UIJoinPage";
import UILoginPage from "./UILoginPage";
import UISignedIn from "./UISignedIn";

const Page = () => {
  const [pageIsSubmitted, setPageIsSubmitted] = useState(false);
  // const [pageIsSubmit, setPageIsSubmit] = useState(false);

  const submitPage = () => {
    setPageIsSubmitted(true);
  };

  // const pageSubmit = () => {
  //   setPageIsSubmit(true);
  // };

  return (
    <div>
      {pageIsSubmitted === false ? (
        <UIJoinPage submitPage={submitPage} />
      ) : (
        <UIJoined />
      )}
      {/* {!pageIsSubmit ? <UILoginPage pageSubmit={pageSubmit} /> : <UISignedIn />} */}
    </div>
  );
};

export default Page;
