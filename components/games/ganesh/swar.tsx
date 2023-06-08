import { useState, useEffect, useRef } from "react"
import useWindowSize from "react-use/lib/useWindowSize"
import { faker } from "@faker-js/faker"
import { Brahmiplate,  brahmiSwar,  brahmi_shift } from "@/components/classes/brahmi"
import Confetti from "react-confetti"
import { AnimatePresence, motion } from 'framer-motion'
import { Timer } from "../Timer"
import { LetterPad } from "./LetterPad"
import { supabase } from "@/lib/Store"
import { alphabetData } from "@/lib/akshar/hindi"


const create_game = async () => {
  const { data, error } = await supabase.from('kreedA').select('*')
  return { data, error }
}

const add_mantra = async (userId: any, numb: number,t:any) => {
  const tr={t,a:numb}
  const { data, error } = await supabase.from('कोष').select('*').update([{
    mantra: (s: any) =>[{ ...s, tr}]
  }]).eq('swami', userId)
  return { data, error }
}

const reduce_mantra = async (userId: any, numb: number) => {
  const { data, error } = await supabase.from('कोष').select('*').update([{
    mantra: (s: any) => s + numb
  }]).eq('owner', userId)
  return { data, error }
}

export function getVoices() {
  let voices = speechSynthesis.getVoices();
  if(!voices.length){
    // some time the voice will not be initialized so we can call spaek with empty string
    // this will initialize the voices 
    let utterance = new SpeechSynthesisUtterance("");

    // utterance.addEventListener("boundary", (event) => {
    //   // const { charIndex, charLength } = event;
    //   // setHighlightSection({ from: charIndex, to: charIndex + charLength });
    // });

    speechSynthesis.speak(utterance);
    voices = speechSynthesis.getVoices();
  }
  return voices;
}

export function speak(text:any, voice:any, rate:any, pitch:any, volume:any) {
  // create a SpeechSynthesisUtterance to configure the how text to be spoken 

  let speakData = new SpeechSynthesisUtterance();
  speakData.volume = volume; // From 0 to 1
  speakData.rate = rate; // From 0.1 to 10
  speakData.pitch = pitch; // From 0 to 2
  speakData.text = text;
  speakData.lang = 'hi-IN';
  speakData.voice = voice;
  console.log("start speaking")
  // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
  speechSynthesis.speak(speakData);

}


export function pauseSpeak(){
  speechSynthesis.pause()
}

export function stopSpeak(){
  speechSynthesis.cancel()
}

export function resumeSpeak(){
  speechSynthesis.resume()
}





export const Swar = (props:any) => {

  const [set, setSet] = useState<any>(faker.helpers.arrayElements([...brahmiSwar()].filter(i => i[2] !== 'fi' || null), 4))
  const [a, setA] = useState<any>(faker.helpers.arrayElement(set))
  const [success, setSuccess] = useState<any>(null)
  const [wrong, setWrong] = useState<any>(null)
  const [score, setScore] = useState<any>(0)
  const { width, height } = useWindowSize()


  useEffect(() => {
    let mount = true
    if (mount) {
      setA(faker.helpers.arrayElement(set))
    }
    return () => {
      mount = false
    }
  }, [set])

  const [mute, toggle] = useState(false)
  // vibrate
  useEffect(() => {
    let mount = true
    if (mount && wrong) {

      // enable vibration support
      navigator.vibrate = navigator.vibrate;
      console.log("first", navigator)

      if (navigator.vibrate) {
        // vibration API supported
        navigator.vibrate(1000);
      }
    }

    return () => {
      mount = false
    }
  }, [wrong])

  // animate
  useEffect(() => {
    let mount = true
    if (mount && success) {
      setSpeaking(true)
      // enable vibration support
      navigator.vibrate = navigator.vibrate;
      console.log("first", navigator)

      if (navigator.vibrate) {
        // vibration API supported
        navigator.vibrate(1000);
        setTimeout(() => {
          setSuccess(false)
        }, 5000)
      }
    }
    return () => {
      mount = false
    }
  }, [success])

  const [start_speaking, setSpeaking] = useState(false);
  const [pending, setPending] = useState(false);
  const [speach, setSpeach] = useState<any>(alphabetData.filter(i => i.alphabet === a[1])[0]?.word);

 
// @ speak set voice
useEffect(()=>{
  let mount =true
  // console.log("---=> start", speach)
  if(mount && start_speaking && speach && success){
  console.log("---=> start found")

    if ('speechSynthesis' in window) {
      let voices = getVoices();
  console.log("---=> start speak")

      let rate = 1.0, pitch = 1.3, volume = .5;
      let text = "The line producer narrator welcomes you..";
      // console.log(voices[32],'---=>', voices[20])
      speak(speach, voices[32], rate, pitch, volume);
      setTimeout(()=>{ // speak after 2 seconds 
        rate = 0.9; pitch = 1.5, volume = 0.5;
        text = speach;
        speak(text, voices[32], rate, pitch, volume );
      }, 2000);
    }else{
      console.log(' Speech Synthesis Not Supported 😞'); 
    }
  }
  return ()=>{
    mount=false
    setSpeach(null)
    // stopSpeak()
  }
},[speach, start_speaking, success])



  return <div className=" w-[100vw] max-w-3xl m-auto  h-[90vh] overflow-hidden">
  <GameHeader mute={mute} toggle={toggle} score={score}/>

    {success && <Confetti
      width={width}
      height={height}
      numberOfPieces={score * 5}
      tweenDuration={9000}
      initialVelocityY={120}
      className="absolute w-full h-full"
      recycle={false}
    />}

    <AnimatePresence initial={false}>
      {success && <div className="m-auto text-center">
        <motion.div
          animate={{ opacity: [0, 1, 0, 1, 0, 1, 0, 1] }}

          className="flex flex-col">
          <div className="flex flex-row justify-between gap-4 p-4">

            <div className="text-5xl font-thin">
              {alphabetData && alphabetData.filter(i => i.alphabet === a[1])[0]?.alphabet ? alphabetData.filter(i => i.alphabet === a[1])[0].alphabet : "nf"}
            </div>
            <motion.div
              animate={{ opacity: [0, 1] }}
              // transition={{delay:1}}
              className="text-9xl scale-150 mt-12 p-2">{alphabetData && alphabetData.filter(i => i.alphabet === a[1])[0]?.alphabet ? alphabetData.filter(i => i.alphabet === a[1])[0].emoji : "nf"}</motion.div>
            <div className="text-3xl -ml-4 p-2">{alphabetData && alphabetData.filter(i => i.alphabet === a[1])[0]?.alphabet ? alphabetData.filter(i => i.alphabet === a[1])[0].word : "nf"}</div>
          </div>
          <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 1 }}
            className="text-7xl font-extrabold p-2 mt-4">{alphabetData && alphabetData.filter(i => i.alphabet === a[1])[0]?.alphabet ? alphabetData.filter(i => i.alphabet === a[1])[0].word.split('').map((i: any, index: number) => `${Brahmiplate[i.charCodeAt(0) -brahmi_shift] !== undefined ? Brahmiplate[i.charCodeAt(0) -brahmi_shift] : i.charCodeAt(0) < brahmi_shift ? i : i.charCode(0)}`) : "nf"}</motion.div>

        </motion.div>
      </div>

      }
      {!success && <Comp_t a={a}
        success={success} set={set} setSuccess={setSuccess} setWrong={setWrong} setSet={setSet} setScore={setScore} mute={mute}
      />}

    </AnimatePresence>



    {success && <motion.div
      animate={{ opacity: [0, 1, 0, 1, 0, 0, 1, 0, 1, 0], scale: [.95, 1.5] }}

      className=" text-center mt-12 text-5xl sm:text-7xl fade-in-up text-green-500 p-2">
      Correct!!
    </motion.div>
    }

    {wrong && <motion.div
      animate={{ opacity: [0, 1, 0, 1, 0, 0, 1, 0, 1, 0] }}
      // exit={{opacity:[0,1,0,1,0,0,1,0,1,0]}}
      className=" text-red-500 text-center p-2 mt-12 animate-wiggle text-5xl sm:text-9xl"
    >
      Wr🚫ng
    </motion.div>
    }

  </div>
}



export const Comp_t = (props: any) => {
  const { a, success, list, set, item, setSuccess, setWrong, setSet, setScore, mute } = props
  const audioRef = useRef<any>(null);

  const playSuccessAudio = () => {
    new Audio('/sound/game/service-bell-ring.mp3').play();
  }

  const playFailAudio = () => {
    new Audio('/sound/game/wrong-answer.mp3').play();
  }
 

  return <div>
    <LetterPad a={a} success={success} />
    <div className="h-12 ">
      <Timer />
    </div>
    <AnimatePresence>
      <motion.div variants={list} className="flex flex-row gap-4 p-4">
        {
          set.map((al: any, index: number) => {

            return <motion.div
              variants={item}
              whileHover={{ scale: .95 }}
              whileTap={{ scale: 1.1 }}
              animate={{ opacity: [0, 1] }}


              key={index} className={`w-32 h-32 m-auto ${success && al[2] !== a[2] && 'hidden'} text-center text-7xl p-2 cursor-pointer hover:bg-yellow-300 bg-white shadow-lg`}
              onClick={() => {

                if (al[2] === a[2]) {

                  setSuccess(true)
                {!mute &&  playSuccessAudio()}
                  setTimeout(() => {

                    setWrong(false)

                    setSet(faker.helpers.arrayElements([...brahmiSwar()].filter(i => i[2] !== 'fi' || ''), 4))
                    setScore((s: any) => s + 5)
                  }, 5000)
                } else {
                  setWrong(true)
                 {!mute && playFailAudio()}

                  setSuccess(false)
                  setScore((s: any) => s - 2)
                  setTimeout(() => {

                    setWrong(false)
                  }, 2000)


                }

              }}
            >
              {al[0]}

            </motion.div>
          })
        }
      </motion.div>
    </AnimatePresence>

  </div>
}

// attach soch to header searchbar 

const GameHeader=(props:any)=>{
  const{score , toggle, mute}=props
  return   <div className="text-sm p-2 mb-6 flex flex-row  justify-between">
  <div>

    Select the hindi letter for brahmi<br />
    score:{score}<hr />
  </div>
  <div className="flex flex-row ">

  <motion.div className="text-5xl cursor-pointer hover:bg-gray-300 rounnded-full   p-2"
    onClick={() => {
      toggle(!mute)
    }}
  >{mute ? '🔊' : '🔇'}</motion.div>

  <motion.div className="text-5xl invert cursor-pointer hover:bg-gray-300 rounnded-full   p-2"
    onClick={() => {
      toggle(!mute)
    }}
  >{mute ? '📳' : '📳'}</motion.div>
  </div>

</div>
}
// predict indexed results
// for_pages:[]
// data= strings= index= actions=¿?verbs
//  action navigation labels pops 
// 