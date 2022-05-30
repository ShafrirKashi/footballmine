import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Table.css";
import { Table } from "antd";
import headers from "../../Assets/Data/headers.json";
import Reader from "../Reader/Reader";

const columns = [
  {
    title: headers[0].head,
    dataIndex: "name",
    sorter: (a, b) => a.name - b.name,
    width: 200,
  },
  {
    title: headers[0].column,
    dataIndex: "started",
    sorter: (a, b) => a.started - b.started,
    width: 90,
  },
  {
    title: headers[0].column2,
    dataIndex: "min",
    sorter: (a, b) => a.min - b.min,
    width: 80,
  },
  {
    title: headers[0].column3,
    dataIndex: "T",
    sorter: (a, b) => a.T - b.T,
    width: 80,
  },
  {
    title: headers[0].column4,
    dataIndex: "TAtt3rd",
    width: 110,
    sorter: (a, b) => a.TAtt3rd - b.TAtt3rd,
  },
  {
    title: headers[0].column5,
    dataIndex: "FA",
    sorter: (a, b) => a.FA - b.FA,
    width: 50,
  },
  {
    title: headers[0].column6,
    dataIndex: "TO",
    sorter: (a, b) => a.TO - b.TO,
    width: 50,
  },
  {
    title: headers[0].column7,
    dataIndex: "SH",
    sorter: (a, b) => a.SH - b.SH,
    width: 50,
  },
  {
    title: headers[0].column8,
    dataIndex: "CK",
    sorter: (a, b) => a.CK - b.CK,
    width: 50,
  },
  {
    title: headers[0].column9,
    dataIndex: "FK",
    sorter: (a, b) => a.FK - b.FK,
    width: 50,
  },
  {
    title: headers[0].column10,
    dataIndex: "Cr",
    sorter: (a, b) => a.Cr - b.Cr,
    width: 50,
  },
  {
    title: headers[0].column11,
    dataIndex: "TI",
    sorter: (a, b) => a.TI - b.TI,
    width: 50,
  },
  {
    title: headers[0].column12,
    dataIndex: "GK",
    sorter: (a, b) => a.GK - b.GK,
    width: 50,
  },
  {
    title: headers[0].column13,
    dataIndex: "GTh",
    sorter: (a, b) => a.GTh - b.GTh,
    width: 60,
  },
  {
    title: headers[0].column14,
    dataIndex: "P",
    sorter: (a, b) => a.P - b.P,
    width: 50,
  },
  {
    title: headers[0].column15,
    dataIndex: "W",
    sorter: (a, b) => a.W - b.W,
    width: 50,
  },
  {
    title: headers[0].column16,
    dataIndex: "WP",
    sorter: (a, b) => a.WP - b.WP,
    width: 60,
  },
  {
    title: headers[0].column17,
    dataIndex: "Total",
    sorter: (a, b) => a.Total - b.Total,
    width: 100,
  },
  {
    title: headers[0].column18,
    dataIndex: "Att",
    sorter: (a, b) => a.Att - b.Att,
    width: 100,
  },
  {
    title: headers[0].column19,
    dataIndex: "Mid",
    sorter: (a, b) => a.Mid - b.Mid,
    width: 100,
  },
  {
    title: headers[0].column20,
    dataIndex: "Def",
    sorter: (a, b) => a.Def - b.Def,
    width: 100,
  },
  {
    title: headers[0].column21,
    dataIndex: "Fwd",
    sorter: (a, b) => a.Fwd - b.Fwd,
    width: 100,
  },
  {
    title: headers[0].column22,
    dataIndex: "FwdAtt3rd",
    width: 110,
    sorter: (a, b) => a.FwdAtt3rd - b.FwdAtt3rd,
    width: 110,
  },
  {
    title: headers[0].column23,
    dataIndex: "Bck",
    sorter: (a, b) => a.Bck - b.Bck,
    width: 60,
  },
  {
    title: headers[0].column24,
    dataIndex: "Sde",
    sorter: (a, b) => a.Sde - b.Sde,
    width: 60,
  },
  {
    title: headers[0].column25,
    dataIndex: "Sh",
    sorter: (a, b) => a.Sh - b.Sh,
    width: 60,
  },
  {
    title: headers[0].column26,
    dataIndex: "Med",
    sorter: (a, b) => a.Med - b.Med,
    width: 60,
  },
  {
    title: headers[0].column27,
    dataIndex: "Lng",
    sorter: (a, b) => a.Lng - b.Lng,
    width: 60,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

function DataTable({ tabsdata }) {
  const [results, setResults] = useState(false);
        tabsdata(results);
 


  return (
    <div className="table">
      <Reader csvfile={setResults} />
      <Table
        scroll={{
          y: "93vh",
        }}
        pagination={{
          pageSize: 5550,
        }}
        columns={columns}
        dataSource={
          results
            ? results.data.slice(6).map((result) => ({
                name: result[0],
                min: result[1],
                started: result[2],
                T: result[3],
                TAtt3rd: result[4],
                FA: result[5],
                TO: result[6],
                SH: result[7],
                CK: result[8],
                FK: result[9],
                Cr: result[10],
                TI: result[12],
                GK: result[13],
                GTh: result[13],
                P: result[14],
                W: result[15],
                WP: result[16],
                Total: result[17],
                Att: result[18],
                Mid: result[19],
                Def: result[20],
                Fwd: result[21],
                FwdAtt3rd: result[22],
                Bck: result[23],
                Sde: result[24],
                Sh: result[25],
                Med: result[26],
                Lng: result[27],
              }))
            : ""
        }
        onChange={onChange}
      />
    </div>
  );
}

export default DataTable;
