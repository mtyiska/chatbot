import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  conversationChanged,
  newMessageAdded,
  conversationDeleted,
  conversationsRequested,
} from "../../store/actions";

import ConversationSearch from "../../components/conversation/conversation-search/ConversationSearch";
import ConversationList from "../../components/conversation/conversation-list/ConversationList";
import NewConversation from "../../components/conversation/new-conversation/NewConversation";
import NoConversations from "../../components/conversation/no-conversations/NoConversations";
import ChatTitle from "../../components/chat-title/ChatTitle";
import MessageList from "../../components/message/MessageList";
import ChatForm from "../../components/chat-form/ChatForm";

import "./ChatShell.scss";

const ChatShell = ({
  conversations,
  selectedConversation,
  conversationChanged,
  onMessageSubmitted,
  onDeleteConversation,
  loadConversations,
}) => {
  useEffect(() => {
    loadConversations();
  }, [loadConversations]);

  let conversationContent = (
    <>
      <NoConversations />
    </>
  );

  if (conversations.length > 0) {
    conversationContent = (
      <>
        <MessageList selectedConversation={selectedConversation} />
      </>
    );
  }

  return (
    <div id="chat-container">
      <ConversationSearch conversations={conversations} />
      <ConversationList
        onConversationItemSelected={conversationChanged}
        conversations={conversations}
        selectedConversationId={selectedConversation}
      />
      <NewConversation />
      <ChatTitle
        selectedConversation={selectedConversation}
        onDeleteConversation={onDeleteConversation}
      />
      {conversationContent}
      <ChatForm
        onMessageSubmitted={onMessageSubmitted}
        selectedConversation={selectedConversation}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    conversations: state.conversationState.conversations,
    selectedConversation: state.conversationState.selectedConversation,
  };
};

const mapDispatchToProps = (dispatch) => ({
  conversationChanged: (conversationId) =>
    dispatch(conversationChanged(conversationId)),
  onMessageSubmitted: (messageText) => {
    dispatch(newMessageAdded(messageText));
  },
  onDeleteConversation: () => {
    dispatch(conversationDeleted());
  },
  loadConversations: () => {
    dispatch(conversationsRequested());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatShell);
