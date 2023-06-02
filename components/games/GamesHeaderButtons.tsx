import { useRouter } from 'next/router';


export const GamesHeaderButtons = (props: any) => {
  const { setSection, section: sec, selected_game } = props;

  const router = useRouter();
  return <>

<div className='flex flex-row overflow-x-scroll w-full gap-2'>

{[
         { emoji: "🎮", label: "games", icon: "", image: "", link: "/#ghome", tag: "ghome" },
    ].map((section, index) => {
      return <div key={index}>
       { selected_game!=='' && <div 
        onClick={() => {
          // router.push(section.link)
          setSection(section.tag);
        }}
        className={`text-xs cursor-pointer ${sec === section.tag ? "bg-yellow-300 ring-2 ring-white" : "bg-white"} hover:bg-blue-800 hover:text-white font-bold  shadow-lg rounded-lg w-100 p-4 `}>

        <div className='text-xl m-auto text-center'>{section.emoji}</div>
        <div className='font-thin'>{section.label}</div>
      </div>}
      
      </div>
    })}

{selected_game && [

         { emoji: "💫", label: "list", icon: "", image: "", link: "/#list", tag: "list" },
         { emoji: "🎲", label: "actives", icon: "", image: "", link: "/#active", tag: "active" },
         { emoji: "🧿", label: "await", icon: "", image: "", link: "/#await", tag: "await" },
         { emoji: "🔔", label: "winners", icon: "", image: "", link: "/#winners", tag: "winners" },

    // {emoji:"🧿𓁭🎬👨‍💼🎦🎞️🏛️🛕🔺♦️🔼",label:"Boards",icon:"",image:"",link:"",seat_conditions:""},
      // {emoji:"🎮🎲",label:"Vedic Programming Classes",icon:"",image:"",link:""},
    ].map((section, index) => {
      return <div key={index}>
       { selected_game!=='' && <div 
        onClick={() => {
          // router.push(section.link)
          setSection(section.tag);
        }}
        className={`text-xs cursor-pointer ${sec === section.tag ? "bg-yellow-300 ring-2 ring-white" : "bg-white"} hover:bg-blue-800 hover:text-white font-bold  shadow-lg rounded-lg w-100 p-4 `}>

        <div className='text-xl m-auto text-center'>{section.emoji}</div>
        <div className='font-thin'>{section.label}</div>
      </div>}
      
      </div>
    })}

{[

{ emoji: "🛠️", label: "help", icon: "", image: "", link: "/#help", tag: "help" },
].map((section, index) => {
return <div key={index}>
{ selected_game!=='' && <div 
onClick={() => {
 // router.push(section.link)
 setSection(section.tag);
}}
className={`text-xs cursor-pointer ${sec === section.tag ? "bg-yellow-300 ring-2 ring-white" : "bg-white"} hover:bg-blue-800 hover:text-white font-bold  shadow-lg rounded-lg w-100 p-4 `}>

<div className='text-xl m-auto text-center'>{section.emoji}</div>
<div className='font-thin'>{section.label}</div>
</div>}

</div>
})}
  </div>
  </>

};




export const SelectedGamesHeaderButtons = (props: any) => {
  const { setSection, section: sec, selected_game } = props;

  const router = useRouter();
  return <>

<div className='flex flex-row overflow-x-scroll w-full gap-2'>

{[
         { emoji: "🎮", label: "games", icon: "", image: "", link: "/#ghome", tag: "ghome" },
    ].map((section, index) => {
      return <div key={index}>
       { selected_game!=='' && <div 
        onClick={() => {
          // router.push(section.link)
          setSection(section.tag);
        }}
        className={`text-xs cursor-pointer ${sec === section.tag ? "bg-yellow-300 ring-2 ring-white" : "bg-white"} hover:bg-blue-800 hover:text-white font-bold  shadow-lg rounded-lg w-100 p-4 `}>

        <div className='text-xl m-auto text-center'>{section.emoji}</div>
        <div className='font-thin'>{section.label}</div>
      </div>}
      
      </div>
    })}

{selected_game && [

         { emoji: "💫", label: "list", icon: "", image: "", link: "/#list", tag: "list" },

         { emoji: "🔔", label: "winners", icon: "", image: "", link: "/#winners", tag: "winners" },

    // {emoji:"🧿𓁭🎬👨‍💼🎦🎞️🏛️🛕🔺♦️🔼",label:"Boards",icon:"",image:"",link:"",seat_conditions:""},
      // {emoji:"🎮🎲",label:"Vedic Programming Classes",icon:"",image:"",link:""},
    ].map((section, index) => {
      return <div key={index}>
       { selected_game!=='' && <div 
        onClick={() => {
          // router.push(section.link)
          setSection(section.tag);
        }}
        className={`text-xs cursor-pointer ${sec === section.tag ? "bg-yellow-300 ring-2 ring-white" : "bg-white"} hover:bg-blue-800 hover:text-white font-bold  shadow-lg rounded-lg w-100 p-4 `}>

        <div className='text-xl m-auto text-center'>{section.emoji}</div>
        <div className='font-thin'>{section.label}</div>
      </div>}
      
      </div>
    })}

{[

{ emoji: "🛠️", label: "help", icon: "", image: "", link: "/#help", tag: "help" },
// {emoji:"🧿𓁭🎬👨‍💼🎦🎞️🏛️🛕🔺♦️🔼",label:"Boards",icon:"",image:"",link:"",seat_conditions:""},
// {emoji:"🎮🎲",label:"Vedic Programming Classes",icon:"",image:"",link:""},
].map((section, index) => {
return <div key={index}>
{ selected_game!=='' && <div 
onClick={() => {
 // router.push(section.link)
 setSection(section.tag);
}}
className={`text-xs cursor-pointer ${sec === section.tag ? "bg-yellow-300 ring-2 ring-white" : "bg-white"} hover:bg-blue-800 hover:text-white font-bold  shadow-lg rounded-lg w-100 p-4 `}>

<div className='text-xl m-auto text-center'>{section.emoji}</div>
<div className='font-thin'>{section.label}</div>
</div>}

</div>
})}
  </div>
  </>

};