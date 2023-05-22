
import Calender from "@/lib/calender"
import { useSelector } from "react-redux"
import GyroHome from "@/components/tool"
import Image from 'next/image'
import { motion } from "framer-motion"


const CalenderView=(props:any)=>{
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useSelector(state=>state)
  return <div>
    <div className="h-12"></div>

    <div className="flex flex-row flex-wrap gap-8">
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
          </div>
    <Calender earth={earth}/>
  </div>
}

export default CalenderView