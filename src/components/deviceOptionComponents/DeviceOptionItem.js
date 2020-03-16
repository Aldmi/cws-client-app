import React, { useContext } from "react";
import Context from "../contexts/DeviceOptionContext";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem"
  },
  input: {
    marginRight: "1rem"
  }
};

export default function DeviceOptionItem({ deviceOption }) {
  //получить Объекты из контекста по ключу
  const { removeDeviceOption } = useContext(Context);

  return (
    <li style={styles.li}>
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
    </li>
  );
}
