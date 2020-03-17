import React, { useContext } from "react";
import List from "@material-ui/core/List";
import DeviceOptionItem from "./DeviceOptionItem";


export default function DeviceOptionList({ options }) {
  console.log(JSON.stringify(options));

  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    margin: "1rem",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px"
  };

  return (
    <div>
      <List style={flexContainer}>
        {options.map((opt, index) => {
          return (
            <DeviceOptionItem key={opt.id} deviceOption={opt} index={index} />
          );
        })}
      </List>
    </div>
  );
}
