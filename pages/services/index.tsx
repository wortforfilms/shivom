import { useRouter } from "next/router"
import { useState } from "react"

const Services = () => {

  const [services,setServices]=useState([
    {label:"education",description:'',link:"",image:""},
    {label:"mantra(software)",description:'',link:"",image:""},
    {label:"yantra(hardware)",description:'',link:"",image:""},
    {label:"tantra(I.O.T.)",description:'',link:"",image:""},
    {label:"advance sciences",description:'',link:"",image:""},
    {label:"artificial intelligence",description:'',link:"",image:""},
    {label:"healthcare",description:'',link:"",image:""},
    {label:"eldercare",description:'',link:"",image:""},
    {label:"consultations",description:'',link:"",image:""},
    {label:"research",description:'',link:"",image:""}
  ])

  const router=useRouter()
  return <div className='text-xl font-bold uppercase mt-12'>

    {
      services.map((ser,index)=>{
        return <div key={index} className='p-2 cursor-pointer hover:text-green-500 hover:underline'
        onClick={()=>{
          router.push(`/services/${ser.label}`)
        }}
        >{ser.label}</div>
})
    }

  </div>
}


export default Services