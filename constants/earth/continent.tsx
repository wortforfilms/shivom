import { IconButton } from "@/action/button/IconButton"
import { useEffect, useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import {motion} from 'framer-motion'
import {Box} from '@/elements/box'
import { currencies } from "./currencies"
import { countries } from "./countries"
import { continent_switch } from "./continent_switch"
import { flags } from "./flags"
import { country_lang } from "./country_lang"
import { languages_ } from "./languages_"


  export const ContinentSelector=(props:any)=>{
    const [continent,setContinent]=useState<any>(continent_switch[2])
    const [country,setCountry]=useState<any>(null)

    const [location,setLocation]=useState<any>([])

    return <div className="flex flex-col text-xl p-2 w-full h-auto m-auto bg-white rounded-lg shadow-lg">
     <div className="flex flex-col w-64 h-auto m-auto p-2">

      <div className="text-9xl m-auto text-center">
        {continent?.emoji}
        </div>
     {!country && <select 
      defaultValue={continent_switch[2].label}
      onChange={(e:any)=>{
        console.log(e.target.value)
        setContinent(continent_switch.filter(i=>i.label===e.target.value)[0])
      }}
      className="p-2  mt-2 text-center justify-around shadow-lg  rounded-lg  ring-4 ring-gray-300"
      >
    {
      continent_switch.map((conswi,index)=>{
        return <option key={index} value={conswi.label} className="flex flex-row  p-2 gap-4">
       

            {conswi.label}

            </option>
      })
    }
    </select>}
    </div>

   {continent && <CountrySelector country={country} setCountry={setCountry} continent={continent} setContinent={setContinent}/>}
    {country && <LanguageSelector country={country} />}

    </div>
  }

  export const CountrySelector=(props:any)=>{
    const {continent,setContinent, country, setCountry}=props
    const [_country,_setCountry]=useState<any>(null)
    const [filtered_country,setFilteredCountry]=useState<any>(null)
    const [currency,setCurrency]=useState<any>(0)

    useEffect(() => {
      let mount=true
      if(mount && continent){
        console.log(countries)
        if(!country)
        _setCountry( countries.filter(i => i[1].toLowerCase() === continent.label.toLowerCase()))
      } else {
        setCountry(null)
      }
    
      return () => {
        mount=false
      }
    }, [continent])

    useEffect(() => {
      let mount=true
      if(mount && country){
        const countrycurrency=currencies.map(i=>i.currency.toLowerCase()).filter((i:any,index)=>{
          if(i.includes(country.toLowerCase())){
            setCurrency(index)
          }})
      }
    
      return () => {
        mount=false
      }
    }, [country])
    
    

    return <div className="text-xl p-2 w-full h-full  m-auto bg-white rounded-lg shadow-lg">
     {!country && <input className="w-full shadow-lg p-2 bg-gray-300 mt-2 mb-2" placeholder="Search" type="search"
      onChange={(e:any)=>{
        setFilteredCountry(_country.filter((i:any)=>i[0].toLowerCase().includes(e.target.value.toLowerCase())))
        console.log(_country.filter((i:any)=>i[0].toLowerCase().includes(e.target.value.toLowerCase())),'---=>')
      }}
      />}
         <div className="flex flex-row gap-2 flex-wrap">

{!country && _country && _country.map((count:any, index:number) => {
  return <motion.div
    whileHover={{ scale: .95 }}
    whileTap={{ scale: 1.1, opacity: [1, 0, 1] }}
    key={index} className="flex flex-col m-auto cursor-pointer rounded-lg bg-white p-2"
    onClick={() => {
      setCountry(count[0]);
    }}
  >
    <Box>
      <div className="text-5xl text-center">{flags && flags?.filter(i => i[2]?.toLowerCase() === count[0]?.toLowerCase()) && flags?.filter(i => i[2]?.toLowerCase() === count[0]?.toLowerCase())[0] ? flags?.filter(i => i[2]?.toLowerCase() === count[0]?.toLowerCase())[0][0] : flags[0][0]}</div>

      <div className="text-xs text-center">{count[0]}</div>

    </Box >
  </motion.div>;
})}
{country && <IconButton cl="absolute h-12 w-12 p-2  " bg="bg-gray-300 ring-4 ring-gray-400" icon={<BiArrowBack />} action={() => setCountry(null)} />}

{country && <div className="flex flex-row m-auto ">
  <div className="rounded-lg bg-white p-2 ">
    <div className="text-9xl text-center">{flags && flags?.filter(i => i[2]?.toLowerCase() === country?.toLowerCase()) && flags?.filter(i => i[2]?.toLowerCase() === country?.toLowerCase())[0] ? flags?.filter(i => i[2]?.toLowerCase() === country?.toLowerCase())[0][0] : flags[0][0]}</div>
    <div className="text-center">{country}</div>
  </div>

</div>}

</div>
{
  country && <div className="flex flex-row justify-between bg-gray-200 gap-2 w-full p-2 text-xl  rounded-lg shadow-lg">
    <div dangerouslySetInnerHTML={{__html:`${currencies[currency].symbol?currencies[currency].symbol:"$"}`}}/>
    <div>{currencies[currency].currency}</div>
<div>    {currencies[currency].abbreviation}</div>
   </div>

}
    </div>
  }

  export const LanguageSelector=(props:any)=>{
    const {country}=props
    const [languages,setLanguages]=useState<any>()
    useEffect(() => {
      let mount=true
      if(mount){
        console.log("first",country, country_lang.filter(i=>i.country.includes(country)))
        setLanguages(country_lang.filter(i=>i.country.includes(country)))
      }
    
      return () => {
        mount=false
      }
    }, [country])
    
    return <div className="">
      <h3>Choose your language</h3>
      <div className="flex flex-row flex-wrap gap-2">
{languages && languages[0]?.languages.map((ln:any,index:number)=>{
  return <div key={index} className="p-2 rounded-lg shadow-lg">
    {/* {ln} */}
    {languages_.filter(i=>i[1].includes(ln))[0]}
    </div>
})}
</div>
    </div>
  }
  // export const LanguageSelector=()=>{
  //   const [langs,setLangs]=useState<any>([])


  //   return  <div className="p-4 m-auto flex flex-col justify-around">
  //   {JSON.stringify(langs)}
  //     <select multiple onChange={(e:any)=>{
  //       console.log(e.target.value)
  //       if(langs.includes(e.target.value)){
  //         setLangs(langs.filter((i:any)=>i[0]!==e.target.value))
  //       } else {
    
  //         setLangs((s:any)=>[e.target.value,...s])
  //       }
  //     }}
  //     className="p-2 w-[90%] m-auto "
  //     >
    

  //     </select>
  //     </div> 
  // } 