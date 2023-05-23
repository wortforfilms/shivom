import { useRouter } from "next/router"
import { useState } from "react"

const Services = () => {

  const [services,setServices]=useState([
    {label:"education",
    description:"Shivom's education services are designed to provide a holistic and enriched learning experience. Drawing from the timeless teachings of the Vedas and other ancient scriptures, the platform offers courses, workshops, and interactive sessions that cover various disciplines, including Vedic studies, philosophy, spirituality, meditation, yoga, and personal development. Through these educational offerings, Shivom promotes self-discovery, intellectual growth, and the cultivation of inner wisdom.",
    link:"",image:""},
    {label:"mantra(software)",
    description:"Shivom leverages the concept of mantra as software to develop innovative digital solutions. These software applications are designed to enhance productivity, efficiency, and overall well-being. The mantra (software) offerings may include educational apps, personal development tools, meditation and mindfulness apps, and platforms that facilitate the exploration of Vedic knowledge, rituals, and mantras.",link:"",image:""},
    {label:"yantra(hardware)",
    description:"Shivom recognizes the importance of tangible tools and devices in augmenting human experiences. Yantra, the hardware aspect, involves the creation of physical products that integrate ancient wisdom with modern technology. This may encompass devices such as smart home solutions, wearables for health and wellness tracking, meditation aids, and other innovative products designed to enhance daily life.",link:"",image:""},
    {label:"tantra(I.O.T.)",description:"Building upon the concept of tantra as interconnectedness, Shivom delves into the realm of the Internet of Things (IoT). By harnessing the power of interconnected devices and systems, Shivom creates smart environments that integrate Vedic principles and wisdom. This includes IoT solutions for smart homes, smart cities, sustainable living, agriculture, energy management, and more, fostering harmony between technology and nature.",link:"",image:""},
    {label:"advance sciences",description:"Shivom embraces advanced sciences and their potential to unlock new frontiers of knowledge. The platform actively supports research and exploration in fields such as quantum physics, astronomy, neuroscience, consciousness studies, and other interdisciplinary areas. By bridging ancient wisdom with modern scientific inquiry, Shivom seeks to push the boundaries of human understanding and promote intellectual growth.",link:"",image:""},
    {label:"artificial intelligence",description:"Recognizing the transformative power of artificial intelligence (AI), Shivom incorporates AI technologies into its services. AI algorithms are utilized to analyze data, provide personalized recommendations, and support decision-making processes. By integrating AI with Vedic knowledge, Shivom aims to create intelligent systems that enhance learning, well-being, and personal growth.",link:"",image:""},
    {label:"healthcare",description:"Shivom's healthcare services focus on integrating ancient wisdom with modern medical practices. The platform offers holistic healthcare solutions that encompass preventive care, wellness programs, personalized health assessments, alternative therapies, and lifestyle guidance.",link:"",image:""},
    {label:"eldercare",description:"Additionally, Shivom extends its services to eldercare, providing specialized support and assistance for the elderly population, with a focus on their physical, emotional, and spiritual well-being.",link:"",image:""},
    {label:"consultations",description:"Shivom offers consultation services provided by experts in various fields, including Vedic scholars, spiritual guides, life coaches, wellness practitioners, and career advisors. These consultations aim to provide guidance, support, and personalized solutions to individuals seeking personal and professional growth, spiritual development, or assistance with life challenges.",link:"",image:""},
    {label:"research",description:"Shivom is committed to advancing knowledge through rigorous research. The platform facilitates and supports research initiatives.",link:"",image:""}
  ])

  const router=useRouter()
  return <div className="p-4">
    <h1>Introducing Shivom</h1>
    <a>Empowering Education, Mantra (Software), Yantra (Hardware), Tantra (IoT), Advanced Sciences, Artificial Intelligence, Healthcare, Eldercare, Consultations, and Research Services</a>
    <p>Shivom is a groundbreaking platform rooted in the wisdom of Brahmi-based Vedic knowledge, offering a comprehensive range of services that encompass education, mantra (software), yantra (hardware), tantra (IoT), advanced sciences, artificial intelligence, healthcare, eldercare, consultations, and research. This innovative platform aims to empower individuals and organizations by harnessing the transformative potential of ancient wisdom and cutting-edge technologies.</p>
    <div className='text-xl flex flex-col gap-4 p-4 mt-12'>


    {
      services.map((ser,index)=>{
        return <div key={index} className='p-2 bg-white bg-white cursor-pointer '
        onClick={()=>{
          router.push(`/services/${ser.label}`)
        }}
        >
          <div className="font-bold uppercase hover:text-green-500 hover:underline">{ser.label}</div>
        <div className="p-2 text-xs font-normal">{ser.description}</div>
        </div>
})
}
</div>

  </div>
}


export default Services