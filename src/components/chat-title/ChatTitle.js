import React from "react";
import "./ChatTitle.scss";
import TrashIcon from "../controls/TrashIcon";

const ChatTitle = ({ selectedConversation, onDeleteConversation }) => {
  let chatTitleContents = null;
  if (selectedConversation) {
    chatTitleContents = (
      <>
        <span>{selectedConversation.title}</span>

        <div
          onClick={() => {
            onDeleteConversation();
          }}
          title="Delete Conversation"
        >
          <TrashIcon />
        </div>
      </>
    );
  }

  return <div id="chat-title">{chatTitleContents}</div>;
};

export default ChatTitle;
