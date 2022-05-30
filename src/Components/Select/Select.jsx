import React, { useState } from "react";
import { Select } from "antd";
const { Option } = Select;

function Selector({ theSelected }) {
  const [selected, setSelected] = useState();

  const handleChange = (value) => {
    setSelected(value);
    theSelected(selected);
  };

  return (
    <div className="selectorWrapper2">
      <Select
        defaultValue="Select Chart"
        style={{
          width: 120,
          marginLeft: 20
        }}
        onChange={handleChange}
      >
        <Option value="1">Min</Option>
        <Option value="2">T</Option>
        <Option value="3">T Att 3rd</Option>
        <Option value="4">FA</Option>
        <Option value="5">TO</Option>
        <Option value="6">SH</Option>
        <Option value="7">CK</Option>
        <Option value="8">FK</Option>
        <Option value="9">Cr</Option>
        <Option value="10">TI</Option>
        <Option value="11">GK</Option>
        <Option value="12">GTh</Option>
        <Option value="13">P</Option>
        <Option value="14">W</Option>
        <Option value="15">W%</Option>
        <Option value="16">Total</Option>
        <Option value="17">Att</Option>
        <Option value="18">Mid</Option>
        <Option value="19">Def</Option>
        <Option value="20">Fwd</Option>
        <Option value="21">Fwd att 3rd</Option>
        <Option value="22">Bck</Option>
        <Option value="23">Sde</Option>
        <Option value="24">Sh</Option>
        <Option value="25">Med</Option>
        <Option value="26">Lng</Option>
      </Select>
    </div>
  );
}

export default Selector;
