import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

interface Participant {
  id: string;
  name: string;
  isAdmin: boolean;
}

interface GroupVideoCallProps {
  participants: Participant[];
}

const GroupVideoCall: React.FC<GroupVideoCallProps> = () => {

const router=useRouter()

const { icip }=router.query

const [participants,setParticipents]=useState([
  {
    id:'0',
    name:"h",
    isAdmin:false
  },
  {
    id:'1',
    name:"hanu",
    isAdmin:true
  }
])

  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isVideoEnabled, setVideoEnabled] = useState<boolean>(true);
  const [isAudioEnabled, setAudioEnabled] = useState<boolean>(true);

  useEffect(() => {
    // Initialize video references
    videoRefs.current = new Array(participants.length)
      .fill(null)
      .map(() => document.createElement('video'));

    // Access user media
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((mediaStream) => {
        setStream(mediaStream);
      })
      .catch((error) => {
        console.log('Error accessing media devices:', error);
      });

    // Clean up
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  useEffect(() => {
    if (stream) {
      // Attach media stream to video elements
      videoRefs.current.forEach((videoRef, index) => {
        videoRef.srcObject = stream;
        videoRef.play().catch((error) => {
          console.log('Error playing video:', error);
        });
        videoRef.muted = participants[index].id === 'self'; // Mute self video
      });
    }
  }, [stream, participants]);

  const handleToggleVideo = () => {
    setVideoEnabled(!isVideoEnabled);
    stream?.getVideoTracks().forEach((track) => {
      track.enabled = !isVideoEnabled;
    });
  };

  const handleToggleAudio = () => {
    setAudioEnabled(!isAudioEnabled);
    stream?.getAudioTracks().forEach((track) => {
      track.enabled = !isAudioEnabled;
    });
  };

  return (
    <div className="group-video-call">
      {participants.map((participant, index) => (
        <div key={participant.id} className="participant">
          <video ref={(ref) => (videoRefs && videoRefs.current && videoRefs.current[index] === ref)} />
          <p>{participant.name}</p>
          {participant.isAdmin && (
            <div className="controls">
              <button onClick={handleToggleVideo}>
                {isVideoEnabled ? 'Disable Video' : 'Enable Video'}
              </button>
              <button onClick={handleToggleAudio}>
                {isAudioEnabled ? 'Disable Audio' : 'Enable Audio'}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GroupVideoCall;


// read enscriptions
// 

// "Learn Brahmi Alphabet with Fun Activities": This blog provides various interactive and engaging activities to introduce Brahmi alphabets to kindergarten kids. It includes printable worksheets, coloring pages, and games to make the learning process enjoyable.

// "Brahmi Script for Kids: Introduction and Basics": This blog offers a simple introduction to Brahmi script, explaining its historical significance and basic concepts. It provides step-by-step guides on how to write each Brahmi letter, accompanied by illustrations and mnemonic devices to help kids remember the shapes.

// "Fun and Creative Ways to Learn Brahmi Script": This blog focuses on creative learning techniques to teach Brahmi script to kindergarten kids. It suggests using play-based learning, such as making sand or clay models of Brahmi letters, creating craft projects, or using digital tools to practice writing.

// "Brahmi Flashcards and Memory Games for Kids": This blog offers printable flashcards featuring Brahmi letters, along with memory games that reinforce letter recognition and recall. The games can be played individually or in groups, making learning a fun and social experience.

// "Storytelling with Brahmi: Teaching Letters through Tales": This blog combines storytelling with teaching Brahmi letters. It provides short stories or anecdotes for each letter, connecting the letter's shape to a memorable character or object. This approach helps kids associate letters with meaningful contexts, aiding their retention and understanding.