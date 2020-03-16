import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Loader from "../../shared/Loader";
import DeviceOptionList from "./DeviceOptionList";
import Context from "../contexts/DeviceOptionContext";

export default function DeviceOption() {
  //SET STATE-----------------------------------------------------------------------
  const [deviceOptions, setDeviceOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  //GET input DATA-------------------------------------------------------------------
  //hook выполняется после загрузки DOM дерева.
  var deviceOptionsMoq = [
    {
      id: 1,
      name: "NewDevice_1",
      ProduserUnionKey: "gr111",
      description: "",
      autoBuild: true,
      exchangeKeys: ["NewDevice_1 TcpIp=50000 Addr=1"]
    },
    {
      id: 2,
      name: "NewDevice_2",
      ProduserUnionKey: "gr111",
      description: "",
      autoBuild: true,
      exchangeKeys: ["NewDevice_2 TcpIp=50000 Addr=2"]
    }
  ];

  useEffect(() => {
    //DEBUG: добавлена задержка для отладки
    setTimeout(() => {
      setDeviceOptions(deviceOptionsMoq);
      setLoading(false);
    }, 1000);
  }, []);

  function fetchData() {
    //DEBUG: добавлена задержка для отладки
    setLoading(true);
    setTimeout(() => {
      setDeviceOptions(deviceOptionsMoq);
      setLoading(false);
    }, 1000);
  }

  function removeDeviceOption(id) {
    console.log(id);

    var newOptions = deviceOptions.filter(opt => opt.id !== id);
    setDeviceOptions(newOptions);
  }

  function addDeviceOption(deviceOption) {
    //var newTodos = todos.filter(todo => todo.id !== id);
    //setTodos(newTodos);
  }

  return (
    <Context.Provider value={{ addDeviceOption, removeDeviceOption }}>
      <div>
        {loading && <Loader />}
        {deviceOptions.length ? (
          <DeviceOptionList options={deviceOptions}></DeviceOptionList>
        ) : loading ? null : (
          <p>Нет Устройств</p>
        )}

        <Button variant="contained" onClick={fetchData}>
          Get data
        </Button>
      </div>
    </Context.Provider>
  );
}
