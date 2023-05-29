
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';


const Chat: React.FC = () => {
  const [messages, setMessages] = useState<any>([

  ]); // Replace with your chat message state

  const handleSendMessage = (message:any) => {
    // Handle sending a new message
    // Update the messages state with the new message
    setMessages([...messages, message]);
  };

  return (
    <div className="chat">
      <div className='h-12'></div>
      <div className="chat-messages">
        {messages.map((message:any, index:number) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="chat-input">
        {/* Add input field and send button */}
        <input type="text" placeholder='Enter message here'/>
        <div className='p-1 w-24 rounded-lg bg-pink-500 text-white'>Send</div>
        {/* Call handleSendMessage with the entered message */}
      </div>
    </div>
  );
};

export default Chat;
