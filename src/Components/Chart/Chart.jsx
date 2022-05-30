import React, { useState }from "react";
import { BarChart, Bar, XAxis, CartesianGrid, YAxis, Legend } from "recharts";
import "./Chart.css";
import Selector from "../Select/Select";

function Chart({ chartsdata }) {

  const [selected, setSelected] = useState()
  const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props;
console.log(selected)
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={12}
          textAnchor="end"
          fill="#9da19e"
          fontSize="16"
          sclaeToFit="true"
          transform="rotate(-27)"
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div className="chartWrapper">
   
      <div className="chart">
      <div className="selectorWrapper">
        Select column to display:
        <Selector theSelected={setSelected} />
      </div>
        <BarChart
          width={1770}
          height={665}
          fontSize={14}
          data={
            chartsdata
              ? chartsdata.data.slice(6).map((chartsdat) => ({
                  name: chartsdat[0],
                  pv: chartsdat[selected],
                }))
              : ""
          }
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            interval={0}
            allowDataOverflow="true"
            minTickGap="255"
            tickSize="12"
            dataKey="name"
            scale="auto"
            tick={<CustomizedAxisTick />}
          />
          <YAxis />
          <Legend />
          <CartesianGrid strokeDasharray="1 1" />
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default Chart;
