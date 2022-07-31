import React from "react";
import "./Controlplane.css";

const Controlplane = ({ setModalVisibility, isModalVisible }) => {
    function handleClick(event) {
        setModalVisibility(true);
    }
    return (
        <div className="controlplane">
            <button
                className={`button-65 ${isModalVisible ? "disabled" : ""}`}
                onClick={handleClick}
            >
                Deploy!
            </button>
        </div>
    );
};

export default Controlplane;
