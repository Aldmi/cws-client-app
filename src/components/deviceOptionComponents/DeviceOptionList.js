import React, { useContext } from "react";
import List from '@material-ui/core/List';
import Context from "../contexts/DeviceOptionContext";
import DeviceOptionItem from './DeviceOptionItem'

const styles = {
  ul: {
    listStyle: "none",
    margin: 10,
    padding: 10,
    border: "1px solid #ccc",
    borderRadius: "4px",
  }
};

export default function DeviceOptionList({ options }) {
  console.log(JSON.stringify(options));

  const { addDeviceOption } = useContext(Context);  //TODO: добавить кнопку ADD

  return (
    <div>
      <h1>{options.length}</h1>
      <ul style= {styles.ul}> 
          { options.map((opt, index)=>{
              return <DeviceOptionItem key={opt.id} deviceOption={opt} index={index}/>
          })}
    </ul>
    </div>
  );
}
