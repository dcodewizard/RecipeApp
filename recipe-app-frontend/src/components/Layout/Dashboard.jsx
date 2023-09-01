import React from "react";
import Description from "../Recipe/Description";
import "./Dashboard.css"

const Layout = () => {
  return (
    <div className="vertical-center">
      <div className="container dashboard-container">
        <Description />
      </div>
    </div>
  );
};

export default Layout;
