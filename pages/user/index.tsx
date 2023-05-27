import MessageHome from "@/components/communication/messaging"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Image from 'next/image'
import { BsDisplay } from "react-icons/bs"
import { sunsign } from "@/canvas/chart/d3/vedic"
import { gold } from "@/components/games/GameBanner"
const User=(props:any)=>{
  // meghdoot
  // shakuntlA bharat bhArat 
  // clock on every 
  // run _ cl;;ock 
  // second->acca
  // 
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)

  // get_hindu_date
  // get_vedic_tithi

  // a_tithi dev o bhava



const [user,setUser]=useState(earth?.auth?.user)
const [games,setGames]=useState()
const [kosh,setKosk]=useState()
const [deposite,setDeposite]=useState()
const router=useRouter()

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

  return <div className="p-4">
    <div className="h-12"></div>
    <div   className="w-full p-2">
   {
     JSON.stringify(earth?.auth?.user)
    }
    </div>
<BsDisplay className="text-7xl p-2"/>

{[{first_name:"hkd"},{middle_name:""},{last_name:""}].map((f,index)=>{
return  <div key={index}>{f.first_name}</div>
})}

<div>{user.id}</div>

<div>Biomed</div>
<div>Profiled</div>
<div>Email Verified</div>
<div>Phone Verified</div>

<Zodiac/>
<ZodiacPosition/>
<ZodiacCalculator/>
<MoonSignCalculator/>
<Image
    // src="/img/astrology-circle-orance-dots.png"
    src="/img/astrological_chart.png"
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
quality={100}
    className="w-1/2  rounded-full  justify-start opacity-50 m-auto"
    />

<Image
    // src="/img/astrology-circle-orance-dots.png"
    src="/img/indian2.png"
    alt="astro chart"
    width={100}
    height={100}
    priority
    unoptimized
quality={100}
    className="w-full    justify-start  m-auto"
    />
<div className="h-80 w-80 m-auto bg-green-500 p-2 ">

</div>

  </div>
}

export default User

const Zodiac=()=>{


  return <div className="flex flex-row gap2 justify-around flex-wrap">
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
    className="w-32    justify-start  m-auto"
    />
        </div>
      })
    }
  </div>
}


import React from 'react';

// Zodiac sign data
const zodiacSigns = [
  { name: 'Aries', startDate: new Date(0, 2, 21), endDate: new Date(0, 3, 19) },
  { name: 'Taurus', startDate: new Date(0, 3, 20), endDate: new Date(0, 4, 20) },
  { name: 'Gemini', startDate: new Date(0, 4, 21), endDate: new Date(0, 5, 20) },
  // Add more zodiac signs here
];



const ZodiacPosition: React.FC = (props:any) => {

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

const ZodiacCalculator: React.FC = () => {
  const [date, setDate] = useState('');
  const [zodiac, setZodiac] = useState('');

  const calculateZodiac = () => {
    const month = parseInt(date.slice(5, 7));
    const day = parseInt(date.slice(8, 10));

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

  return (
    <div>
      <h2>Zodiac Calculator</h2>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button onClick={calculateZodiac}>Calculate</button>
      {zodiac && <p>Zodiac Sign: {zodiac}</p>}
    </div>
  );
};




const MoonSignCalculator: React.FC = () => {
  const [date, setDate] = useState('');
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
 matter:[
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