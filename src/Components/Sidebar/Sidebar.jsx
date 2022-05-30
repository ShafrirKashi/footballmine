import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar({stateChanger}) {
  const [sidebarOpen, setSideBarOpen] = useState(true);

  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
    stateChanger(!sidebarOpen)
  };

  return (
    <div
      className={sidebarOpen ? "sidebar-wrapper-close" : "sidebar-wrapper-open"}
    >
      <div className="button-wrapper">
        <button
          className={sidebarOpen ? "btn-side-open" : "btn-side-close"}
          onClick={handleViewSidebar}
        ></button>
      </div>
      <div className="sidebar-content">
      <div className="sidebar-button">General</div>
      <div className="sidebar-button">Data</div>
      <div className="sidebar-button">Statistics</div>
      <div className="sidebar-button">Information</div>
      <div className="sidebar-button">Sketch</div>
      <div className="sidebar-button">Settings</div>
        </div>
    </div>
  );
}

export default Sidebar;
