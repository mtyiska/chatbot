import React from "react";

import Message from "./Message";
import "./MessageList.scss";

const MessageList = ({ selectedConversation }) => {
  const messageItems = selectedConversation.messages.map((message) => {
    return (
      <Message
        key={message.messageID}
        userID={message.userID}
        message={message}
      />
    );
  });

  return <div id="chat-message-list">{messageItems}</div>;
};

export default MessageList;
