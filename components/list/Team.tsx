import Image from 'next/image';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

export const Team = () => {

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
      name: "",
      type: "",
      designation: "",
      equity: "",
      image: "",
      authorized_by: [""]
    },
    {
      name: "",
      type: "",
      designation: "",
      equity: "",
      image: "",
      authorized_by: [""]
    },
    {
      name: "",
      type: "",
      designation: "",
      equity: "",
      image: "",
      authorized_by: [""]
    }
  ]);
  const [team, setTeam] = useState<any>([]);
  const [contributers, setContributers] = useState<any>([]);

  const [teachers,setTeachers]=useState([
    {
      name:"",
      language:["brahmi",],
      level:0

    }
  ])

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

  //  
  return <div>
    {/* <div>Admins</div> */}
    <div>Admins :Illuminaty:{'bodhaka'}</div>
    <div>Ministry of Advance Sciences{'MAS'}{'आधुनिक विज्ञान मंत्रालय'}</div>
    <div>Ministry of Future Sciences{'MFS'}{'भविष्य विज्ञान मंत्रालय'}</div>

<div>CHIEF</div>
<div className='flex flex-row flex-wrap gap-4 mt-8 justify-around'>{designation.slice(0,5).map((adm: any, index: number) => {
      return <div key={index} className='w-56 h-full bg-white shadow-lg p-2'>
        <div>{Object.keys(adm)[0]}</div>
        {/* <Image
          src={faker.image.avatar()}
          alt="des"
          width={100}
          height={100}
          className='w-24 h-24 rounded-full m-auto' /> */}
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
    He She They<br />
    We Us I
    You üU¨ÆÚ
    ::: 1818 1839 1947
    //\\ 2014 2023 2076
    ::::
    {/* // transaction {creative} */}
  </div>;
};
