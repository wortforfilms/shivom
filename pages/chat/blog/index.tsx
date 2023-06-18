import { create_res, find_res } from "@/action"
import { errorT } from "@/components/toast"
import { supabase } from "@/lib/Store"
import { range } from "@/util/createRange"
import { faker } from "@faker-js/faker"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BiSupport } from "react-icons/bi"
import { GrNew } from "react-icons/gr"
import { MdPropane } from "react-icons/md"



const list=[
"The Indian Dream: Unleashing the Power of Brahmi",
"Harnessing the Potential: India's Journey to Superpower Status",
"The Brahmi Revolution: India's Path to Global Influence",
"India's Rise: Empowering the Nation through Brahmi",
"Building Blocks of a Superpower: India's Brahmically-Driven Growth",
"Unleashing India's Brain Power: The Role of Brahmi",
"The Brahmastra of Progress: India's Quest for Superpower Status",
"India's Intellectual Resurgence: Brahmi as a Catalyst",
"Brahmify India: Unlocking the Nation's Potential",
"Brahma Bharat: India's Ascent to Superpower Status",
"A New Era Dawns: India's Brahmi-Powered Transformation",
"Brahmi 2.0: Paving the Way for India's Global Dominance",
"India's Brainwave: Harnessing Brahmi for Success",
"Supercharging India: The Brahmi Advantage",
"Empowering Minds, Empowering Nation: India's Journey with Brahmi",
"The Brahmi Effect: India's Path to Economic and Political Leadership",
"Innovate, Create, Dominate: India's Brahmically-Driven Future",
"Unleashing India's Intellectual Powerhouse: The Brahmi Renaissance",
"India's Brain Trust: Leveraging Brahmi for Global Influence",
"Breaking Barriers: How Brahmi is Propelling India towards Superpower Status",
"Building a Knowledge Economy: India's Brahmically-Fueled Growth",
"Mind Over Matter: India's Transformation through Brahmi",
"The Power Within: India's Ascendance with Brahmi",
"India Unleashed: The Brahmi Revolution",
"Rise of the Brain Nation: India's Journey to Superpower Status",
"Advancing India: The Brahmically-Driven Paradigm Shift",
"Brahma Shakti: Fueling India's Superpower Ambitions",
"India's Intellectual Awakening: Embracing the Power of Brahmi",
"The Brahma Code: India's Blueprint for Global Dominance",
"Intellectually Empowered: India's Road to Superpower Status through Brahmi",
"The Brahma Factor: India's Rise on the Global Stage",
"India 2.0: Unlocking the Potential with Brahmi",
"Knowledge Revolution: India's Transformation with Brahmi at the Core",
"The Brahma Trail: India's Journey towards Superpower Status",
"India's Intellectual Arsenal: The Brahmi Advantage",
"Intellectual Renaissance: India's Pathway to Superpower Status",
"Brahma Bharati: India's Brain-Driven Rise to Power",
"The Brain Trust: India's Brahmi-Powered Ascendance",
"Mastering Minds, Conquering Frontiers: India's Quest for Superpower Status",
"India Unleashed: The Power of Brahmi",
"Brahma Bindu: India's Journey to Becoming a Superpower",
"Rise of the Brahmi Nation: India's Roadmap to Global Prominence",
"The Brahma Shift: India's Transition to Superpower Status",
"Intellectual Evolution: The Brahmically-Fueled Growth of India",
"Mind Power: Unleashing India's Potential through Brahmi",
"Brahma Yug: India's Era of Superpower Dominance",
"Empowering a Nation: India's Brahmically-Driven Development",
"Rise of the Intellectual Giant: India's Journey with Brahmi",
"Transforming India: The Brahmi Revolution and Superpower Aspirations",
"Brahma Nirmaan: Paving the Way for India's Superpower Status",
]

const vlist=[
 "The Power of Vedic Mindset: India's Path to Superpower Status",
 "Reviving Ancient Wisdom: The Key to India's Journey towards Greatness",
 "Unleashing the Vedic Potential: India's Quest for Superpower Status",
 "Harnessing the Spirit of Vedas: India's Rise on the Global Stage",
 "India's Vedic Renaissance: Transforming the Nation for Superpower Status",
 "The Vedic Way: Guiding India's Journey to Greatness",
 "The Resurgence of Vedic Values: India's Roadmap to Superpower Status",
 "Awakening the Vedic Mind: India's Path to Global Influence",
 "Vedic Wisdom in Modern Times: India's Evolution towards Superpower Status",
 "The Vedic Paradigm: India's Catalyst for Economic and Cultural Empowerment",
 "Vedic Heritage, Global Leadership: India's Quest for Superpower Status",
 "Embracing Vedic Consciousness: India's Road to Greatness",
 "The Vedic Mindset: Igniting India's Potential for Superpower Status",
 "Vedic Visionaries: Shaping India's Future as a Global Leader",
 "Reimagining India: Reviving the Vedic Mindset for Superpower Aspirations",
 "Vedic Renaissance: India's Cultural Revival on the Path to Greatness",
 "Unearthing Vedic Principles: India's Journey to Superpower Status",
 "India's Vedic Resurgence: Redefining the Nation's Destiny",
 "Vedic Civilization Revisited: India's Pursuit of Superpower Status",
 "The Vedic DNA of India: Nurturing Greatness for Global Impact",
 "Vedic Wisdom for a New India: Fueling the Superpower Aspirations",
 "The Vedic Soul of India: Charting the Course to Superpower Status",
 "India's Vedic Heritage: Illuminating the Path to Greatness",
 "Vedic Mindset and Global Competitiveness: India's Roadmap to Superpower Status",
 "The Vedic Renaissance: Unleashing India's Potential for Global Influence",
 "Vedic Principles for Economic Empowerment: India's Rise to Superpower Status",
 "Vedic Education for a Stronger India: Building the Foundation for Greatness",
 "Nurturing Vedic Entrepreneurship: India's Drive towards Superpower Status",
 "Vedic Values and Sustainable Development: India's Journey to Greatness",
 "Vedic Philosophy and Leadership: India's Path to Superpower Status",
 "Vedic Mindfulness: Cultivating Resilience on India's Road to Greatness",
 "Vedic Traditions and Environmental Stewardship: India's Pathway to Superpower Status",
 "India's Vedic Legacy: Enriching the World through Cultural Diplomacy",
 "Vedic Health and Wellness: Empowering India's Journey to Superpower Status",
 "Vedic Architecture: Shaping India's Infrastructure for Global Prominence",
 "Vedic Spirituality and Inner Transformation: India's Quest for Superpower Status",
 "Vedic Wisdom for Sustainable Governance: India's Pathway to Greatness",
 "Vedic Arts and Culture: Showcasing India's Rich Heritage on the World Stage",
 "Vedic Science and Technological Innovation: Propelling India towards Superpower Status",
 "Vedic Philosophy in Governance: India's Drive for Efficient and Inclusive Systems",
 "Vedic Agriculture and Food Security: Nourishing India's Superpower Ambitions",
 "Vedic Wisdom for Social Harmony: India's Journey to Greatness",
 "Vedic Literature: India's Intellectual Arsenal on the Path to Superpower Stat",
 "Vedic Yoga and Wellness: Empowering Individuals on India's Road to Greatness",
 "Vedic Astronomy and Space Exploration: India's Cosmic Quest for Superpower Status",
 "Vedic Music and Performing Arts: Showcasing India's Cultural Splendor Worldwide",
 "Vedic Philosophy and Sustainable Development: India's Blueprint for Greatness",
 "Vedic Ethics and Corporate Governance: India's Drive towards Superpower Status",
 "Vedic Philosophy in Education: Nurturing India's Future Leaders for Global Impact",
 "Vedic Wisdom and National Security: Safeguarding India's Superpower Aspirations",

]



const Blog=()=>{

  const router=useRouter()

  return <div className="p-4">
    <div className="h-12"></div>

    <div className="thin-head flex flex-row justify-between">
      <div>
        Blogs 
        </div>
        <PromotionalPost/>
        <div className="flex flex-row text-xl mt-2 gap-2">
      <GrNew/>
      <MdPropane/>
      <BiSupport/>
      </div></div>

    <h1 className="p-2 mt-8">Recent</h1>

    <div className="flex flex-row flex-wrap justify-around  gap-1">
    {
      list.map((l,index)=>{
        return <div key={index} className="w-full  sm:w-56 p-2 shadow-lg bg-white"
        onClick={()=>{
          router.push(`/chat/blog/${1}`)
        }}
        >
          <Image
          width={100}
          height={100}
          alt="blog"
          src={`/blog/${index<48?index+1:index-47}.jpeg`}

          // src={`/blog/${faker.helpers.arrayElement(range(1,18))}.jpeg`}
          className="w-full "
          />
          <div className="font-bold text-xl">{l}</div>
          <div  className="text-xs underline">Author: "Hemant Kumar  Dixit"</div>
          </div>
      })
    }
    </div>
    <div className="flex flex-row flex-wrap justify-around  gap-1">
    {
      vlist.map((l,index)=>{
        return <div key={index} className="w-full  sm:w-56 p-2 shadow-lg bg-white"
        onClick={()=>{
          router.push(`/chat/blog/${1}`)
        }}
        >
          <Image
          width={100}
          height={100}
          alt="blog"
          src={`/blog/${index<48?index+1:index-47}.jpeg`}
          // src={`/blog/${faker.helpers.arrayElement(range(1,22))}.jpeg`}
          className="w-full "
          />
          <div className="font-bold text-xl">{l}</div>
          <div  className="text-xs underline">Author: "Hemant Kumar  Dixit"</div>
          </div>
      })
    }
    </div>
    <h1 className="p-2 mt-8">Most Popular</h1>
    <h1 className="p-2 mt-8">Most Liked</h1>
    
    </div>
}


export default Blog


const create_blog=async (blog:string, userId:number, type:string) => {
  const {data,error}=await supabase.from('').select('*').insert([{
    data:blog,
    type:type,
    author_id:userId
  }])
  return {data,error}
}

const create_blog_from_prompt=async(pmt:any, setLoading:any,setDetails:any)=>{
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
      create_blog(pmt, data, "info").then(res => {

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


const pp={
  matter:`
  🌟 Exciting Announcement! 🌟

📣 Introducing "Harnessing the Potential: India's Journey to Superpower Status by Reviving Brahmi" 📣

India, the land of diverse cultures and ancient wisdom, is embarking on an extraordinary journey towards superpower status. Join us as we unveil a groundbreaking initiative that revives the power of Brahmi, an ancient script with immense potential to shape India's future!

🔮 "Harnessing the Potential: India's Journey to Superpower Status by Reviving Brahmi" 🔮

🌐 Discover how the revival of Brahmi can:
✅ Preserve India's cultural identity
✅ Foster linguistic unity and understanding
✅ Promote education and literacy
✅ Boost cultural tourism and global appeal
✅ Embrace technology for a digital age
✅ Ignite intellectual pursuits and academic research
✅ Facilitate cultural diplomacy and international collaborations

📚 Uncover the treasure trove of ancient wisdom hidden within Brahmi, encompassing fields such as astronomy, mathematics, medicine, philosophy, and more! 🌌💡

🌍 Be part of a historic movement that bridges the past with the future, where heritage meets modernity, and tradition paves the way to superpower status. 🚀

🗓️ Save the date: [Event Date]
🕒 Time: [Event Time]
📍 Location: [Event Venue]

📢 Spread the word and join us on this remarkable journey to revive Brahmi and propel India towards its destined superpower status! Together, we can make history and shape the future of our beloved nation! 🇮🇳💪

Stay tuned for more updates and details on how you can be part of this momentous initiative. Let's harness the power of Brahmi and unlock India's true potential!

#BrahmiRevival #IndiaSuperpower #HeritageMeetsModernity #JourneyToGreatness
  `
}



const PromotionalPost: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`promotional-post ${fadeIn ? 'fade-in' : ''}`}>
      <div className="post-content">
        <h2>Harnessing the Potential:</h2>
        <h2>India's Journey to Superpower Status</h2>
        <p>Reviving Brahmi</p>
        <p>Discover how the power of Brahmi can propel India towards superpower status, preserving cultural heritage while embracing modernity.</p>
        <a href="#" className="cta-button">Learn More</a>
        <div className="text-xs" dangerouslySetInnerHTML={{__html:pp.matter}}/>
      </div>
    </div>
  );
};