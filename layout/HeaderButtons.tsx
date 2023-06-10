import { useRouter } from 'next/router';


export const HeaderButtons = (props: any) => {
  const { setSection, section: sec } = props;

  const router = useRouter();
  return <>

<div className='flex flex-row  overflow-x-scroll w-full gap-2'>
{[
      { emoji: "🚀", label: "Astronomy", icon: "", image: "", link: "/#astronomy", tag: "astronomy" },
      { emoji: "🪐", label: "Astrology", icon: "", image: "", link: "/#astrology", tag: "astrology" },
      { emoji: "🛍️", label: "Ecommerce", icon: "", image: "", link: "/#ecommerce", tag: "ecommerce" },
      { emoji: "🛠️", label: "Services", icon: "", image: "", link: "", tag: "services" },
      { emoji: "🎲", label: "Games", icon: "", image: "", link: "/#games", tag: "games" },
      { emoji: "☪𓁭", label: "Brahmi", icon: "", image: "", link: "/#brahmi_classes", tag: "brahmi_classes" },
      { emoji: "🔱", label: "Vedic", icon: "", image: "", link: "/#vedic_classes", tag: "vedic_classes" },
      { emoji: "🧿", label: "Boards", icon: "", image: "", link: "", seat_conditions: "", tag: "boards" },
      { emoji: "🌈", label: "Kosha", icon: "", image: "", link: "", seat_conditions: "", tag: "kosha" },
    ].map((section, index) => {
      return <div key={index}
        onClick={() => {
          // router.push(`?q=${section.tag}`)
          setSection(section.tag);
        }}
        className={`text-xs cursor-pointer ${sec === section.tag ? "bg-yellow-300 ring-2 ring-white" : "bg-white"}  hover:bg-blue-800 hover:text-white font-bold  shadow-lg rounded-lg w-100 p-1 `}>
        <div className={`text-xl ${section.label==='Vedic'  && "-rotate-90"} m-auto text-center`}>{section.emoji}</div>
        <div className='font-bold'>{section.label}</div>
      </div>;
    })}
  </div>
  </>

};
