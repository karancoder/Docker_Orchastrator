import React, { useState } from "react";
import "./DeployContainer.css";
import axios from "axios";

const HOST_URL = "http://localhost:8080";

const DeployContainer = ({ setModalVisibility }) => {
    const [containerImage, setContainerImage] = useState();

    function handleClick(event) {
        event.preventDefault();
        axios.post(HOST_URL + "/containers/" + containerImage + "/run");
        setModalVisibility(false);
    }

    function handleChange(event) {
        setContainerImage(event.target.value);
    }

    return (
        <form className="deploy-container" onSubmit={handleClick}>
            <h2>Deploy Container!</h2>
            <input
                className="deploy-container-input"
                value={containerImage}
                placeholder="Image Name"
                onChange={handleChange}
            />
            <button className="button-3">Deploy!</button>
        </form>
    );
};

export default DeployContainer;
