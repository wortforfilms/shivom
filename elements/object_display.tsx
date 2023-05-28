import { heading } from "@/styles/sty"
import { motion } from "framer-motion"

export const ObjectInfo=(props:any)=>{
  const {data,label}=props
  return <div className="p-4 m-auto">
    <div className={heading}>{label}</div>
    <div className="py-4">{data.Information}</div>
    <div className="flex flex-row gap-2 flex-wrap">
      {
        data.list.map((el:any,index:number)=>{
          return <motion.div 
          // whileHover={{scale:.95}}
          // whileTap={{scale:1.1}}
          key={index} className="bg-white cursor-pointer p-2 rounded-lg  shadow-lg">
            <h3>
              {Object.keys(el)[0]}: 
              </h3>
              {Object.values(el)}
            
            </motion.div>
        })
      }
    </div>
    <div className="text-xs py-4">{data.notes}</div>
    <hr className="border-1 border-gray-300"/>
  </div>
}

