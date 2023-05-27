import { useRouter } from 'next/router';

// register
// watch
// play
// audience
// TOD:""
// how when who what 
// 


export const HeaderButtons = (props: any) => {
  const { setSection, section: sec } = props;

  const router = useRouter();
  return <>
  {/* <div className='flex flex-row w-full h-24 sm:block  gap-6'>

    {[
      { emoji: "🚀🔭", label: "Astronomy", icon: "", image: "", link: "/#astronomy", tag: "astronomy" },
      { emoji: "🪐💫", label: "Astrology", icon: "", image: "", link: "/#astrology", tag: "astrology" },
      { emoji: "💫🛍️", label: "Ecommerce", icon: "", image: "", link: "/#ecommerce", tag: "ecommerce" },
      { emoji: "🛠️🔔", label: "Services", icon: "", image: "", link: "", tag: "services" },
      { emoji: "🎮🎲", label: "Games", icon: "", image: "", link: "/#games", tag: "games" },
      { emoji: "🔱☪𓁭", label: "Brahmi Classes", icon: "", image: "", link: "/#brahmi_classes", tag: "brahmi_classes" },
      // {emoji:"🔱🪔⚜☥⚜️☪𓁭",label:"Vedic Classes",icon:"",image:"",link:"",tag:""},
      { emoji: "🔱☪𓁭", label: "Vedic Classes", icon: "", image: "", link: "/#vedic_classes", tag: "vedic_classes" },
      { emoji: "🧿𓁭📿", label: "Boards", icon: "", image: "", link: "", seat_conditions: "", tag: "boards" },
      { emoji: "🌈🏳️‍🌈", label: "Kosha", icon: "", image: "", link: "", seat_conditions: "", tag: "kosha" },
      // {emoji:"🧿𓁭🎬👨‍💼🎦🎞️🏛️🛕🔺♦️🔼",label:"Boards",icon:"",image:"",link:"",seat_conditions:""},
      // {emoji:"🎮🎲",label:"Vedic Programming Classes",icon:"",image:"",link:""},
    ].map((section, index) => {
      return <div key={index}
        onClick={() => {
          // router.push(section.link)
          setSection(section.tag);
        }}
        className={`text-xl cursor-pointer ${sec === section.tag ? "bg-yellow-300 ring-2 ring-white" : "bg-white"} hover:bg-blue-800 hover:text-white font-bold  shadow-lg rounded-lg w-100 h-24 p-4`}>
        <div className='text-3xl m-auto text-center'>{section.emoji}</div>
        <div className='font-thin'>{section.label}</div>
      </div>;
    })}
</div> */}
<div className='flex flex-row overflow-x-scroll w-full gap-2'>
{[
      { emoji: "🚀", label: "Astronomy", icon: "", image: "", link: "/#astronomy", tag: "astronomy" },
      { emoji: "🪐", label: "Astrology", icon: "", image: "", link: "/#astrology", tag: "astrology" },
      { emoji: "🛍️", label: "Ecommerce", icon: "", image: "", link: "/#ecommerce", tag: "ecommerce" },
      { emoji: "🛠️", label: "Services", icon: "", image: "", link: "", tag: "services" },
      { emoji: "🎲", label: "Games", icon: "", image: "", link: "/#games", tag: "games" },
      // {emoji:"🔱🪔⚜☥⚜️☪𓁭",label:"Vedic Classes",icon:"",image:"",link:"",tag:""},
      { emoji: "🔱☪𓁭", label: "Brahmi Classes", icon: "", image: "", link: "/#brahmi_classes", tag: "brahmi_classes" },

      { emoji: "🔱", label: "Vedic Classes", icon: "", image: "", link: "/#vedic_classes", tag: "vedic_classes" },
      { emoji: "🧿", label: "Boards", icon: "", image: "", link: "", seat_conditions: "", tag: "boards" },
      { emoji: "🌈", label: "Kosha", icon: "", image: "", link: "", seat_conditions: "", tag: "kosha" },
      // {emoji:"🧿𓁭🎬👨‍💼🎦🎞️🏛️🛕🔺♦️🔼",label:"Boards",icon:"",image:"",link:"",seat_conditions:""},
      // {emoji:"🎮🎲",label:"Vedic Programming Classes",icon:"",image:"",link:""},
    ].map((section, index) => {
      return <div key={index}
        onClick={() => {
          // router.push(section.link)
          setSection(section.tag);
        }}
        className={`text-xs cursor-pointer ${sec === section.tag ? "bg-yellow-300 ring-2 ring-white" : "bg-white"} hover:bg-blue-800 hover:text-white font-bold  shadow-lg rounded-lg w-100 p-1 `}>
        <div className='text-xl m-auto text-center'>{section.emoji}</div>
        <div className='font-thin'>{section.label}</div>
      </div>;
    })}
  </div>
  </>

};
