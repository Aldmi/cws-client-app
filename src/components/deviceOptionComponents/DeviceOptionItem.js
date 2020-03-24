import React, {useContext} from "react";
import ListItem from '@material-ui/core/ListItem';
import Context from "../contexts/DeviceOptionContext";

export default function DeviceOptionItem({deviceOption}) {
    //получить Объекты из контекста по ключу
    const {removeDeviceOption} = useContext(Context);

    const itemStyle = {
        padding: "2rem",
        margin: "1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
    };

    return (
        <ListItem button style={itemStyle}>
      <span>
        <strong>{deviceOption.id}</strong>
          &nbsp; {/*символ пробела */}
          {deviceOption.name}
      </span>
            <button
                className="rm"
                onClick={removeDeviceOption.bind(null, deviceOption.id)}
            >
                &times;
            </button>
        </ListItem>
    );
}
