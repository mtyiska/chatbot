import React from "react";

import ConversationItem from "../conversation-item/ConversationItem";
import "./ConversationList.scss";

const ConversationList = ({
  conversations,
  selectedConversationId,
  onConversationItemSelected,
}) => {
  const conversationItems = conversations.map((conversation) => {
    const conversationIsActive =
      selectedConversationId && conversation.id === selectedConversationId.id;
    return (
      <ConversationItem
        key={conversation.id}
        onConversationItemSelected={onConversationItemSelected}
        isActive={conversationIsActive}
        conversation={conversation}
      />
    );
  });

  return <div id="conversation-list">{conversationItems}</div>;
};

export default ConversationList;
