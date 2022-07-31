import React from "react";
import "./ListContainerElement.css";

const ListContainerElement = ({ container }) => {
    return (
        <div className="list-container-element">
            <div>{container.Id.substring(0, 12)}</div>
            <div>{container.Image}</div>
            <div>{container.Command}</div>
            <div>{container.Created}</div>
            <div>{container.Status}</div>
            <div>
                {container.Names.map((name) => (
                    <div key={name}>{name}</div>
                ))}
            </div>
        </div>
    );
};

export default ListContainerElement;
