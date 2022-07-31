import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ListContainerElement from "./ListContainerElement";
import "./ListContainers.css";
import ListContainerHeader from "./ListContainerHeader";
import Controlplane from "./Controlplane";

const HOST_URL = "http://localhost:8080";

const ListContainers = ({ setModalVisibility, isModalVisible }) => {
    const [containersData, setContainersData] = useState({
        data: [],
        loading: -1,
    });

    useEffect(() => {
        setContainersData((prevContainersData) => {
            return {
                ...prevContainersData,
                loading: 0,
            };
        });
        axios.get(HOST_URL + "/containers").then((response) => {
            setContainersData((prevContainersData) => {
                return {
                    data: response.data,
                    loading: 1,
                };
            });
        });
    }, []);

    return (
        <div>
            <Controlplane
                setModalVisibility={setModalVisibility}
                isModalVisible={isModalVisible}
            />
            <h1 className="list-header">Containers List</h1>
            {containersData.loading === -1 ? (
                <div>No data loaded</div>
            ) : containersData.loading === 0 ? (
                <div>Loading...</div>
            ) : (
                <div className="containers-list-data">
                    <ListContainerHeader />
                    {containersData.data.map((container) => (
                        <ListContainerElement
                            key={container.Id}
                            container={container}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ListContainers;
