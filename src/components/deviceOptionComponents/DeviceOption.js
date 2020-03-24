import React, {useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import Loader from "../../shared/Loader";
import Context from "../contexts/DeviceOptionContext";

import DeviceOptionList from "./DeviceOptionList";
import DeviceOptionPanel from "./DeviceOptionPanel";

export default function DeviceOption() {
    //SET STATE-----------------------------------------------------------------------
    const [deviceOptions, setDeviceOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    //GET input DATA-------------------------------------------------------------------
    //hook выполняется после загрузки DOM дерева.
    const deviceOptionsMoq = [
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
        },
        {
            id: 3,
            name: "NewDevice_3",
            ProduserUnionKey: "gr111",
            description: "",
            autoBuild: true,
            exchangeKeys: ["NewDevice_3 TcpIp=50000 Addr=3"]
        },
        {
            id: 4,
            name: "NewDevice_4",
            ProduserUnionKey: "gr111",
            description: "",
            autoBuild: true,
            exchangeKeys: ["NewDevice_4 TcpIp=50000 Addr=4"]
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
        setDeviceOptions([]);
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
        var newOptions = deviceOptions.concat(deviceOption);
        setDeviceOptions(newOptions);
    }

    return (
        <Context.Provider
            value={{addDeviceOption, removeDeviceOption, fetchData}}
        >
            <div>
                <h2>Device options</h2>
                <DeviceOptionPanel options={deviceOptions}></DeviceOptionPanel>
                {loading && <Loader/>}
                {deviceOptions.length ? (
                    <DeviceOptionList options={deviceOptions}></DeviceOptionList>
                ) : loading ? null : (
                    <p>Нет Устройств</p>
                )}
            </div>
        </Context.Provider>
    );
}
