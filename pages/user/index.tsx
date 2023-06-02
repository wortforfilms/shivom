
import { sunsign } from "@/canvas/chart/d3/vedic"
import { RingNakshatra } from "@/canvas/gears/ring_nakshatra"
import { ObjectInfo } from "@/elements/object_display"
import { gold } from "@/sty"
import Image from 'next/image'
import { useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"

import { MhahPanchang } from 'mhah-panchang';
import useWindowSize from "react-use/lib/useWindowSize"
import  Confetti  from "react-confetti"

const User=(props:any)=>{

  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
const [user,setUser]=useState(earth?.auth?.user)
const [games,setGames]=useState()
const [kosh,setKosk]=useState()
const [deposite,setDeposite]=useState()
const router=useRouter()

const [sunsign,setSunSign]=useState<any>('')
const [kundali,setKundali]=useState( {
  sunSign: 'Leo',
  moonSign: 'Cancer',
  ascendant: 'Aries'
}
)
const info={
  tithi:"",
  pal:"",
  chandra:"",
  grah:[],
  nakshatra:[],
  location:[],
  divas:[],
  kaal:"",
  ghadi:"",
  mahurat:""
}


var obj = new MhahPanchang();

var [panch,setPunch] = useState(obj.calculate(new Date(user.dob)));
var [vartamaan,setVartamaan] = useState<any>(obj.calculate(new Date()));
// console.log(mhahObj);

useEffect(()=>{
let mount=true
if(mount){
if(earth?.auth?.authenticated){
  return
} else {
  router.push('/auth/login')
}
}
return ()=>{mount=false}
},[])

const { width, height } = useWindowSize()
// console.log(moon_phase(new Date(user.dob)))
  return <div className="p-4 w-full">
    <div className="h-12"></div>

    <Confetti
      width={width}
      height={height}
      numberOfPieces={3000}
      tweenDuration={5000}
      // initialVelocityY={70}
      recycle={false}
      
    />
{/* <PostCreator/> */}
<div className="flex flex-col sm:flex-row gap-4">

<UserCard user={user} kundali={kundali}/>
<div className="flex flex-row flex-wrap gap-4">

<UserZodiac zod={sunsign}/>
<UserRaasi zod={'Cancer'}/>
</div>
</div>
<ProfileStatus user={user}/>
<div className="flex flex-col  sm:flex-row justify-around ">

<Janm user={user}/>
<Aaj />
</div>

<RingNakshatra/>

<Image
    src="/img/indian2.png"
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
quality={100}
    className="w-full  invert  justify-start  m-auto"
    />

<ObjectInfo data={vedic_for_user} label="User Yoga"/>

<Zodiac/>
<ZodiacPosition/>
<ZodiacCalculator user={user} setSunSign={setSunSign}/>
<MoonSignCalculator user={user}/>
<Image
    src="/img/astrological_chart.png"
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
quality={100}
    className="w-1/2  rounded-full  justify-start opacity-50 m-auto"
    />



  </div>
}

export default User


export const ProfileStatus=(props:any)=>{
  const {user}=props
  return <div className="flex flex-row justify-around gap-4 text-center p-4 rounded-lg shadow-lg bg-white mt-8 mb-8">

  <div className="text-sm font-bold flex flex-col"><div>
    Biomed: </div><div className="font-normal">{user.biomed?"done":"false"}
    </div>
    </div>
  <div className="text-sm font-bold flex flex-col"><div>
    Profiled: </div><div className="font-normal">{user.profiled?"done":"false"}
    </div>
    </div>
  <div className="text-sm font-bold flex flex-col"><div>
    Email Verified: </div><div className="font-normal">{user.email_verified?"done":"false"}
    </div>
    </div>
  <div className="text-sm font-bold flex flex-col"><div>
    Phone Verified: </div><div className="font-normal">{user.phone_verified?"done":"false"}
    </div>
    </div>
  </div>
}

export const Zodiac=()=>{

  return <div className="flex flex-row gap2 invert justify-around flex-wrap">
    {
      sunsign.map((str,index)=>{
        return <div key={index} className={`${gold} shadow-lg m-4 rounded-full ring-4 ring-orange-200` }>
<Image
    src={`/img/zodiac/${str}.png`}
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
quality={100}
    className="w-32   invert justify-start  m-auto"
    />
        </div>
      })
    }
  </div>
}

export const UserZodiac=(props:any)=>{
  const {zod}=props

  return <div className="flex flex-col w-32 m-auto bg-white rounded-lg shadow-lg gap2  justify-around flex-wrap">
    <div className="relative left-0 text-5xl -mt-4">🌞</div>
    {
      sunsign.filter(i=>i===zod.toLowerCase()).map((str,index)=>{
        return <div key={index} className={`${gold} shadow-lg m-4 rounded-full ring-4 ring-orange-200` }>
<Image
    src={`/img/zodiac/${str}.png`}
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
quality={100}
    className="w-32 invert justify-start  m-auto"
    />
        </div>
      })
    }
    <h1 className="text-center">
      {zod}
      </h1>
  </div>
}

export const UserRaasi=(props:any)=>{
  const {zod}=props

  return <div className="flex flex-col w-32 m-auto bg-white rounded-lg shadow-lg gap2  justify-around flex-wrap">
    <div className="relative left-0 text-5xl -mt-4">🌙</div>
    {
      sunsign.filter(i=>i===zod.toLowerCase()).map((str,index)=>{
        return <div key={index} className={`${gold} shadow-lg m-4 rounded-full ring-4 ring-orange-200` }>
<Image
    src={`/img/zodiac/${str}.png`}
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
quality={100}
    className="w-32 invert justify-start  m-auto"
    />
        </div>
      })
    }
    <h1 className="text-center">
      {zod}
      </h1>
  </div>
}

interface Dosha {
  kapha: number;
  vata: number;
  pitta: number;
}

export const calculateDoshas = (dateOfBirth: string): Dosha => {
  // Perform dosha calculation logic here
  // This is a sample implementation, you can replace it with your own calculation logic

  const kapha = dateOfBirth.length % 3;
  const vata = dateOfBirth.length % 5;
  const pitta = dateOfBirth.length % 7;

  //  red green blue
  // ¿? ::  white black
  // {}->
  // ?/¿
  // q->u
  // kyu yu
  // mass biom profile 
  // arm leg  chest height 
  // vision hear vocal 
  // {}-{} .. ≥≥ >>˘˘ compressspread
  // t{aAaa}ndavaa
  // case {}{}{}
  // work case :: {} 
  // {}-{}-{}-{}-{}
  // trade
  // tree ad ee 
  // {ad}-{mp4}-{aiff}-{wave}-{qt}
  // distribute clock
  // {}-{}-{}
  // cosmic clock
  // hemant cosmic clock
  // HCC
  // H8
  // he l_li um yum
  // :;:  nachiketA saMvAda
  //   {} -. ip address: {} devices:[] users:[]
  // server client
  // apache framework 
  // azure aws heroku supabase 
  // serve domain on cdn 
  // serve from local server
  // big rock :: godaddy :; :;::::………ÚÚÚ
  // nandi
  // Sengoll
  // ß´˜˜©ø¬¬
  // <.≤≥¯˘<>> fragment 
  // bull
  // ∫¨¬¬∫¨ÒÒ
  // ?ox ø≈  ˛
  // rahuketu
  // {®å˙¨˚´†¨‰/* ¨´ˇ¨ */}->
  // ¥ÁYy
  // ¨¨¨¨¨¨uuUU "ÆÆ":ÚÚ
  // 

  return { kapha, vata, pitta };
};

// Zodiac sign data
export const zodiacSigns = [
  { name: 'Aries', startDate: new Date(0, 2, 21), endDate: new Date(0, 3, 19) },
  { name: 'Taurus', startDate: new Date(0, 3, 20), endDate: new Date(0, 4, 20) },
  { name: 'Gemini', startDate: new Date(0, 4, 21), endDate: new Date(0, 5, 20) },
  // Add more zodiac signs here
];



export const ZodiacPosition: React.FC = (props:any) => {

  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
  const [dateTime, setDateTime] = useState(earth?.auth?.user?.dob);
  const [zodiacPosition, setZodiacPosition] = useState('');

  const calculateZodiacPosition = () => {
    const date = new Date(dateTime);
    let zodiac = '';
console.log("first cal cul at-e")
    for (const sign of zodiacSigns) {
      console.log(sign,'--=> pratham')
      if (date >= sign.startDate && date <= sign.endDate) {
        zodiac = sign.name;
        break;
      }
    }

    setZodiacPosition(zodiac);
  };

  return (
    <div>
      <h2>Find Zodiac Position</h2>
      <div>
        <label>Date and Time:</label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
        />
      </div>
      <button onClick={calculateZodiacPosition}>Calculate</button>
      {zodiacPosition && <p>Zodiac Position: {zodiacPosition}</p>}
    </div>
  );
};


// sphere on fabric at u_mb_r_el_lA
// compressors data
// å å¬π˙å
// ´¬ length
// height width depth  1:-1
// pod{} engine
// {}= :::
// 

const ZodiacCalculator = (props:any) => {
  const {user, setSunSign}=props
  const [date, setDate] = useState(user?.dob);
  const [zodiac, setZodiac] = useState('');

  const calculateZodiac = () => {
    const month = parseInt(date?.slice(5, 7));
    const day = parseInt(date?.slice(8, 10));

    let zodiacSign = '';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      zodiacSign = 'Aquarius';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      zodiacSign = 'Pisces';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      zodiacSign = 'Aries';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      zodiacSign = 'Taurus';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      zodiacSign = 'Gemini';
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      zodiacSign = 'Cancer';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      zodiacSign = 'Leo';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      zodiacSign = 'Virgo';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      zodiacSign = 'Libra';
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      zodiacSign = 'Scorpio';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      zodiacSign = 'Sagittarius';
    } else {
      zodiacSign = 'Capricorn';
    }

    setZodiac(zodiacSign);
  };

  useEffect(() => {
    let mount=true
    if(mount){
      calculateZodiac()
    }
  
    return () => {
      mount=false
    }
  }, [date])

  useEffect(() => {
    let  mount=true
    if(mount){
      setSunSign(zodiac)
    }
  
    return () => {
      mount=false
    }
  }, [zodiac])
  
  

  return (
    <div>
      <h2>Zodiac Calculator</h2>
      {zodiac && <p>Zodiac Sign: {zodiac}</p>}
    </div>
  );
};


const MoonSignCalculator = (props:any) => {
  const {user}=props
  const [date, setDate] = useState(user.dob);
  const [moonSign, setMoonSign] = useState('');

  const calculateMoonSign = () => {
    const month = parseInt(date.slice(5, 7));
    const day = parseInt(date.slice(8, 10));

    // Define the moon sign ranges and corresponding signs
    const signRanges: [string, number, number][] = [
      ['Aries', 21, 31],
      ['Taurus', 1, 20],
      ['Taurus', 21, 31],
      ['Gemini', 1, 20],
      ['Gemini', 21, 30],
      ['Cancer', 1, 22],
      ['Cancer', 23, 31],
      ['Leo', 1, 22],
      ['Leo', 23, 31],
      ['Virgo', 1, 23],
      ['Virgo', 24, 31],
      ['Libra', 1, 23],
      ['Libra', 24, 30],
      ['Scorpio', 1, 22],
      ['Scorpio', 23, 30],
      ['Sagittarius', 1, 21],
      ['Sagittarius', 22, 31],
      ['Capricorn', 1, 19],
      ['Capricorn', 20, 31],
      ['Aquarius', 1, 18],
      ['Aquarius', 19, 29],
      ['Pisces', 1, 20],
      ['Pisces', 21, 31],
    ];

    // Find the moon sign based on the date
    let moonSign = '';
    for (let i = 0; i < signRanges.length; i++) {
      const [sign, startDay, endDay] = signRanges[i];
      if ((month === 1 && day >= startDay) || (month === 2 && day <= endDay)) {
        moonSign = sign;
        break;
      }
      if (
        (month === 12 && day >= startDay) ||
        (month === 12 && day <= endDay)
      ) {
        moonSign = sign;
        break;
      }
      if (month === i + 2 && day >= startDay && day <= endDay) {
        moonSign = sign;
        break;
      }
    }

    setMoonSign(moonSign);
  };

  useEffect(() => {
    let mount
    if(mount){
      calculateMoonSign()
    }
  
    return () => {
      mount=true
    }
  }, [date])
  

  return (
    <div>
      <h2>Moon Sign Calculator</h2>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button onClick={calculateMoonSign}>Calculate</button>
      {moonSign && <p>Moon Sign: {moonSign}</p>}
    </div>
  );
};



const vedic_for_user={
  Information:'Vedic astronomical algorithms are a set of mathematical calculations and formulas used in Vedic astrology to determine the positions of celestial bodies, calculate planetary movements, and analyze astrological charts. These algorithms are based on ancient Vedic texts, such as the Vedanga Jyotisha, which provide guidelines and principles for astronomical calculations. Here are some key aspects and components of Vedic astronomical algorithms:',
 list:[
  {"Sidereal Zodiac": "Vedic astrology uses the sidereal zodiac, which is based on the actual positions of the stars in the sky. It divides the zodiac into 12 equal parts or signs, each named after a prominent constellation. The starting point of the zodiac is often considered to be the position of the fixed star Spica (Chitra) at a specific time in history."},
 {"Planetary Positions": "Vedic astronomical algorithms calculate the precise positions of the planets at a given time. This involves determining the longitude and latitude coordinates of each planet in the zodiac. These positions are crucial for constructing astrological charts and making predictions."},
 {"Ephemeris": "An ephemeris is a tabular representation of planetary positions for a specific period. Vedic astrology relies on ephemerides that provide accurate and detailed data on the positions of celestial bodies at regular intervals of time. These ephemerides are created using advanced mathematical calculations and algorithms."},
 {"Ayanamsa": "Ayanamsa refers to the precession of the equinoxes, which is the gradual shift of the Earth's axis over time. Vedic astrology takes into account this phenomenon and adjusts the positions of planets accordingly. Different schools of Vedic astrology may use different ayanamsa values, which can lead to variations in astrological predictions."},
 {"Dasha Systems": "Vedic astrology employs dasha systems, which are time cycles that indicate the periods of influence of different planets in a person's life. The calculation of dasha periods involves complex algorithms that consider the positions and relationships of planets at the time of birth."},
 {"Bhava Calculations": "Bhavas or houses in Vedic astrology represent different areas of life. The algorithms used in Vedic astrology calculate the cusps or starting points of these houses based on the individual's birth details. The precise placement of planets within these houses is also determined using specific algorithms."},
 {"Yogas and Doshas": "Vedic astrology identifies various yogas and doshas, which are specific planetary combinations or conditions that influence a person's life. Algorithms are used to determine the presence and strength of these yogas and doshas in an astrological chart."},
],

notes:"It's important to note that Vedic astronomical algorithms have evolved over centuries and continue to be refined by scholars and practitioners. They form the basis of Vedic astrology and are used to make predictions, analyze personality traits, and provide guidance for various aspects of life. However, accurate interpretation and application of these algorithms require deep knowledge, expertise, and experience in Vedic astrology.",
}


interface User {
  username: string;
  dob: string;
  pob: string;
}

interface Kundali {
  sunSign: string;
  moonSign: string;
  ascendant: string;
}

interface UserCardProps {
  user: User;
  kundali: Kundali;
}

const UserCard: React.FC<UserCardProps> = ({ user, kundali }) => {
  return (
    <div className="user-card bg-white p-2 shadow-lg rounded-lg m-auto w-80">
      <h2>Welcome.. {user.username}</h2>
      <div className="user-details">
        <p>Date of Birth: {user.dob}</p>
        <p>Place of Birth: {user.pob}</p>
      </div>
  
    </div>
  );
};



const PlanetOrbits: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  let animationFrameId: number = 0;

  useEffect(() => {
    startAnimation();

    return () => stopAnimation();
  }, []);

  const startAnimation = () => {
    const animate = () => {
      setRotation((prevRotation) => prevRotation + 1);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
  };

  const stopAnimation = () => {
    cancelAnimationFrame(animationFrameId);
  };

  return (
    <div className="planet-orbits">
      <div className="orbit">
        <div className="planet" style={{ transform: `rotate(${rotation}deg)` }}></div>
      </div>
    </div>
  );
};


const qs=[
"What does the Kundali suggest about this person's career?",
"What are some potential challenges this person may face based on their Kundali?",
"Can you suggest any specific practices or rituals that would be beneficial for this person based on their Kundali?",
]

export  const  Janm=(props:any)=>{
  const {user}=props
  var obj = new MhahPanchang();

var [panch,setPunch] = useState(obj.calculate(new Date(user.dob)));


  return <div   className="flex flex-col gap-2">
  <h1>
  Janm
  </h1>
<div className="flex flex-col flex-wrap  gap-4 text-center p-4 w-80 rounded-lg shadow-lg bg-white mt-4 mb-4">

{Object.keys(panch).map((hea,index)=>{
  return <div  key={index}  className="flex flex-row justify-start gap-4  w-auto text-center">
    <div className="text-sm font-bold">{hea}:</div>
    <div>  {panch && Object.values(panch)[index].name}</div>
    <div>  {Object.values(panch)[index].name_en_IN}</div>
    <div>  {Object.values(panch)[index].name_en_UK}</div>
    </div>
})}</div>

  </div>
}


export const Aaj=(props:any)=>{


  var obj = new MhahPanchang();


var [vartamaan,setVartamaan] = useState(obj.calculate(new Date()));

  return <div   className="flex flex-col gap-2">
  <h1>
  Vartmaan
  </h1>
  <div className="flex flex-col flex-wrap  gap-4 text-center p-4 w-80 rounded-lg shadow-lg bg-white mt-4 mb-4">

{Object.keys(vartamaan).map((hea,index)=>{
  return <div  key={index}  className="flex flex-row justify-start gap-4  w-auto text-center">
    <div className="text-sm font-bold">{hea}:</div>
    <div>  {Object.values(vartamaan)[index].name}</div>
    <div>  {Object.values(vartamaan)[index].name_en_IN}</div>
    <div>  {Object.values(vartamaan)[index].name_en_UK}</div>
    </div>
})}</div>
  </div>
}


export const Utsav=(props:any)=>{


  var obj = new MhahPanchang();


var [vartamaan,setVartamaan] = useState(obj.calculate(new Date()));
var [utsava,setUtsava]=useState<any>("annimations")

// 

  return <div   className="flex flex-col gap-2">
  <h1>
  Utsav
  </h1>
<div className="flex flex-row flex-wrap justify-around gap-4 text-center p-4 rounded-lg shadow-lg bg-white mt-8 mb-8">

{vartamaan && Object.keys(vartamaan).map((hea,index)=>{
  return <div  key={index}  className="flex flex-col  m-auto text-center">
    <div className="thin-subhead">{hea}:</div>
    <div>  {Object.values(vartamaan)[index]?.name}</div>
    <div>  {Object.values(vartamaan)[index]?.name_en_IN}</div>
    <div>  {Object.values(vartamaan)[index]?.name_en_UK}</div>
    </div>
})}
{
  utsava.tithi
  
}

</div>
  </div>
}