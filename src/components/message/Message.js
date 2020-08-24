import React from "react";

import "./Message.scss";

const Message = ({ isMyMessage, message }) => {
  let messageClass = "message-row";
  let imageThumbnail = null;

  if (message.userID) {
    messageClass += " my-message";
  } else {
    messageClass += " other-message";
    imageThumbnail = <i className={message.icon}></i>;
  }

  return (
    <div className={messageClass}>
      <div className="message-content">
        {imageThumbnail}
        <div className="message-text">{message.message}</div>
        <div className="message-time">{message.createdAt}</div>
      </div>
    </div>
  );
};

export default Message;
