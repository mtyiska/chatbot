import React from "react";

import "./ConversationItem.scss";

const ConversationItem = ({
  conversation,
  isActive,
  onConversationItemSelected,
}) => {
  let className = "conversation";

  if (isActive) {
    className += " active";
  }
  console.log(conversation);
  return (
    <div
      className={className}
      onClick={() => onConversationItemSelected(conversation.id)}
    >
      <i className={conversation.icon}></i>
      <div className="title-text">{conversation.title}</div>
      <div className="created-date">{conversation.createdAt}</div>
    </div>
  );
};

export default ConversationItem;
