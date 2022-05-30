import React, { useState } from "react";
import { Tabs } from "antd";
import Table from "../Table/Table";
import Pitchvis from "../PitchVis/PitchVis";
import Chart from "../Chart/Chart";
import "./Tabs.css";

function PageTabs() {
  const [thedata, settheData] = useState()

  const { TabPane } = Tabs;

  // const onChange = (key) => {
  //   console.log(key);
  // };
  return (
    <div>
      <Tabs className="Tabs" type="card">
        <TabPane className="Tab1" tab="Statistics" key="1">
          <Table tabsdata={settheData}/>
        </TabPane>
        <TabPane tab="PitchVis" key="2">
          <Pitchvis />
        </TabPane>
        <TabPane className="TabCharts" tab="Charts" key="3">
          <Chart chartsdata={thedata}/>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default PageTabs;
