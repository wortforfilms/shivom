import { useEffect, useState } from "react"
import { Year } from "./Year"
import { Month } from "./Month"
import { Day } from "./Day"
import { Seconds } from "./Seconds"
// import { IconButton } from "@/display/action/button/IconButton"
import { BiArrowBack } from "react-icons/bi"
// import { paraFirst } from "@/pages/user/info"
import { range } from "@/util/createRange"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentTime, setView, setYear } from "./slice"
import { IconButtonSmall } from "@/action/button/IconButtonSmall"
import { IconButton } from "@/action/button/IconButton"
import { paraFirst } from "@/util/hkc"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
// import { IconButtonSmall } from "@/display/action/button/IconButtonSmall"


const Calender=(props:any)=>{
  // const {earth}=props
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
  // const [view,setView]=useState<any>('select_year')
const [current,setCurrent]=useState<any>(0)
// const [earth,setEarth]=useState({})
  
  const dispatch=useDispatch()

  useEffect(()=>{
    setInterval(()=>{
      setCurrent((s:number)=>s+1)
    },1000)
  },[])

  const Ticket=()=>{
    return <div>
   <div>Type</div>
    <div>Duration</div>
    <div>Amount</div>

    </div>
  }

  const Status=()=>{
    return <div>
          <div>Active</div>
    <div>Awaiting</div>
    <div>Winner</div>
    <div>Looser</div>
    </div>
  }

  const Viewer=()=>{
    return   <>
    <div>👀Viewer</div>
    <div>👾Player</div> 
    </>
  }

  return <div className="flex flex-col p-4 h-[80vh] gap-4">
    {current}
 <Viewer/>
    

    <div>input/output</div>
  
    <div className="flex flex-row justify-between shadow-xl w-72 sm:w-full gap-2">
    {
      earth?.calender?.view!=='select_year' && <div className="flex flex-row gap-2">
        <IconButton icon={<BiArrowBack/>} 
        cl="hidden sm:block"
        action={()=>{
        dispatch(setView(earth?.calender?.view==='month'?"year":earth?.calender?.view==="day"?"month":"select_year"))
      }}/>
           <IconButtonSmall 
           cl="block sm:hidden"
           icon={<BiArrowBack/>} action={()=>{
        dispatch(setView(earth?.calender?.view==='month'?"year":earth?.calender?.view==="day"?"month":"select_year"))
      }}/>
      <div className="my-auto p-1 flex flex-row gap-2 justify-between text-sm font-bold">
        <div>{ earth?.calender?.view==="day" && earth?.calender?.in_view?.date_in_view}</div>
      <div>{ earth?.calender?.view!=="select_year" && earth?.calender?.view!=="year"  && paraFirst(earth?.calender?.months[earth?.calender?.in_view?.month_in_view])}</div>
        <div>{ earth?.calender?.view!=="select_year" && earth?.calender?.in_view?.year_in_view}</div>
        </div>
        </div>
    }
{earth?.calender?.view==='day' && <Seconds/>}

  
      </div>

      {earth?.calender?.view==="select_year" && <div className="flex flex-row flex-wrap gap-4  overflow-auto p-4">
        {
          range(2000,2050).map(str=>
            {
              return <div key={str}
              id={JSON.stringify(str)}
              onClick={()=>{
                setView("year")
                dispatch(setView("year"))
                dispatch(setYear(str))
              }}
              className={`p-2 cursor-pointer rounded-lg ${earth?.calender?.current_time?.year===str?"bg-pink-500 text-white":"bg-white"} hover:bg-yellow-300 shadow-lg w-100 text-center`}
              >{str}</div>
            })
        }
        </div>}
    {earth?.calender?.view==='year' && <Year />}
    {earth?.calender?.view==='month' && <Month />}
    {earth?.calender?.view==='day' && <Day/>}
  </div>
}

export default Calender

// ghadi pal belA
// ghantA hour ghanti tuhar 
// ghatanA 3--–—±>2->1
// 

export const IconLabel=(props:any)=>{
  const {si}=props
    const router=useRouter()
  
    const [hovered,setHovered]=useState(false)
  
    return <motion.div
    whileHover={{scale:.95}}
    onHoverStart={()=>setHovered(true)}
    onHoverEnd={()=>setHovered(false)}
    whileTap={{scale:1.05}}
       className="relative p-1 z-10 flex flex-col justify-center hover:rounded-full cursor-pointer hover:text-white"
                  onClick={() => {
                    router.push(si.link);
                  }}
                >
                  <div 
                  // size={32} 
                  className={`text-center  text-white text-3xl  cursor-pointer `}>
                  {/* // className="text-2xl hover:bg-pink-500 rounded-full p-2 w-10 h-10 "> */}
                    {si.icon}
                    </div>
                  {hovered && <motion.div 
                  animate={{x:[-10,0],y:[35,45], opacity:[0,1]}}
                  className="absolute z-50 m-auto bg-pink-500  p-1 rounded-lg">{si.label}</motion.div>}
    </motion.div>
  }



  export const IconLabelH=(props:any)=>{
    const {si}=props
      const router=useRouter()
    
      const [hovered,setHovered]=useState(false)
    
      return <motion.div
      whileHover={{scale:.95}}
      onHoverStart={()=>setHovered(true)}
      onHoverEnd={()=>setHovered(false)}
      whileTap={{scale:1.05}}
         className="relative p-1 z-50 flex flex-row  hover:rounded-full hover:text-white"
                    onClick={() => {
                      router.push(si.link);
                    }}
                  >
                    <div 
                    // size={32} 
                    className={`text-center  text-white text-3xl  cursor-pointer `}>
                    {/* // className="text-2xl hover:bg-pink-500 rounded-full p-2 w-10 h-10 "> */}
                      {si.icon}
                      </div>
                    {hovered && <motion.div 
                    animate={{x:[-10,0], opacity:[0,1]}}
                    className="absolute z-100 m-auto left-32 bg-pink-500 mt-2 p-1 rounded-lg">{si.label}</motion.div>}
      </motion.div>
    }