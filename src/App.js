import "./App.css";
import Table from "./Components/Table/Table";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Tabs from "./Components/Tabs/Tabs";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState(true);
  // console.log(state)
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="sidebarApp">
          <Sidebar stateChanger={setState} />
        </div>
      <Tabs />
      </div>
    </div>
  );
}

export default App;
