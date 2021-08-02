import React from "react";
import PageSidebar from "../common/sidebar/PageSidebar";
import Breadcrumb from "../utility/Breadcrumb";
import SpecialProgram from "../utility/SpecialProgram";
import ProgList from "./ProgList";

const ProgramSchedule = () => {
  return (
    <div className="page-wraper">
      <main>
        <div className="main-side">
          <Breadcrumb title="Programme Schedule" />
          <h3 className="highlight">Programme Schedule</h3>

          <ProgList />

          <SpecialProgram />
        </div>
        <div className="right-side">
          <PageSidebar />
        </div>
      </main>
    </div>
  );
};

export default ProgramSchedule;
