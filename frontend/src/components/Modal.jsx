import React, { useEffect } from "react";
import "./Modal.css";
import ModalCard from "./ModalCard";

const Modal = ({ children, setModalVisibility }) => {
    function handleEsc(event) {
        if (event.key === "Escape") {
            setModalVisibility(false);
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div className="modal">
            <ModalCard>{children}</ModalCard>
        </div>
    );
};

export default Modal;
