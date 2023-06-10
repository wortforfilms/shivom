import { useRouter } from "next/router"
import NakApp from "."
import { useEffect, useState } from "react"
import { create_sochen } from "@/q/c/sochen"
import { supabase } from "@/lib/Store"
import { create_res, find_res } from "@/action"
import { BiArrowBack, BiLoader } from "react-icons/bi"
import { UserZodiac } from "@/pages/user"
import { errorT } from "@/components/toast"
import { motion } from "framer-motion"

const create_doc=async(pmt:any)=>{

  const {data,error}=await supabase.from('sochen').select('*').eq('search',pmt)
  return {data,error}
}

const create_book=async(pmt:any)=>{
  const {data,error}=await supabase.from('sochen').select('*').eq('search',pmt)
  return {data,error}
}


// 
// asi shi
// rA ra
// const m  {÷/÷¿shift cycle suspension}
// {:-:} 
// pmt create book scorpio and others
// story of 12 zodiacs
// 
// sell book 
// cover 
// designs 
// puppetier to call 
// {stable defusion}
// {focus}
// {wealthcare generation}
// {html domain cdn aws godaddy bigrock google }
// {navigator::health}
// {}

// plate index
// platform

const create_answer=async(pmt:any, setLoading:any,setDetails:any)=>{
  const DEFAULT_PARAMS = {
    "model": "text-davinci-003",
    "prompt": pmt,
    "temperature": 0.8,
    "max_tokens": 786,
    "top_p": 1,
    "frequency_penalty": 0,
    "presence_penalty": 0
  };

  const params_ = { ...DEFAULT_PARAMS };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + String(process.env.Open_Ai_Key)
    },
    body: JSON.stringify(params_)
  };

  const fetch_answer = async () => {
    await fetch('https://api.openai.com/v1/completions', requestOptions).then(res => res.json()).then(data => {
      create_res(pmt, data, "info").then(res => {

        if (res && res.data && res.data[0]) {
          console.log('created answer', res);
          setDetails(res.data)
          setLoading(false)
          return res.data[0];
        }
      });
    }).catch(error => {
      setLoading(false)
      errorT(`${error}`);

    });
  };



  await find_res(pmt).then(res => {
    if (res && res.existing_res && res.existing_res.length > 0 && res?.existing_res[0]?.response?.choices && res?.existing_res[0]?.response?.choices[0]?.text) {
      console.log('found answer', res);
      setDetails(res.existing_res)
      setLoading(false)
      return res.existing_res[0].response;
    } else {
      console.log("local not found");
      fetch_answer();
    }
  });

}

const get_costellation_info=async(con:any, setLoading:any,setInfo:any)=>{
  const pmt=`information of ${con}`
const {data,error}=await supabase.from('sochen').select('*').eq('soch',pmt)

if(data && data.legth>0){
  setInfo(data)
} else {
  const url=``
  await fetch(`/api/collect/${con}`).then(res=>{
    console.log("first",res)
  }).catch(error=>{
    console.log(error)
  })
}

}

const connect_amar_maalaa=async()=>{
const {data,error}=await supabase.from("अमृत").select().textSearch()
  return {data,error}
}

// RAshi
//  rAshi
// raasi
//  id device {}-{material}-{crypt}-{""}
// {}-{}-{}-{}
// me mine our us
// I V We
// {}
const Constalation=()=>{
  const router=useRouter()
  const {rashi}=router.query

  // detail
  // changes
  // mytyhology connects of various calenders
  // location
  // position
  // related character
  // 


  //  calender 
  
  const [details,setDetails]=useState<any>({
    Information:"About Aeries",
    Location:'',
    Mentions:'',
    characters:[],
    Stories:[],
    Stars:[],
    mythology:'',
    science:''
  })

  // cannot touch {pass {await} :: winner players {viewers} }
  // ring_bearer :: {}
  // {transfer}-{deposit}-{securirty}
  // {interest}-{:::}-{__}-__-––——
  // signal variance 
  // on keyboardmacwindowandroidios
  // signn]al   evolution devolutionn
  // measure onnn u u U ¨ ¨ 1 :["","",""]
  // 5k what why who how when
  // list of stories  
  // folk and native 
  // stories
  //  https://en.wikipedia.org/wiki/Pisces_(constellation)

  const [loading,setLoading]=useState(false)

  useEffect(() => {
    let mount=true
    if(mount){
      setLoading(true)
      const pmt=`Describe ${rashi} in detail with mythology, vedic history, mentions and location details.`
      // soch data author_id type
      const process_soch=async()=>{
        const {data,error}=await supabase.from('sochen').select('*').eq('soch',pmt)
        if(data.length>0){
          setDetails(data)
          setLoading(false)
          return {data,error} 
        } else {
          create_answer(pmt, setLoading, setDetails)
        }
      }
      process_soch()

    }
  
    return () => {
      mount=false
    }
  }, [])
  
  if(loading){
    return <div className=" h-[90vh] w-full p-8">
      <BiLoader className=" py-6 text-center animate-spin-fast text-9xl mt-32"/>
      </div>
  }

  return <motion.div 
  animate={{opacity:[0,1],x:[10,0]}}
  className="p-4 w-full h-full min-h-[90vh]">
    <div className="h-8"></div>
  <div className="flex flex-row justify-between  p-2">

  <BiArrowBack className="text-5xl"
  onClick={()=>{
    router.back()
  }}
  />
<h1>
  {rashi}
  </h1>
  </div>
<UserZodiac zod={rashi}/>
{!loading && details && <div className="flex flex-col gap-2 ">
  {details[1]?.data?.choices[0]?.text.split('\n').map((a:any,index:number)=>{
    return <motion.div 
    animate={{opacity:[0,1], transition:{delay:index*.1}}}
    key={index} className="fade-up-in">{a}</motion.div>
  })}
  </div>}
{/* <NakApp/> */}
{/* <AkImages/> */}
  </motion.div>
}


const AkImages=()=>{
  return <>
  <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="white" stroke="black" />
  <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="black" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <circle cx="200" cy="200" r="195" fill="black" />
  <circle cx="200" cy="200" r="2" fill="white" />
  <circle cx="120" cy="200" r="2" fill="white" />
  <circle cx="280" cy="200" r="2" fill="white" />
  <circle cx="160" cy="160" r="2" fill="white" />
  <circle cx="240" cy="160" r="2" fill="white" />
  <circle cx="160" cy="240" r="2" fill="white" />
  <circle cx="240" cy="240" r="2" fill="white" />
  <path d="M200 200 L190 260 L240 240 L290 260 L280 200 L290 140 L240 160 L190 140 Z" fill="none" stroke="white" strokeWidth="1" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <circle cx="200" cy="200" r="195" fill="black" />
  <circle cx="200" cy="200" r="2" fill="white" />
  <circle cx="150" cy="160" r="2" fill="white" />
  <circle cx="250" cy="160" r="2" fill="white" />
  <circle cx="150" cy="240" r="2" fill="white" />
  <circle cx="250" cy="240" r="2" fill="white" />
  <circle cx="200" cy="280" r="2" fill="white" />
  <path d="M200 100 L150 160 L200 120 L250 160 L200 100 L200 280 L150 240 L200 280 L250 240 Z" fill="none" stroke="white" strokeWidth="1" />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <circle cx="200" cy="200" r="195" fill="black" />
  <circle cx="200" cy="200" r="2" fill="white" />
  <circle cx="150" cy="170" r="2" fill="white" />
  <circle cx="240" cy="170" r="2" fill="white" />
  <circle cx="150" cy="230" r="2" fill="white" />
  <circle cx="240" cy="230" r="2" fill="white" />
  <path d="M200 100 L150 170 L200 120 L240 170 L200 100 Z M200 280 L150 230 L200 280 L240 230 Z" fill="none" stroke="white" strokeWidth="1" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <circle cx="200" cy="200" r="195" fill="black" />
  <circle cx="200" cy="200" r="2" fill="white" />
  <circle cx="145" cy="145" r="2" fill="white" />
  <circle cx="195" cy="165" r="2" fill="white" />
  <circle cx="235" cy="185" r="2" fill="white" />
  <circle cx="275" cy="205" r="2" fill="white" />
  <path d="M145 145 L195 165 L235 185 L275 205" fill="none" stroke="white" strokeWidth="1" />
</svg>
</>
}

// 63frc1b
// arns .innn 
// {}-{}
// ._.–––––– take calender there 
// config arn on s3 
// {color}{bucket}{hidden}
// 
// temprature moisture sound
// x=temp{sound}{mo is t ur e}
// user=e
// user=dob pob tob
// dob={"SunSign"}
// tob={"MoonSign"}
// pob={"Celestial House"}
// stripes=>[{}]
// activities=[]
// skill={}
// interests=[]
// suggested_posts=[]
// 
export default Constalation