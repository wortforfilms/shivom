// NOBMl_el_IC_EN_S_ES
// sd:notowedbyme
// action-=measure

import { success } from "@/components/toast";
import { supabase } from "@/lib/Store";
import { useEffect, useState } from "react";
import { languages_ } from "@/constants/earth/languages_"

export const PostCreator=()=>{

  var AudioContext = window.AudioContext;
var audioCtx = new AudioContext();

var oscillatorNode = audioCtx.createOscillator();
var oscillatorGainNode = audioCtx.createGain();
var finish = audioCtx.destination;

var distortionGainNode = audioCtx.createGain();
var distortionNode = audioCtx.createWaveShaper();
var sampleRate:number
function makeDistortionCurve(amount:any) {
    var k = amount,
        n_samples = typeof sampleRate === 'number' ? sampleRate : 44100,
        curve = new Float32Array(n_samples),
        deg = Math.PI / 180,
        i = 0,
        x;
    for ( ; i < n_samples; ++i ) {
        x = i * 2 / n_samples - 1;
        curve[i] = (3 + k)*Math.atan(Math.sinh(x*0.25)*5) / (Math.PI + k * Math.abs(x));
    }
    return curve;
}

distortionNode.curve = makeDistortionCurve(420);

oscillatorNode.connect(oscillatorGainNode);
oscillatorGainNode.connect(distortionGainNode);
distortionGainNode.connect(distortionNode);
distortionNode.connect(finish);

console.log(oscillatorNode)


  return <div className="w-full flex flex-col gap-2 bg-gray-400 p-2">
  {/* <input className="w-full p-2 " placeholder="Enter title"/> */}
  <textarea className="w-full p-2  " rows={16}
  placeholder="Talk"
  />
  <div className="flex flex-row gap-2 justify-around">
  <div className="bg-orange-600 text-white shadow-lg rounded-lg p-1"
  onClick={()=>{
    oscillatorNode?.start(0);
  }}
  >Preview</div>
  <div className="bg-green-600 text-white shadow-lg rounded-lg p-1"
  onClick={()=>{
    oscillatorNode.disconnect(0)
  }}
  >Save</div>
  <div className="bg-gray-600 text-white shadow-lg rounded-lg p-1"
  onClick={()=>{
    oscillatorNode?.stop(0)
  }}
  >Release</div>
  </div>
  </div>
}

//  watch-1-clock peetAmbar krishNa
//  needel set [] {}::{}
// gram o phone
// {}-{}
// eye view to space angle
// mooladhArA
// {undefined::found}
// detect cemera 
// control motion

export const Feeder=(props:any)=>{
const {earth}=props

  const [processed,setProcessed]=useState<any>('')

  const auto_save=async(deviceId:any)=>{
    const {data,error}=await supabase.from('post').select('*').eq('device_id',deviceId)
    return {data,error}
  }
  const check_entry=async(d:any)=>{
    const {data,error}=await supabase.from('अमृत').select('*').eq(`string, ${d[0]}`).eq(``)
    return {data,error}
  }

  const save=async(d:any)=>{

    const {data,error}=await supabase.from('अमृत').insert([{
      string:d[0],
      type:d[1],
      language:'sanskrut',
      translitions:[{en:d[2]}],
      translations:[{en:d[3]}],
      notes:[d[4]]
    }
    ]).select('*')
    return {data,error}
  }



  useEffect(() => {
    let mount=true
    const ti=()=>setInterval(()=>{
      // auto_save(earth?.device?.id)
      success('times for information')
    },12000)
    if(mount ){

      // ti()
    }
  
    return () => {
      mount=false
      clearInterval(ti())
    }
  }, [])
  

 

return   <div className="p-4 bg-gray-300 rounded-lg shadow-lg">

<textarea placeholder="Enter Feed" rows={12} className="w-full p-2"
onChange={(e:any)=>{
  const col=e.target.value
  const pr=col.split('\n')
  console.log(pr.map((li:string,index:number)=>{
    return li.split('\t')
  }),'---=> pr')
  setProcessed(pr.map((li:string,index:number)=>{
    return li.split('\t')
  }))
}}
/>
<div className="w-100 text-center text-white p-2 bg-pink-500 rounded-lg shadow-lg"
onClick={()=>{
  processed.map((li:any)=>{
    save(li).then(res=>{
      // notify('success adding')
      console.log('--=>',res)
    }).catch(error=>{
      console.log(error)
      // errorT("unsuccess")
    }
      )
  })
}}
>
    Enter      
</div>
</div>
}


export const Translate=(props:any)=>{
  const [string,setString]=useState<any>('')
  const [results,setResults]=useState<any>('')
  const [processing,setProcessing]=useState(false)

  const create_feed=async(str:any)=>{

    await fetch(`/api/get/${str}`,{
      method:'GET'
    }).then(res=>res.json()).then(data=>{
      console.log(data,'---=>')
    })
  }

  // apply nominate vote suggest
  // { hr wrong ¿?  :: best_for_you}
  // {kudali_behaviour_{test_{replace}}}
  // {target_customer-not-guest:: ?÷/¿ bause cause because }
  const find_from_amar=async(str:any)=>{
    const {data,error}=await supabase.from('अमृत').select('*').textSearch('translitions -> en',str)
    return {data,error}
  }

  // doc in line
  // calender circular
  // {su-dail}{outerk}
  // nont_any
  // astro_samaya_{mesh:maish} rAma raMA 
  // roop : 
  // tense _ present _past _future
  // shabda roop
  // mAtrA akshara 
  // $sSÍß ¢››ÆÚ»»
  // {countries:[country language currency]}
  // {string []}
  // {kavach}
  // {}{}{}
  // {}{}
  // {}
  // |»«
  // |.≥˘under lookup|
  // lookup ::
  // versionnn:: shrirAma
  // ziva 
  // treat as guest
  // {"learnsannskrit.cc"}
  // \\  {}

  // shabda roop:{rtl:[],ltr:[],btt;[],ttb;[],btne;[],btnw:[],netb:[],setb:[]}

  useEffect(() => {
    let mount=true
    if(mount && string.length>1){
      find_from_amar(string)
    }
  
    return () => {
      mount=false
    }
  }, [string])
  
const [text,setText]=useState<any>()

  return <div className="p-2 mb-6 w-full bg-white shadow-lg">
    <div className="flex flex-row justify-between">

    <div>
      from:<select>
      {
        ["English","Sanskrut","Hindi"].map((lng,index)=>{
          return <option key={index}>{lng}</option>
        })
      }
    </select>
    </div>
    <div>
      to:<select className="w-48 overflow-hidden">
      {
        ...languages_.map((lng:any,index:number)=>{
          // console.log('---=.>',lng)
          return <option key={index} className="flex flex-row flex-wrap gap-2">
            {lng.name}</option>
        })
      }
    </select>
    </div>
    </div>
<div className="flex flex-col sm:flex-row gap-4">
    <input className="w-full bg-gray-300 mt-2 p-1" placeholder="Search here"
    onChange={(e:any)=>{
      setString(e.target.value)
    }}
    />
    <div className="w-100 p-2 bg-blue-500 text-white mt-4 text-center rounded-lg shadow-lg">Translate</div>
</div>
{
  results && <div className="w-full p-1">
    {
      results.map((d:any,index:number)=>{
        return <div  key={index} className="flex flex-row w-full gap-2">
          <div>d[0]</div>
          <div>d[1]</div>
          <div>d[2]</div>
          <div>d[3]</div>
          <div>d[4]</div>
        </div>
      })
    }
  </div>
}

<textarea placeholder="here enter" className="w-full" rows={11} onChange={(e:any)=>{
  setText(e.target.value)
console.log(e.target.value)
}}/>
<div className="flex flex-row flex-wrap gap-2">{text?.split('')?.map((i:any,index:number)=>{
  
  console.log(`${i}`.charCodeAt(0)-54019, `${i}`.charCodeAt(0))

  // create pairs
  // surrogated mechaninsm
  // 2303
  // 56325
  // 55300

  return  index%2?String.fromCharCode(`${i}`.charCodeAt(1)!==32?`${i}`.charCodeAt(0)-(54015-(`${i}`.charCodeAt(0)%2?-1:1)):32):''
  })}</div>
  </div>
}

const patra=(number:number)=>{

  
} 

// ekarth
// dviearth
// triearth
// chaturth
// puncham
// shashThi
//  saptam
// ashtak
// navAgrah
// dashme
// ek a a dashi
// dv aa dashi
//  tryodashi
//  chaudas
// amavasya
// purnima

// float window
// message of success dissapearence vibration 
// sound buzzer success sound
// zoom -> success 
// wrong -> 
// transition time {}
// 
// type   sc ri pt
// sc 
//  
// measuring unit rent
// brahmi measuring unit definations algorythms
// algi-o 