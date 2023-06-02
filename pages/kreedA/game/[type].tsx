import { Game } from "@/components/games/Game"
import { faker } from "@faker-js/faker"
import { useRouter } from "next/router"
import { MdBackHand } from "react-icons/md"
import { useEffect, useState } from 'react';

import { Akshar } from "@/components/games/ganesh/akshar"
import { Lakshmi } from "@/components/games/lakshmi/Lakshmi"
import { Shabda } from "@/components/games/ganesh/shabda";
import { Swar } from "@/components/games/ganesh/swar";
import { Vyanjana } from "@/components/games/ganesh/vyanjana";
import { Anka } from "@/components/games/ganesh/anka";
import { MAtrA } from "@/components/games/ganesh/mAtrA";
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";



const GameType = (props:any) => {
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
  const router = useRouter()
  const { type } = router.query

  useEffect(() => {
    let mount=true
    if(mount){
      if(earth?.auth?.authenticated){
        return
      } else {
        router.push('/auth/login')
      }
    }
  
    return () => {
      mount=false
    }
  }, [earth?.auth])
  


  return <div className="min-h-[90vh] p-2 sm:p-4">
    <div className="h-12"></div>
    <div className="p-2 flex flex-row justify-between">

    <BiArrowBack onClick={() => {
      router.back()
    }} 
    className="text-5xl font-extrabold"
    />
    <h1>
{type}
    </h1>
    </div>
    <h1>
      {type === "lakshmi" && <Lakshmi />}
      {type === "akshar" && <Akshar />}
      {type === "swar" && <Swar />}
      {type === "vyanjana" && <Vyanjana />}
      {type === "mAtrA" && <MAtrA />}
      {type === "anka" && <Anka />}
      {type==="shabda" && <Shabda/>}
      {type === "gameplay_lakshmi" && <Game />}
    </h1>
  </div>
}



export default GameType

export const Tree = (props: any) => {
  const { str, users, nu } = props
  const players = faker.helpers.arrayElements(users, nu)
  const result = faker.helpers.arrayElement(['lakshmi', 'ganesh'])
  const laxmi_bucket = users.filter((i: any) => i.choice === "lakshmi").map((i: any) => i.amount).reduce((partialSum: number, a: number) => partialSum + a, 0)
  const ganesh_bucket = users.filter((i: any) => i.choice === "ganesh").map((i: any) => i.amount).reduce((partialSum: number, a: number) => partialSum + a, 0)
  const [tbd, setTbd] = useState(result === 'ganesh' ? ganesh_bucket / 2 : laxmi_bucket / 2)

  return <div className="flex p-4 rounded-lg shadow-lg shadow-pink-500 bg-white m-2 text-blue-900 flex-row gap-4">
    <div className="flex flex-row flex-wrap gap-2">
      <div>Type: Lakshmi</div>
      <div>Duration: 60 minutes</div>
      <div>Starting at: {str}{":00"}</div>
      <div>Expiring at: {str}{":55"}</div>
    </div>
    <div>Viewers: {faker.datatype.number({ min: 5, max: 999999 })}</div>
    <div>Players: {players.length}</div>

    <div className="flex flex-col">
      <div>Lakshmi: {laxmi_bucket}</div> <div>Ganesh:{ganesh_bucket}</div>
    </div>
    <div>tbd: {tbd}</div>
    {/* {l} */}

    <div>Result: {result}</div>
    <div>Winners: {
      players.filter((i: any) => i.choice === result).map((pl: any, index: number) => {
        return <div className="" key={index}>{pl.id}{pl.name}{pl.amount}{pl.choice}</div>
      }).length
    }</div>
  </div>
}


export const Stats = (props: any) => {
  const { label, value } = props
  return <div className="text-xs  p-2">
    <div className="text-3xl font-bold">{label} </div>
    <div className="text-yellow-700 text-7xl font-extrabold">
      {value}
    </div>
  </div>
}



// Some recent entries:
// नृत्यक्रीडा	f.	nRtyakrIDA	ball[dance event]	
// गवल	m.	gavala	bison[Zool.]	
// उपार्जितआय	m.	upArjitaAya	accruedincome[Com.]	
// शतिमान	n.	zatimAna	centimeter[length]	
// हिंसारम्भ	m.	hiMsArambha	aggression[first strike]

// cent i meter
// gaj meter eye
// truthy {-} know your inchi tape
// master measure

// input hindi  english


// Found 3 entries
// Your results for choTika:
// छोटिक	n.	choTika	player	
// चोटिका	f.	coTikA	petticoat	
// छोटिका	f.	choTikA	snappingthethumbandforefinger

// stop haw 
// play ui 
// 

// Found 11 entries
// Your results for petticoat:
// चोटी	f.	coTI	petticoat	
// चोटिका	f.	coTikA	petticoat	
// प्रोथ	m.	protha	petticoat	
// पटवास	m.	paTavAsa	petticoat	
// कुम्बा	f.	kumbA	thickpetticoat	
// अर्धोरुक	n.	ardhoruka	shortpetticoat	
// चण्डातक	n.	caNDAtaka	shortpetticoat	
// चलनक	n.	calanaka	shortpetticoat	
// नीवि	f.	nIvi	kindofskirtorpetticoat	
// शाट	m.	zATa	kindofskirtorpetticoat	
// कौशेय	n.	kauzeya	silkpetticoatortrousers