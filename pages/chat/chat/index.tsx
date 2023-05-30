
import { range } from '@/util/createRange';
import { faker } from '@faker-js/faker';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { BsBack } from 'react-icons/bs';
import { FaBackward } from 'react-icons/fa';

const ChatMessage = ( message:any ) => {
  console.log(message)
  return (
    <div className="chat-message">
      <div className="message-sender">{message.sender}</div>
      <div className="message-content">{message.content}</div>
    </div>
  );
};

const Chat: React.FC = () => {
  const [ex_ai,setExAI]=useState<any>([
    {
      address:"", domain:"",token:"",chats:[{q:"",a:''}]
    },
    
  ])
  const [messages, setMessages] = useState<any>(
    range(0,7).map(()=>{
      return {
        sender: faker.helpers.arrayElement(['me','sage']),
        content:  faker.random.words()
      }
    })
  ); // Replace with your chat message state

  const handleSendMessage = (message:any) => {
    // Handle sending a new message
    // Update the messages state with the new message
    setMessages([...messages, message]);
  };

  const router=useRouter()
  return (
    <div className="chat">
      <div className='h-12'></div>
   
      <div className='w-96 h-[90vh] m-auto bg-white shadow-lg'>
<div className='h-12 w-full bg-gray-400'>
  <div className='p-2'
  onClick={()=>{
    router.back()
  }}
  >

<FaBackward className='p-1 text-3xl font-bold hover:text-white'/>
  </div>
</div>
      <div className="chat-messages h-[80%] bg-gray-300">
        {messages.map((message:any, index:number) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
      <div className="chat-input">
        {/* Add input field and send button */}
        <input type="text" placeholder='Enter message here' className='w-full h-16 p-2 text-sm'/>
        <div className='p-1 w-16 text-5xl rounded-r-lg bg-pink-500 text-white'
        onClick={()=>handleSendMessage}
        ><BiSend/></div>
        {/* Call handleSendMessage with the entered message */}
      </div>
      </div>

    </div>
  );
};

export default Chat;
