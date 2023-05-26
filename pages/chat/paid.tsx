import { IconButton } from '@/action/button/IconButton';
import React, { useEffect, useRef, useState } from 'react';
import { FcEndCall } from 'react-icons/fc';
import { MdCall } from 'react-icons/md';

interface User {
  id: string;
  name: string;
  tokens: number;
}

const CallingApplication: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: 'user-1',
    name: 'Hemant Kumar Dixit',
    tokens: 10,
  });
  const [callDuration, setCallDuration] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (callDuration === 30) {
      // Consume tokens after 30 seconds
      setUser((prevUser) => ({
        ...prevUser,
        tokens: prevUser.tokens - 1,
      }));
      setCallDuration(0);
    }
  }, [callDuration]);

  const handleStartCall = () => {
    if (timerRef.current) return; // Call already in progress

    timerRef.current = setInterval(() => {
      setCallDuration((prevDuration) => prevDuration + 1);
    }, 1000);
  };

  const handleEndCall = () => {
    if (!timerRef.current) return; // No active call

    clearInterval(timerRef.current);
    timerRef.current = null;
    setCallDuration(0);
  };

  return (
    <div className="calling-application  p-4 h-[90vh] w-80 mb-12 bg-white m-auto">
      <div  className='h-12'></div>
      <h1>Calling Application</h1>
      <div>
        <h2>Caller: {user.name}</h2>
        <p>Tokens: {user.tokens}</p>
      </div>
      <div>
        <h2>Call Duration: {callDuration} seconds</h2>
      </div>
      <div className='flex flex-row justify-around'>
        <IconButton icon={<MdCall className='text-green-500 text-7xl'/>} action={handleStartCall}/>
        <IconButton icon={<FcEndCall className='text-red-500 text-7xl'/>} action={handleEndCall}/>
    
      </div>
    </div>
  );
};

export default CallingApplication;
