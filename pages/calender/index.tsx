
import Calender from "@/lib/calender"
import { useSelector } from "react-redux"
import GyroHome from "@/components/tool"
import Image from 'next/image'
import { motion } from "framer-motion"

const Ifo=(props:any)=>{
  const {data,label}=props
  return <div className="p-4">
    <h1>{label}</h1>
    <h3>{data.Information}</h3>
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
    <div className="text-xs p-4">{data.notes}</div>
  </div>
}
const CalenderView=(props:any)=>{
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
  return <div>
    <div className="h-12"></div>
    <div className="flex flex-row">
    <Image
  src="/img/tithi.png"
  alt="tithi"
  width={100}
  height={100}
  priority
  unoptimized
  className="w-96 h-auto m-auto rounded-full invert bg-white"
    />
<Ifo data={Tithi}  label="Tithi"/>
</div>
<Ifo data={Yoga}  label="Yoga"/>
<Ifo data={Karana}  label="Karana"/>
<Ifo data={Nakshatra}  label="Nakshatra"/>
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

notes:'Please note that the names of the tithis may vary slightly depending on regional customs and traditions.'
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
notes:"These Karanas are based on the positions of the Moon and are used in determining the suitability of specific activities during a particular period. Please note that the names and order of the Karanas may vary slightly depending on regional customs and astrological systems."
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











