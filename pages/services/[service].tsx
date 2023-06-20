import Book from "@/elements/3d/bookmock"
import { gold, silver } from "@/sty"
import { useRouter } from "next/router"
import { List } from "../../elements/List"
import { hindi_to_brahmi } from "../../util/hindi_to_brahmi"
import { BrahmiEducation } from "../../components/classes/brahmi/BrahmiEducation"
import { supabase } from "@/lib/Store"

const Service = () => {
  const router = useRouter()
  const { service } = router.query



  return <div className="max-w-3xl m-auto  p-1 ">
    <div className="h-12"></div>
    <h1 className="uppercase p-2">{service}</h1>
    {/* <BrahmiKaavya/> */}
    <div className="flex  flex-col gap-4 w-full  p-4">

      {service === 'education' && <Education/>}

      {
        service === 'mantra(software)' && <Mantra />
      }

      {
        service === 'yantra(hardware)' && <Yantra />
      }
    </div>

  </div>
}


export default Service

const Education=()=>{
  return <div>
 <BrahmiEducation/>
</div>
}

const BrahmiKaavya=()=>{
  const kavya=[
"ब्राह्मी वर्णमाला की कहानी,",
"विचारों का जन्म स्थानी।",
"अ और अंकित, वर्णों की श्रृंगारी,",
"जैसे काव्य का सुंदर सारी।",
"ब भ और द ड़, भावों की विविधता,",
"अर्थों का संग्रह, सौंदर्य की श्रेष्ठता।",
"च छ और ज झ, विचारों की धारा,",
"संदेशों का समुद्र, पुनर्जीवित करारा।",
"त ठ और ड़ ढ़, शब्दों की मधुरता,",
"वाणी की माला, भाषा की विविधता।",
"न ण और त थ, गति की गतिमयी धारा,",
"भूत, वर्तमान और भविष्य की संचारा।",
"प फ और ब भ, विद्या की प्राचीन वाणी,",
"ज्ञान का संकलन, ज्ञान की अद्भुत कहानी।",
"य र और ल, संगीत की अनुभूति,",
"कविताओं की संगीतमय सृजनशीलता।",
"व श और ष, भाषाओं की समान्यता,",
"विचारों की एकता, विदेशों की पहचानियता।",
"स ह और क्ष, विराम चिन्ह का आधार,",
"वाक्यों की सुव्यवस्था, बोली की अनुशासन चिन्हार।",
"अखरों की ये वर्णमाला,",
"हैं ज्ञान के अनमोल खजाना।",
"ब्राह्मी वर्णमाला की यह ज्योति,",
"आदि से अंत तक ब्रह्माण्ड का मोती।",
  ]

  return <div className="m-auto p-2 " >
    <div className="flex flex-col gap-2 m-auto w-full p-4 bg-white">

    {
      kavya.map((li,index)=>{
        return <div key={index} className={``}>{li}</div>
      })
    }
    </div>
  </div>
}

const Yantra = () => {
  return <div>
    <h3>
      In ancient India, the concepts of mantra, yantra, and the Brahmi script were interconnected in a way that drew parallels to modern software and hardware systems. Let's explore this analogy:
    </h3>


    <h2>
      Yantra as Hardware:
    </h2>

    <List
      header={"Yantras are geometric diagrams or symbols that represent various aspects of the cosmos, deities, or divine energies. They are considered to be the hardware or physical counterparts to mantras, providing a tangible structure for their manifestation and amplification."}
      data={[
        "Geometry and Symbols: Yantras are meticulously designed using specific geometric shapes, such as triangles, circles, and squares, along with sacred symbols and patterns. These geometries and symbols act as the hardware components, representing specific energies or deities and enabling their interaction.",
        "Material Manifestation: Yantras were often created on physical mediums such as metal plates, paper, or even etched onto stones. These tangible manifestations of the yantras acted as the hardware that provided a focal point for concentration and meditation. Just as hardware devices provide a physical interface for software execution, yantras served as a tangible medium for connecting with the energies represented by the mantras.",
        "Activation and Amplification: Yantras were considered conduits for the energy and power of the associated mantras. Through focused meditation, rituals, and visualization, individuals would activate the yantras, thereby harnessing and amplifying the effects of the corresponding mantras. This activation process can be likened to booting up and utilizing hardware devices in modern technology.",

      ]}
    />


    <div className="mt-4 font-italic ">

      By considering mantras as software and yantras as hardware, ancient Indian spiritual practitioners integrated the realms of sound, script, and symbolism. This holistic approach allowed them to engage in profound spiritual practices and tap into the deeper dimensions of consciousness. The Brahmi script played a vital role in capturing and transmitting these mantras, acting as the bridge between the abstract and the physical.
    </div>
  </div>
}

const Mantra = () => {
  return <div>
    <h3>
      In ancient India, the concepts of mantra, yantra, and the Brahmi script were interconnected in a way that drew parallels to modern software and hardware systems. Let's explore this analogy:
    </h3>
    <h2>
      Mantra as Software:
    </h2>
    <List
      header={"Mantras are sacred chants or sounds that hold spiritual significance. They are considered to be software in the sense that they carry specific vibrations, frequencies, and intentions. Mantras were written and transmitted using the Brahmi script, which served as the medium for capturing and preserving these sacred vibrations."}
      data={[
        "Brahmi Script: The Brahmi script was used to write down mantras in ancient India. It acted as a digital representation of the sound patterns and syllables that formed the mantras. The script facilitated the storage, transmission, and dissemination of mantras from generation to generation, akin to how software code is written and shared today.",
        "Encoding and Decoding: Just as software code is written in a specific programming language, mantras were written in the Brahmi script. Individuals who were trained in mantra recitation could decode these written mantras by understanding the script's characters and their corresponding sounds. They would then recite the mantras, activating the desired spiritual effects.",
        "Functionality and Intent: Mantras were believed to have specific functions and intentions. They were treated as powerful tools for spiritual growth, healing, protection, and manifestation. Similar to software programs designed for specific purposes, mantras were recited or executed with the intention of producing desired effects in the individual's consciousness or external reality."
      ]}
    />

    <div className="mt-4 font-italic ">

      By considering mantras as software and yantras as hardware, ancient Indian spiritual practitioners integrated the realms of sound, script, and symbolism. This holistic approach allowed them to engage in profound spiritual practices and tap into the deeper dimensions of consciousness. The Brahmi script played a vital role in capturing and transmitting these mantras, acting as the bridge between the abstract and the physical.
    </div>
  </div>
}

export const BookList = (props: any) => {
  const { header, data } = props

  const find_chapter=async(title:string)=>{
    const {data:chapter_list,error}=await supabase.from('post').select('*').eq('type','chapter').eq('title',title)
    return {chapter_list,error}
  }

  // १०-३३
  return <div className='flex h-100 flex-col sm:flex-row'>
    {/* <div className="p-2 mb-2 h-32 text-center  font-bold">
    </div> */}
    
    <div className={`${gold} w-full sm:w-1/2  h-100 p-2`}>
      <div className={`p-2 opacity-90 mt-24 right-2 flex flex-col ${silver} w-[85%] sm:w-[70%] rounded-lg shadow-lg shadow-pink-300 m-auto text-center text-7xl`}>
        <div>
          {hindi_to_brahmi('अहं')}
          </div>
        <div className="text-3xl">
          {hindi_to_brahmi('ब्रह्मास्मि')}
          </div>
          <div className="text-3xl">
          {hindi_to_brahmi('सरस्वती गणेश लक्ष्मी')}
          </div>
          <div className="text-3xl">
          {hindi_to_brahmi('ॐ')}
          </div>
        </div>
    <h1 className="text-3xl bg-orange-500/50 mt-4 sm:mt-16 m-auto p-2">
      {header}
      </h1>
      <h2 className="text-sm p-2">Ideator Coder: Hemant Kumar Dixit</h2>
      <h2 className="text-sm -mt-6 p-2">Author: Ved VyAs</h2>
    </div>
    <div className="bg-gray-300 w-full flex flex-col m-auto sm:w-1/2">

    <div className="p-4 flex flex-col gap-4 font-mono">

      {
        data.map((d: any, index: number) => {

          find_chapter(d).then((res)=>{
            if(res && res.chapter_list.length>0){
              console.log("processed chapters list found",data)
            } else [
              console.log("first process chapters")
            ]
          })
          return <li key={index}>
            {d}
            </li>
        })
      }
    </div>

    </div>

  </div>

}



// post-type  total_views  total-likes rating pr_post_type shared_by  doc-id post_id liked_by viewed_by 