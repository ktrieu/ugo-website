import React from "react";

import Navbar from "./Navbar";

const Layout: React.FC = (props) => {
  return (
    <>
      <Navbar />
      <div className="p-3">
        <div className="my-3 mx-auto max-w-screen-lg">{props.children}</div>
      </div>
    </>
  );
};

export default Layout;
