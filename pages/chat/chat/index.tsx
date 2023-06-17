

import { supabase } from '@/lib/Store';
import { range } from '@/util/createRange';
import { faker } from '@faker-js/faker';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BiSend } from 'react-icons/bi';

import { FaBackward } from 'react-icons/fa';

const get_messages=async(userId:any)=>{
  const {data,error}=await supabase.from('संदेश').select('*').eq('sender',userId)
  return {data,error}
}


const get_public_messages=async()=>{
  const {data,error}=await supabase.from('संदेश').select('*').eq('type',"public")
  return {data,error}
}

const create_public_messages=async(data:any,userId:any)=>{
  const {data:mesg,error}=await supabase.from('संदेश').select('*').insert([{
    data:data,
    sender:userId,
    type:"public"
  }])
  return {data,error}
}



const ChatMessage = ( message:any ) => {
  console.log(message,'-----.   message')
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
  )

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
    router.push(`/?sect=astrology`)
  }}
  >

<FaBackward className='p-1 text-3xl font-bold hover:text-white'/>
  </div>
  {/* <div><Communication/></div> */}
</div>
      <div className="chat-messages h-[80%] bg-gray-300">
        {messages.map((message:any, index:number) => {
console.log(message,'--=<>')
if(messages){

  return <ChatMessage key={index} message={message.message} />
}
        }
        )}
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
