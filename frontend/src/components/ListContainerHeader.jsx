import React from "react";
import "./ListContainerElement.css";

const ListContainerHeader = () => {
    return (
        <div className="list-container-header">
            <div>Id</div>
            <div>Image</div>
            <div>Command</div>
            <div>Created</div>
            <div>Status</div>
            <div>Names</div>
        </div>
    );
};

export default ListContainerHeader;
