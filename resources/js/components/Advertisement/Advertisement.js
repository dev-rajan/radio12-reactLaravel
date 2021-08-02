import React from "react";
import PageSidebar from "../common/sidebar/PageSidebar";
import Breadcrumb from "../utility/Breadcrumb";

const Advertisement = () => {
  return (
    <div className="page-wraper">
      <main>
        <div className="main-side">
          <Breadcrumb title="About" />
          <h3 className="highlight">Advertisement</h3>
          <div className="advertisement">Advertisement</div>
        </div>

        <div className="right-side">
          <PageSidebar />
        </div>
      </main>
    </div>
  );
};

export default Advertisement;
