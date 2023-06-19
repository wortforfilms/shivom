import { create_res, find_res } from "@/action"
import { errorT } from "@/components/toast"
import { supabase } from "@/lib/Store"
import { range } from "@/util/createRange"
import { faker } from "@faker-js/faker"
import { ascending } from "d3"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BiLike, BiPlus, BiShare, BiSupport } from "react-icons/bi"

import {  MdReportProblem } from "react-icons/md"



export const list=[
{set:"brahmi",topic:"The Indian Dream: Unleashing the Power of Brahmi"},
{set:"brahmi",topic:"Harnessing the Potential: India's Journey to Superpower Status"},
{set:"brahmi",topic:"The Brahmi Revolution: India's Path to Global Influence"},
{set:"brahmi",topic:"India's Rise: Empowering the Nation through Brahmi"},
{set:"brahmi",topic:"Building Blocks of a Superpower: India's Brahmically-Driven Growth"},
{set:"brahmi",topic:"Unleashing India's Brain Power: The Role of Brahmi"},
{set:"brahmi",topic:"The Brahmastra of Progress: India's Quest for Superpower Status"},
{set:"brahmi",topic:"India's Intellectual Resurgence: Brahmi as a Catalyst"},
{set:"brahmi",topic:"Brahmify India: Unlocking the Nation's Potential"},
{set:"brahmi",topic:"Brahma Bharat: India's Ascent to Superpower Status"},
{set:"brahmi",topic:"A New Era Dawns: India's Brahmi-Powered Transformation"},
{set:"brahmi",topic:"Brahmi 2.0: Paving the Way for India's Global Dominance"},
{set:"brahmi",topic:"India's Brainwave: Harnessing Brahmi for Success"},
{set:"brahmi",topic:"Supercharging India: The Brahmi Advantage"},
{set:"brahmi",topic:"Empowering Minds, Empowering Nation: India's Journey with Brahmi"},
{set:"brahmi",topic:"The Brahmi Effect: India's Path to Economic and Political Leadership"},
{set:"brahmi",topic:"Innovate, Create, Dominate: India's Brahmically-Driven Future"},
{set:"brahmi",topic:"Unleashing India's Intellectual Powerhouse: The Brahmi Renaissance"},
{set:"brahmi",topic:"India's Brain Trust: Leveraging Brahmi for Global Influence"},
{set:"brahmi",topic:"Breaking Barriers: How Brahmi is Propelling India towards Superpower Status"},
{set:"brahmi",topic:"Building a Knowledge Economy: India's Brahmically-Fueled Growth"},
{set:"brahmi",topic:"Mind Over Matter: India's Transformation through Brahmi"},
{set:"brahmi",topic:"The Power Within: India's Ascendance with Brahmi"},
{set:"brahmi",topic:"India Unleashed: The Brahmi Revolution"},
{set:"brahmi",topic:"Rise of the Brain Nation: India's Journey to Superpower Status"},
{set:"brahmi",topic:"Advancing India: The Brahmically-Driven Paradigm Shift"},
{set:"brahmi",topic:"Brahma Shakti: Fueling India's Superpower Ambitions"},
{set:"brahmi",topic:"India's Intellectual Awakening: Embracing the Power of Brahmi"},
{set:"brahmi",topic:"The Brahma Code: India's Blueprint for Global Dominance"},
{set:"brahmi",topic:"Intellectually Empowered: India's Road to Superpower Status through Brahmi"},
{set:"brahmi",topic:"The Brahma Factor: India's Rise on the Global Stage"},
{set:"brahmi",topic:"India 2.0: Unlocking the Potential with Brahmi"},
{set:"brahmi",topic:"Knowledge Revolution: India's Transformation with Brahmi at the Core"},
{set:"brahmi",topic:"The Brahma Trail: India's Journey towards Superpower Status"},
{set:"brahmi",topic:"India's Intellectual Arsenal: The Brahmi Advantage"},
{set:"brahmi",topic:"Intellectual Renaissance: India's Pathway to Superpower Status"},
{set:"brahmi",topic:"Brahma Bharati: India's Brain-Driven Rise to Power"},
{set:"brahmi",topic:"The Brain Trust: India's Brahmi-Powered Ascendance"},
{set:"brahmi",topic:"Mastering Minds, Conquering Frontiers: India's Quest for Superpower Status"},
{set:"brahmi",topic:"India Unleashed: The Power of Brahmi"},
{set:"brahmi",topic:"Brahma Bindu: India's Journey to Becoming a Superpower"},
{set:"brahmi",topic:"Rise of the Brahmi Nation: India's Roadmap to Global Prominence"},
{set:"brahmi",topic:"The Brahma Shift: India's Transition to Superpower Status"},
{set:"brahmi",topic:"Intellectual Evolution: The Brahmically-Fueled Growth of India"},
{set:"brahmi",topic:"Mind Power: Unleashing India's Potential through Brahmi"},
{set:"brahmi",topic:"Brahma Yug: India's Era of Superpower Dominance"},
{set:"brahmi",topic:"Empowering a Nation: India's Brahmically-Driven Development"},
{set:"brahmi",topic:"Rise of the Intellectual Giant: India's Journey with Brahmi"},
{set:"brahmi",topic:"Transforming India: The Brahmi Revolution and Superpower Aspirations"},
{set:"brahmi",topic:"Brahma Nirmaan: Paving the Way for India's Superpower Status"},
{set:"vedic",topic:"The Power of Vedic Mindset: India's Path to Superpower Status"},
{set:"vedic",topic:"Reviving Ancient Wisdom: The Key to India's Journey towards Greatness"},
{set:"vedic",topic:"Unleashing the Vedic Potential: India's Quest for Superpower Status"},
{set:"vedic",topic:"Harnessing the Spirit of Vedas: India's Rise on the Global Stage"},
{set:"vedic",topic:"India's Vedic Renaissance: Transforming the Nation for Superpower Status"},
{set:"vedic",topic:"The Vedic Way: Guiding India's Journey to Greatness"},
{set:"vedic",topic:"The Resurgence of Vedic Values: India's Roadmap to Superpower Status"},
{set:"vedic",topic:"Awakening the Vedic Mind: India's Path to Global Influence"},
{set:"vedic",topic:"Vedic Wisdom in Modern Times: India's Evolution towards Superpower Status"},
{set:"vedic",topic:"The Vedic Paradigm: India's Catalyst for Economic and Cultural Empowerment"},
{set:"vedic",topic:"Vedic Heritage, Global Leadership: India's Quest for Superpower Status"},
{set:"vedic",topic:"Embracing Vedic Consciousness: India's Road to Greatness"},
{set:"vedic",topic:"The Vedic Mindset: Igniting India's Potential for Superpower Status"},
{set:"vedic",topic:"Vedic Visionaries: Shaping India's Future as a Global Leader"},
{set:"vedic",topic:"Reimagining India: Reviving the Vedic Mindset for Superpower Aspirations"},
{set:"vedic",topic:"Vedic Renaissance: India's Cultural Revival on the Path to Greatness"},
{set:"vedic",topic:"Unearthing Vedic Principles: India's Journey to Superpower Status"},
{set:"vedic",topic:"India's Vedic Resurgence: Redefining the Nation's Destiny"},
{set:"vedic",topic:"Vedic Civilization Revisited: India's Pursuit of Superpower Status"},
{set:"vedic",topic:"The Vedic DNA of India: Nurturing Greatness for Global Impact"},
{set:"vedic",topic:"Vedic Wisdom for a New India: Fueling the Superpower Aspirations"},
{set:"vedic",topic:"The Vedic Soul of India: Charting the Course to Superpower Status"},
{set:"vedic",topic:"India's Vedic Heritage: Illuminating the Path to Greatness"},
{set:"vedic",topic:"Vedic Mindset and Global Competitiveness: India's Roadmap to Superpower Status"},
{set:"vedic",topic:"The Vedic Renaissance: Unleashing India's Potential for Global Influence"},
{set:"vedic",topic:"Vedic Principles for Economic Empowerment: India's Rise to Superpower Status"},
{set:"vedic",topic:"Vedic Education for a Stronger India: Building the Foundation for Greatness"},
{set:"vedic",topic:"Nurturing Vedic Entrepreneurship: India's Drive towards Superpower Status"},
{set:"vedic",topic:"Vedic Values and Sustainable Development: India's Journey to Greatness"},
{set:"vedic",topic:"Vedic Philosophy and Leadership: India's Path to Superpower Status"},
{set:"vedic",topic:"Vedic Mindfulness: Cultivating Resilience on India's Road to Greatness"},
{set:"vedic",topic:"Vedic Traditions and Environmental Stewardship: India's Pathway to Superpower Status"},
{set:"vedic",topic:"India's Vedic Legacy: Enriching the World through Cultural Diplomacy"},
{set:"vedic",topic:"Vedic Health and Wellness: Empowering India's Journey to Superpower Status"},
{set:"vedic",topic:"Vedic Architecture: Shaping India's Infrastructure for Global Prominence"},
{set:"vedic",topic:"Vedic Spirituality and Inner Transformation: India's Quest for Superpower Status"},
{set:"vedic",topic:"Vedic Wisdom for Sustainable Governance: India's Pathway to Greatness"},
{set:"vedic",topic:"Vedic Arts and Culture: Showcasing India's Rich Heritage on the World Stage"},
{set:"vedic",topic:"Vedic Science and Technological Innovation: Propelling India towards Superpower Status"},
{set:"vedic",topic:"Vedic Philosophy in Governance: India's Drive for Efficient and Inclusive Systems"},
{set:"vedic",topic:"Vedic Agriculture and Food Security: Nourishing India's Superpower Ambitions"},
{set:"vedic",topic:"Vedic Wisdom for Social Harmony: India's Journey to Greatness"},
{set:"vedic",topic:"Vedic Literature: India's Intellectual Arsenal on the Path to Superpower Stat"},
{set:"vedic",topic:"Vedic Yoga and Wellness: Empowering Individuals on India's Road to Greatness"},
{set:"vedic",topic:"Vedic Astronomy and Space Exploration: India's Cosmic Quest for Superpower Status"},
{set:"vedic",topic:"Vedic Music and Performing Arts: Showcasing India's Cultural Splendor Worldwide"},
{set:"vedic",topic:"Vedic Philosophy and Sustainable Development: India's Blueprint for Greatness"},
{set:"vedic",topic:"Vedic Ethics and Corporate Governance: India's Drive towards Superpower Status"},
{set:"vedic",topic:"Vedic Philosophy in Education: Nurturing India's Future Leaders for Global Impact"},
{set:"vedic",topic:"Vedic Wisdom and National Security: Safeguarding India's Superpower Aspirations"},
]






const Blog=()=>{

  const router=useRouter()

  return <div className="p-2 sm:p-4">
    <div className="h-12"></div>

    <div className="text-3xl flex flex-row bg-white p-2 justify-between">
      <div>
        Blogs 
        </div>
        <div className="flex flex-row text-3xl  gap-2">
      <BiPlus/>
      {/* <MdPropane/> */}
      <BiSupport/>
      </div></div>

    <h1 className="p-2 mt-4">Recent</h1>
    <RecentPost/>

    <h1 className="p-2 mt-8">Most Popular</h1>
    <RecommededPost/>

    <div className="flex flex-row flex-wrap mb-12 justify-around  gap-1">
    {
      list.map((l,index)=>{
        return <div key={index} >
          <BlogView index={index} l={l}  router={router}/>
          </div>
      })
    }
    </div>


    <h1 className="p-2 mt-8">Most Liked</h1>
    
    </div>
}


export default Blog


const create_blog=async (title:string,content:any, userId:number, type:string,image:string) => {
  const {data,error}=await supabase.from('post').insert([{
    title:title,
    content:content.choices[0].text,
    type:type,
    author_id:userId,
    image:image
  }]).select('*')
  return {data,error}
}

const get_post=async(title:string, type:string, userId:number, setLoading:any,setBlog:any,  image:string)=>{

  const pmt=`write ${type} titled ${title} in detail`
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

  const generate_post = async () => {
    await fetch('https://api.openai.com/v1/completions', requestOptions).then(res => res.json()).then(data => {
      create_blog(title, data, userId, "blog", image).then(res => {

        if (res && res.data && res.data[0]) {
          console.log('created answer', res);
          setBlog(res.data)
          setLoading(false)
          return res.data[0];
        }
      });
    }).catch(error => {
      setLoading(false)
      errorT(`${error}`);

    });
  };

const find_post=async(title:string,type:string)=>{
  const {data:existing_res,error}=await supabase.from().select('*').eq('title',title).eq('type',type)
  return {existing_res,error}
}

  await find_post(title,type).then(res => {
    if (res && res.existing_res && res.existing_res.length > 0 && res?.existing_res[0]?.response?.choices && res?.existing_res[0]?.response?.choices[0]?.text) {
      console.log('found post', res);
      setBlog(res.existing_res)
      setLoading(false)
      return res.existing_res[0].response;
    } else {
      console.log("local post not found. geerating new");
      generate_post();
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

const  BlogView=(props:any)=>{
  const {router, index, l}=props
  const [loading,setLoading]=useState(false)
  const [blog,setBlog]=useState<any>(null)

  useEffect(()=>{
    let mount=true 
    setLoading(true)
    if(mount){
      const find_blog=async()=>{
        const {data,error}=await supabase.from('post').select('*').eq('title',l.topic).eq('type','blog')
        
        if(data && data.length>0){
          setBlog(data[0])
        } else {
          setBlog(null)
        }
      }
      find_blog()

    }
    return ()=>{mount=false}
  },[l.topic])



  return  <div  className="w-full  sm:w-72 mt-4 shadow-lg bg-white">
    <Image
    width={100}
    height={100}
    alt="blog"
    src={`/blog/${index+1}.jpeg`}
    className="w-full "
    />
    <div className="p-4">

    <div className="font-bold text-xl cursor-pointer hover:text-green-700 hover:underline"
      onClick={()=>{
        router.push(`/blog/${l.topic}`)
      }}
      >{l.topic}</div>
    <div  className="text-xs underline">Decoder: Hemant Kumar  Dixit</div>
   {!blog && <div className="p-2 bg-pink-500 rounded-lg text-white w-24 text-center shadow-lg m-4 "
   onClick={()=>{
    setLoading(true)
    get_post(l.topic,'blog',1,setLoading,setBlog,`/blog/${index+1}.jpeg`)
   }}
   >{loading?"loading":'Process'}</div>}
    <PostStat/>
      </div>
    </div>
}

export const PostStat=()=>{
  return <div className="flex flex-col">
    <div  className="text-xs">
      views: 100k 
      </div>
    <div className="text-xl flex  flex-row justify-between p-2">
    <BiLike/> <BiShare/><MdReportProblem/>
  </div>
    </div>
}


export const PromotionalPost: React.FC = () => {
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

export const RecentPost=()=>{
  const [recent, setRecent]=useState<any>(null)

  const get_recent=async()=>{
    const {data,error}=await supabase.from('post').select('*').eq('type','blog').order('created_at',{ascending:false}).limit(7)
    return {data,error}
  }
  useEffect(() => {
    let  mount=true
    if(mount){
      get_recent().then(data=>{
        console.log(data)
        setRecent(data.data)
      }).catch(error=>{console.log(error)})
    }
  
    return () => {
      mount=false
    }
  }, [])
  const router=useRouter()
  
return <div className="flex flex-row overflow-x-scroll w-full">
  {
    recent?.map((re:any,index:number)=>{
      return <div key={index} className="w-48 p-1">
        <Image 
        src={re.image}
        alt="post image"
        width={100}
        height={75}
        className="w-48 h-auto "
        />
        <div className="text-xs"
        onClick={()=>{
          router.push(`/blog/${re.title}`)
        }}
        >{re.title}</div>

      </div>
    })
  }
</div>

  }

  export const RecommededPost=()=>{
    const [recent, setRecent]=useState<any>(null)
  
    const get_recent=async()=>{
      const {data,error}=await supabase.from('post').select('*').eq('type','blog').order('created_at',{ascending:false}).limit(20)
      return {data,error}
    }
    useEffect(() => {
      let  mount=true
      if(mount){
        get_recent().then(data=>{

          setRecent(faker.helpers.arrayElements(data.data,8))
        }).catch(error=>{console.log(error)})
      }
    
      return () => {
        mount=false
      }
    }, [])
    const router=useRouter()
    
  return <div className="flex flex-row overflow-x-scroll w-full">
    {
      recent?.map((re:any,index:number)=>{
        return <div key={index} className="w-32 p-1">
          <Image 
          src={re.image}
          alt="post image"
          width={100}
          height={75}
          className="w-32 h-24 "
          />
          <div className="text-xs"
          onClick={()=>{
            router.push(`/blog/${re.title}`)
          }}
          >{re.title}</div>
  
        </div>
      })
    }
  </div>
  
    }

    export const ShowcasedPost=()=>{
      const [recent, setRecent]=useState<any>(null)
    
      const get_recent=async()=>{
        const {data,error}=await supabase.from('post').select('*').eq('type','blog').order('created_at',{ascending:false}).limit(20)
        return {data,error}
      }
      useEffect(() => {
        let  mount=true
        if(mount){
          get_recent().then(data=>{
  
            setRecent(faker.helpers.arrayElements(data.data,8))
          }).catch(error=>{console.log(error)})
        }
      
        return () => {
          mount=false
        }
      }, [])
      const router=useRouter()
      
    return <div className="flex flex-row gap-2 overflow-x-scroll  mt-6  mb-6 w-full h-auto">
      {
        recent?.map((re:any,index:number)=>{
          return <div key={index} className="w-32  bg-white hover:shadow-xl cursor-pointer rounded-lg shadow-lg"
          onClick={()=>{
            router.push(`/blog/${re.title}`)
          }}
          >
            <Image 
            src={re.image}
            alt="post image"
            width={100}
            height={100}
            className="w-64 h-100 "
            />
            <div className="text-xs p-2"
      
            >{re.title}</div>
          </div>
        })
      }
    </div>
      }

// 1-1 b-a-y
//  b-a-i
// mum bai
