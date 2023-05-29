import React from 'react';


const ChatMessage = ( message:any ) => {
  return (
    <div className="chat-message">
      <div className="message-sender">{message.sender}</div>
      <div className="message-content">{message.content}</div>
    </div>
  );
};

export default ChatMessage;
