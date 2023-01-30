import React from "react";

const Popup = (props) => {
  const { isOpen, message } = props;

  const className = isOpen ? 'popup popup_open' : 'popup'
  return (
    <div className={className}>
      <p className="popup__text">{message || 'Что-то пошло не так...'}</p>
    </div>
  )
}

export default Popup;