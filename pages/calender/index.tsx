
import Calender from "@/lib/calender"
import { useSelector } from "react-redux"
import GyroHome from "@/components/tool"
import Image from 'next/image'
import { motion } from "framer-motion"
import { heading } from "@/styles/sty"

interface DateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

function calculateBavaKarana(dateTime: DateTime): boolean {
  const { day } = dateTime;

  // Calculate the tithi (lunar day)
  const tithi = (day - 1) % 30;

  // Check if the tithi falls within the Bava Karana range (6 to 15)
  return tithi >= 6 && tithi <= 15;
}

// Example usage
const dateTime: DateTime = {
  year: 2023,
  month: 5,
  day: 21,
  hour: 10,
  minute: 30,
  second: 0,
};

const isBavaKarana = calculateBavaKarana(dateTime);
console.log("Is Bava Karana?", isBavaKarana);



// Define a function to get the Vedic year
function getVedicYear(date: Date): number {
  // Extract the year from the provided date
  const year = date.getFullYear();

  // Calculate the Vedic year using the Saka Calendar
  const vedicYear = year + 78; // Add 78 to convert to the Vedic year

  return vedicYear;
}

// Usage example


// Function to calculate the Vedic Tithi
function calculateVedicTithi(date: Date): number {
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  
  // Calculate the Julian Day Number (JDN)
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  const jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  
  // Calculate the Tithi
  const tithi = (jdn + 3) % 30 + 1;
  
  return tithi;
}

// Function to calculate the Vedic Yoga
function calculateVedicYoga(date: Date): number {
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  
  // Calculate the Julian Day Number (JDN)
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  const jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  
  // Calculate the Yoga
  const yoga = (jdn + 1) % 27 + 1;
  
  return yoga;
}

// Example usage
const currentDate = new Date();
const vedicYear = getVedicYear(currentDate);
const vedicTithi = calculateVedicTithi(currentDate);
const vedicYoga = calculateVedicYoga(currentDate);



export const Ifo=(props:any)=>{
  const {data,label}=props
  return <div className="p-4 m-auto">
    <div className={heading}>{label}</div>
    <div className="py-4">{data.Information}</div>
    <div className="flex flex-row gap-2 flex-wrap">
      {
        data.list.map((el:any,index:number)=>{
          return <motion.div 
          whileHover={{scale:.95}}
          whileTap={{scale:1.1}}
          key={index} className="bg-white cursor-pointer p-1 rounded-lg  shadow-lg">{el}</motion.div>
        })
      }
    </div>
    <div className="text-xs py-4">{data.notes}</div>
    <hr className="border-1 border-gray-300"/>
  </div>
}


const CalenderView=(props:any)=>{
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
  return <div className="max-w-5xl m-auto p-4">
    <div className="h-12"></div>
    {/* <div>{vedicYear}</div> */}
    <div className="flex flex-col sm:flex-row">
    <Image
  src="/img/tithi.png"
  alt="tithi"
  width={100}
  height={100}
  priority
  unoptimized
  className="w-96 h-auto m-auto z-10 rounded-full invert bg-white"
    />
{/* `Vedic Tithi: {vedicTithi}-{Tithi.list[vedicTithi-1]}` */}

<Ifo data={Tithi}  label="Tithi"/>
</div>
<div className="flex  flex-col sm:flex-row">

<Ifo data={Yoga}  label="Yoga"/>
{/* `Vedic Yoga: {vedicYoga}-{Yoga.list[vedicYoga-1]}` */}

<Image
  src="/img/yoga.png"
  alt="yoga"
  width={100}
  height={100}
  priority
  unoptimized
  className="w-64 h-auto m-auto p-4 rounded-full invert  bg-white"
    />
</div>
<div className="flex flex-col sm:flex-row">
<Image
  src="/img/karana.gif"
  alt="karana"
  width={100}
  height={100}
  priority
  unoptimized
  className="w-96 h-auto m-auto p-4 rounded-full invert bg-white"
    />
<Ifo data={Karana}  label="Karana"/></div>
<div className="flex flex-col sm:flex-row">

<Ifo data={Nakshatra}  label="Nakshatra"/>
<Image
  src="/img/nakshatra.png"
  alt="nakshatra"
  width={100}
  height={100}
  priority
  unoptimized
  className="w-64 h-auto p-4 m-auto rounded-full invert bg-white"
    />
</div>
    {/* <div className="flex flex-row flex-wrap gap-8">
    <GyroHome/>
     <motion.div drag className="ring-4 ring-blue-600 rounded-full border-4 h-72 border-blue-900">

     <Image
            src="/img/astrology-circle-orance-dots.png" alt="" width={100} height={100}
            className='relative  w-72 speed-2'
            />
            </motion.div>
<motion.div drag className="">

            <Image
            src="/img/astrological_chart.png" alt="" width={100} height={100}
            className='relative  w-72 '
            />
            </motion.div>
          </div> */}
    {/* <Calender earth={earth}/> */}
  </div>
}

export default CalenderView


export const Tithi={
  Information:"In the Hindu calendar, there are several tithis, which are lunar days. A lunar month consists of 30 tithis, and their names are derived from the positions of the Moon in relation to the Sun. Here is a list of the Hindu tithis:",
  list:[
   "Pratipada",
   "Dwitiya",
   "Tritiya",
   "Chaturthi",
   "Panchami",
   "Shashthi",
   "Saptami",
   "Ashtami",
   "Navami",
   "Dashami",
   "Ekadashi",
   "Dwadashi",
   "Trayodashi",
   "Chaturdashi",
   "Purnima",
   "Pratipada",
   "Dwitiya",
   "Tritiya",
   "Chaturthi",
   "Panchami",
   "Shashthi",
   "Saptami",
   "Ashtami",
   "Navami",
   "Dashami",
   "Ekadashi",
   "Dwadashi",
   "Trayodashi",
   "Chaturdashi",
   "Amavasya",
],

notes:'Tithi (along with Paksha) is the day according to the Hindu lunar calendar. An astrologer would tell you that the Hindu lunar calendar consists of a dark and a bright fortnight also called paksha. When the moon completes 12 degrees of its movement on the Sun, it is called a Tithi or Hindu lunar day.'
}


export const Yoga={
  Information:"In the Hindu calendar, there are 27 Yogas, which are specific combinations of the Moon's position in relation to the Sun and other celestial bodies. Each Yoga has a unique influence and significance. Here is a list of the 27 Yogas:",
  list:[
     "Vishkambha",
     "Priti",
     "Ayushman",
     "Saubhagya",
     "Shobhana",
     "Atiganda",
     "Sukarma",
     "Dhriti",
     "Shoola",
     "Ganda",
     "Vriddhi",
     "Dhruva",
     "Vyaghata",
     "Harshana",
     "Vajra",
     "Siddhi",
     "Vyatipata",
     "Variyan",
     "Parigha",
     "Shiva",
     "Siddha",
     "Sadhya",
     "Shubha",
     "Shukla",
     "Brahma",
     "Indra",
     "Vaidhriti",
],
notes:"These Yogas are based on the combined positions of the Moon, Sun, and other planets, and they are used in astrology for determining auspicious and inauspicious times for various activities.  It's important to note that the Yogas may vary slightly depending on regional variations and different systems of calculation."
}

export const Karana={
  Information:"In the Hindu calendar, there are 11 Karanas. Karanas are half-day segments that are used in astrological calculations and determining auspicious timings. Each Karana has a specific influence and significance. Here is a list of the 11 Karanas:",
  list:[
    "Bava",
    "Balava",
    "Kaulava",
    "Taitila",
    "Garaja",
    "Vanija",
    "Vishti",
    "Shakuni",
    "Chatushpada",
    "Naga",
    "Kimstughna",
],
notes:"In astrology when a date is divided into two then 2 Karanas are formed. It can be said that one Tithi is formed by joining two Karanas. One Karana is formed by first half of the day and the second Karana is formed by the later half of the day. One Chandra Paksha has 14 dates and the second Chandra Paksha also has 14 dates. There are also Purnima and Amavasya. All combine together to make a moon month. Half part of Tithi is called Karana. There are 30 days which make 60 Karana. But, in astrology,  only 11 Karana are counted which are repeated in the rest over days. Out of these 11 Karana, 1st seven are repeated 8 times and last 4 are of constant. These 4 Nakshatra are called Dhurv Nakshatra Please note that the names and order of the Karanas may vary slightly depending on regional customs and astrological systems."
}


export const Nakshatra={
  Information:"In Hindu astrology, there are 27 Nakshatras (lunar mansions or constellations) that divide the zodiac into smaller sections. Each Nakshatra is associated with certain qualities and characteristics. Here is a list of the 27 Nakshatras:",
  list:[
"Ashwini",
"Bharani",
"Krittika",
"Rohini",
"Mrigashirsha",
"Ardra",
"Punarvasu",
"Pushya",
"Ashlesha",
"Magha",
"Purva Phalguni",
"Uttara Phalguni",
"Hasta",
"Chitra",
"Swati",
"Vishakha",
"Anuradha",
"Jyeshtha",
"Moola",
"Purva Ashadha",
"Uttara Ashadha",
"Shravana",
"Dhanishta",
"Shatabhisha",
"Purva Bhadrapada",
"Uttara Bhadrapada",
"Revati",
],
notes:"Each Nakshatra spans 13 degrees and 20 minutes of the zodiac. They play a significant role in Vedic astrology and are used for various astrological calculations, including birth charts, compatibility analysis, and predicting major life events. It's important to note that the Nakshatras may vary slightly in their characteristics and associations based on different regional traditions and interpretations."
}











