import React from "react";
import ReactDOM from "react-dom";
import close from "../../assets/close.svg";

const PortalModal = ({ moreTxt, isOpen, onClose }) => {

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal" id="modal">
      <div className="closeContainer">
      <div><img src={close} onClick={onClose} /></div>
      </div>
      <div className="moreText">{moreTxt}</div>
      </div>,document.body
  );
};

export default PortalModal;
