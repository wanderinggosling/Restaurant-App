import React from 'react';
import './Modal.css'
const Trigger = ({ triggerText, buttonRef, showModal ,currentMenu}) => {
  return (
    <button
      className=" modal-button"
      ref={buttonRef}
      onClick={showModal}
      currentmenu={currentMenu}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;