import { create_res, find_res } from "@/action"
import { errorT } from "@/components/toast"
import { supabase } from "@/lib/Store"
import { faker } from "@faker-js/faker"
import Image from "next/image"
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



const Blog=()=>{

  return <div className="p-4">
    <div className="h-12"></div>

    <div className="thin-head flex flex-row justify-between">
      <div>
        Blogs 
        </div>
        <div className="flex flex-row text-xl mt-2 gap-2">
      <GrNew/>
      <MdPropane/>
      <BiSupport/>
      </div></div>

    <h1 className="p-2 mt-8">Recent</h1>
    <div className="flex flex-row flex-wrap justify-around  gap-1">
    {
      list.map((l,index)=>{
        return <div key={index} className="w-full  sm:w-56 p-2 shadow-lg bg-white">
          <Image
          width={100}
          height={100}
          alt="blog"
          src={`/blog/${faker.helpers.arrayElement([1,2,3,4,5,6])}.jpeg`}
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
