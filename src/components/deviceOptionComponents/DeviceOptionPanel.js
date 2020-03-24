import React, {useContext} from "react";
import Button from "@material-ui/core/Button";
import Context from "../contexts/DeviceOptionContext";
import GetMaxId from "../../shared/Helpers";

export default function DeviceOptionPanel({options}) {
    const {addDeviceOption} = useContext(Context);
    const {fetchData} = useContext(Context);

    const panelStyle = {
        display: "flex",
        flexDirection: "row",
        padding: "0rem",
        margin: "2rem",
        border: "1px solid #ccc",
        borderRadius: "6px",
        color: "white",
        backgroundColor: "#ccc",
        textAlign: "left"
    };

    function Add() {
        const maxId = GetMaxId(options);

        //TODO: вызывать модальное окно добавления элемента
        var newValue = {
            id: maxId + 1,
            name: "NewDevice_10",
            ProduserUnionKey: "gr111",
            description: "",
            autoBuild: true,
            exchangeKeys: ["NewDevice_10 TcpIp=50000 Addr=10"]
        };
        addDeviceOption(newValue);
    }

    return (
        <div style={panelStyle}>
            <h1 margin="10rem">Кол-во устройств: {options.length}</h1>
            <Button variant="contained" onClick={fetchData}>
                Get data
            </Button>
            <Button variant="contained" onClick={Add}>
                Add Device
            </Button>
        </div>
    );
}
