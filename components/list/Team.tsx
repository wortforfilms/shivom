import Image from 'next/image';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import { Ifo } from '@/pages/calender';
import { motion } from 'framer-motion';

export const Team = () => {

  const process_catalyst={
    // designation 
    // department
    // role
    // sector:["acadmea","production","quality",""]
    // thelieproducer: English: // remedy : kind truthy bhram-i1ˆ¡ =-> 
    // {left}{right}
    // me:["",""]
    // µ´Â´meME
    // knowledge : design by purpose
    // remedy; design for purpose
    // signal_type:J_AI_N {error:¿?}
    // organic_network
    // care_for_you
    // {}-{}-{process dosha}-{donate_1}-{remedies:ecommerce}
    // {comp}{u}{t-er}
    // visible test:{<-:->}
    // existense_test:on_error
    // {work}{work}{work}
    // {skill}{work}{learn}{read}{enrich}
    // {}
    // skill :["physical","spiritual","intelligencea","language","acadmea"]
    // 
  }

  const [admins, setAdmins] = useState<any>([
    {
      name: "Hemant Kumar Dixit",
      type: "super",
      designation: "CEO,CTO,CCO",
      equity: "",
      image: ""
    }
  ]);
  const [directors, setDirectors] = useState<any>([
    {
      name: "Hemant Kumar Dixit",
      type: "super",
      designation: "CEO,CTO,CCO",
      equity: "55",
      image: ""
    },
    {
      name:"Sanjeeta Khaira",
      type: "admin",
      designation: "HR(Director)",
      equity: "15",
      image: ""
    },
    {
      name:"Tanu Shukla",
      type: "admin",
      designation: "Finance(Director)",
      equity: "15",
      image: ""
    },
    {
      name:"Nitin Shukla",
      type: "admin",
      designation: "Marketing & Sales(Director)",
      equity: "15",
      image: ""
    }
  ]);
  const [team, setTeam] = useState<any>([]);
  const [contributers, setContributers] = useState<any>([]);



  // saptrishi
  // houses
  // brahman
  // vaishya
  // baniyA
  // shUdra
  // kshatrya
  // thakur ::: {":::"}
  // tracing ::: indian vidyA
  const designation = [
    { "Chief Executive Officer (CEO)": "The CEO is responsible for the overall strategic direction of the company and oversees all aspects of its operation." },
    { "Chief Operating Officer (COO)": "The COO is responsible for managing the day-to-day operations of the company and ensuring that it runs efficiently." },
    { "Chief Financial Officer (CFO)": "The CFO is responsible for managing the financial resources of the company, including accounting, financial planning, and budgeting." },
    { "Chief Technology Officer (CTO)": "The CTO is responsible for leading the company's technological innovation and ensuring that it remains at the forefront of its industry." },
    { "Chief Science Officer (CSO)": "The CSO is responsible for overseeing the company's research and development efforts and ensuring that it continues to develop new and innovative products." },
    { "Director of Human Resources (HR)": "The HR Director is responsible for managing the company's human resources department and ensuring that the organization attracts, develops, and retains top talent." },
    { "Director of Marketing": "The Director of Marketing is responsible for developing and executing marketing strategies to promote the company's products and services." },
    { "Director of Sales": "The Director of Sales is responsible for developing and executing sales strategies to increase revenue and expand the company's customer base." },
    { "Research Scientists": "Research Scientists are responsible for conducting research and development activities to create new products and improve existing ones." },
    { "Engineers": "Engineers are responsible for designing, testing, and developing products and ensuring that they meet quality standards." },
    { "Technicians": "Technicians are responsible for supporting the research and development process by conducting experiments and collecting data." },
    { "Administrative Staff": "Administrative Staff members provide support to the organization by handling administrative tasks, such as scheduling meetings, managing files, and answering phones." },
    { "On-ground Team": "The On-ground Team includes individuals who work directly with customers or clients, such as sales representatives, customer service representatives, and field technicians." },
    { "Student Interns": "Student Interns are individuals who are currently enrolled in school and are completing an internship with the company. They may work in a variety of roles, such as research assistants, engineering interns, or administrative support. The company may offer internships to provide students with hands-on experience and to identify potential future employees." },
  ];
const [input_screen,setInputScreen]=useState(false)
  //  
  return <div>

<div className='text-5xl p-2 text-left font-thin m-auto'>Admins</div>
{input_screen && <div className='absolute w-full h-[100vh]'>

<motion.div drag className='relative bg-white shadow-lg m-auto w-full sm:w-2/3 h-[70%] overflow-auto'>
  
</motion.div>
</div>}
  <div className='underline text-green-500 p-2'>{"Apply for designation"}</div>
<div className='flex flex-row flex-wrap p-2'>

{
  admins.map((adm:any,index:number)=>{
    return <div key={index} className='w-100 p-2 bg-white'>
      {adm.name}
      </div>
  })
}
  </div>

  <div className='text-5xl p-2 text-left font-thin m-auto'>Directors</div>
  <div className='underline text-green-500 p-2'>{"Apply for designation"}</div>

<div className='flex flex-row flex-wrap w-full justify-around p-2'>

{
  directors.map((adm:any,index:number)=>{
    return <div key={index} className='w-100 p-2 bg-white flex flex-col'>
      <div className='text-xl font-bold '>{adm.name}</div>
      {/* <div>{adm.designation}</div> */}
      <div>{adm.equity}</div>
      </div>
  })
}
  </div>


    <div className='p-4 text-xl text-center font-bold m-auto '>Illuminaty:{'bodhaka'}</div>
    <div className='underline text-green-500 p-2'>{"Learn to Earn"}</div>

<div className='text-5xl p-2 text-left font-thin m-auto'>Chief</div>
<div className='underline text-green-500 p-2'>{"Apply for Designation "}</div>

<div className='flex flex-row flex-wrap gap-4 mt-8 justify-around'>{designation.slice(0,5).map((adm: any, index: number) => {
      return <div key={index} className='w-56 h-full bg-white shadow-lg p-2'>
        <div>{Object.keys(adm)[0]}</div>
        <Image
          src={faker.image.avatar()}
          alt="des"
          width={100}
          height={100}
          className='w-24 h-24 rounded-full m-auto' />
        {/* <div className='w-full  text-center p-2 font-bold'>{faker.name.fullName()}</div> */}
        <div className='text-xs'>{Object.values(adm)}</div>

      </div>;
    })}</div>
<div></div>
<div className='p-2 text-5xl font-thin'>Brahmi Teachers</div>

<div className='p-2 text-5xl font-thin'>Team</div>

    <div className='flex flex-row flex-wrap gap-4 mt-8 justify-around'>{designation.slice(4,designation.length).map((adm: any, index: number) => {
      return <div key={index} className='w-56 h-full bg-white shadow-lg p-2'>
        <div>{Object.keys(adm)[0]}</div>
        <Image
          src={faker.image.avatar()}
          alt="des"
          width={100}
          height={100}
          className='w-24 h-24 rounded-full m-auto' />
        <div className='w-full  text-center p-2 font-bold'>{faker.name.fullName()}</div>
        <div className='text-xs'>{Object.values(adm)}</div>

      </div>;
    })}</div>

    {/* // transaction {creative} */}
    <div className='text-5xl p-2 text-left font-thin m-auto'>Ministry of Ancient & Advance Sciences</div>
<Ifo data={Ministry0}/>

    <div className='p-4 text-xl text-center font-bold m-auto '>{'MAAS'}-{'प्राचीन और अग्रिम विज्ञान मंत्रालय'}</div>
<div className='text-5xl p-2 text-left font-thin m-auto'>Ministry of Future Sciences</div>
<Ifo data={Ministry1}/>

    <div className='p-4 text-xl text-center font-bold m-auto '>{'MFS'}{'भविष्य विज्ञान मंत्रालय'}</div>

  </div>;
};


const Ministry0={
  Information:"The structure of the Ministry of Ancient and Advance Sciences would aim to promote and advance knowledge and research in various fields of science, including traditional and ancient sciences. Here is a possible structure for such a ministry:",
list:["Minister: The Minister of Ancient and Advance Sciences would be the head of the ministry and responsible for overall strategic planning, policy-making, and resource allocation. The minister would oversee the various departments and initiatives within the ministry and work towards promoting scientific advancements and research.",
"Department of Ancient Sciences: This department would focus on the preservation, study, and promotion of ancient sciences such as Ayurveda, Yoga, Vedic Mathematics, Vastu Shastra, and other traditional knowledge systems. It would support research and development in these areas, facilitate collaborations with experts and institutions, and work towards integrating ancient wisdom with modern scientific approaches.",
"Department of Advance Sciences: This department would focus on cutting-edge scientific disciplines and emerging fields of research. It would support research and development in areas such as biotechnology, nanotechnology, artificial intelligence, space sciences, quantum physics, and other advanced scientific domains. The department would foster collaborations with national and international research organizations, facilitate technology transfer, and promote innovation.",
"Research Institutes: The ministry would establish research institutes dedicated to specific areas of study within ancient and advanced sciences. These institutes would serve as centers of excellence for research, innovation, and knowledge dissemination. They would conduct research, train scientists and scholars, publish findings, and contribute to the overall scientific progress in their respective fields.",
"Science Education and Outreach: This department would focus on science education and outreach programs to promote scientific literacy and awareness among the public. It would develop and implement initiatives to encourage students to pursue careers in science, organize science exhibitions, workshops, and conferences, and foster science communication to bridge the gap between scientists and the general public.",
"Funding and Grants: The ministry would allocate funds and provide grants for scientific research, innovation, and infrastructure development. It would establish transparent processes for project proposals, review, and selection to support deserving research initiatives. The ministry would also explore collaborations with other funding agencies and international organizations to leverage resources and expertise.",
"International Collaborations: The ministry would actively engage in international collaborations and partnerships to promote knowledge exchange, joint research projects, and scientific diplomacy. It would foster collaborations with global scientific institutions, universities, and research organizations to enhance scientific cooperation and stay at the forefront of scientific advancements.",
"Regulatory and Ethical Considerations: The ministry would establish regulatory frameworks and ethical guidelines to ensure the responsible conduct of scientific research and development. It would address issues related to bioethics, intellectual property rights, scientific integrity, and safety protocols.",
"Advisory Council: The ministry would have an advisory council comprising renowned scientists, experts, and scholars from various scientific disciplines. The council would provide guidance, expertise, and recommendations to the ministry on matters related to scientific policies, research priorities, and strategic directions.",],

notes:"The structure of the Ministry of Ancient and Advance Sciences would aim to create a conducive environment for scientific research, innovation, and the integration of ancient wisdom with modern scientific knowledge. It would foster a holistic approach to scientific advancements, recognizing the value of both traditional and advanced sciences in addressing the complex challenges of the modern world."
}


const Ministry1={
Information:"The structure of the Ministry of Future Sciences would be designed to explore and understand emerging technologies, scientific advancements, and their potential impact on society. Here is a possible structure for such a ministry:",

list:["Minister: The Minister of Future Sciences would be the head of the ministry and responsible for formulating policies, setting strategic directions, and overseeing the various departments and initiatives within the ministry. The minister would work towards harnessing future technologies and promoting research in cutting-edge fields.",
"Department of Artificial Intelligence: This department would focus on the development and application of artificial intelligence (AI) technologies. It would conduct research on machine learning, natural language processing, robotics, and AI ethics. The department would collaborate with industry, academia, and research institutions to drive innovation and adoption of AI in various sectors.",
"Department of Biotechnology and Genetic Engineering: This department would explore advancements in biotechnology and genetic engineering. It would support research in areas such as genomics, synthetic biology, gene editing, and bioinformatics. The department would facilitate collaborations with biotech companies, research institutes, and healthcare organizations to harness the potential of biotechnology for various applications.",
"Department of Nanotechnology: This department would focus on nanoscience and nanotechnology, studying materials and devices at the nanoscale. It would support research and development in nanomaterials, nanoelectronics, nanomedicine, and nanosensors. The department would promote collaborations with industry and academia to drive innovation and commercialization of nanotechnology.",
"Department of Space Sciences and Exploration: This department would explore advancements in space sciences and promote space exploration. It would support research in astrophysics, planetary sciences, space technology, and satellite communications. The department would collaborate with space agencies, research institutions, and private companies to advance space exploration and satellite-based technologies.",
"Department of Future Energy: This department would focus on renewable energy technologies, energy storage, and sustainable power generation. It would support research and development in areas such as solar energy, wind energy, hydrogen fuel cells, and advanced battery technologies. The department would collaborate with energy companies, research organizations, and international bodies to drive the transition to clean and sustainable energy sources.",
"Department of Quantum Computing: This department would explore the field of quantum computing and quantum information science. It would support research on quantum algorithms, quantum hardware, and quantum cryptography. The department would foster collaborations with quantum computing companies, universities, and research centers to advance quantum computing technologies.",
"Technology Assessment and Future Studies: This department would analyze the potential societal impact of emerging technologies. It would conduct technology assessments, scenario planning, and foresight studies to understand the implications of future technologies on various sectors. The department would provide policy recommendations and strategic guidance to the ministry and other government agencies.",
"Innovation and Start-up Incubation: This department would support innovation and entrepreneurship in future sciences. It would establish incubation centers, funding programs, and mentorship initiatives to nurture and support technology start-ups. The department would collaborate with venture capital firms, industry associations, and innovation hubs to create a thriving ecosystem for future-focused innovation.",
"International Collaborations and Partnerships: The ministry would actively engage in international collaborations and partnerships to exchange knowledge, expertise, and resources. It would foster collaborations with global research institutions, technology companies, and governments to leverage international expertise and promote scientific cooperation.",
"Regulatory and Ethical Considerations: The ministry would establish regulatory frameworks and ethical guidelines to ensure the responsible development and use of future technologies. It would address issues related to data privacy, ethical implications of AI, biotechnology regulations, and safety protocols in emerging fields.",
"Advisory Council: The ministry would have an advisory council comprising experts, scientists, and industry leaders from diverse fields of future sciences. The council would provide strategic guidance, expertise, and recommendations on policy formulation, research priorities, and technology adoption.",
],
notes:"The structure of the Ministry of Future Sciences would facilitate research, innovation, and collaboration in emerging fields, enabling the government to stay at the forefront of future technologies and shape their responsible and beneficial integration into society."
}