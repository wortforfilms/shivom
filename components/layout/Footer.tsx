import { useRouter } from "next/router";

const bm=[
  { label: 'Home', link: "/" },
  { label: 'About Us', link: "/aboutus" },
  { label: 'Concept', link: "/concept" },
  { label: 'Technology', link: "/technology" },
  { label: 'Nakshatra', link: "/nakshatra" },
  { label: 'Dosh', link: "/dosh" },
  { label: 'Catalogue', link: "/catalogue" },
  { label: 'Services', link: "/services" },
  ,

  {
    label: "About us",
    icon: "",
    image: "",
    link: "/#aboutus"
  },
  {
    label: "Terms",
    icon: "",
    image: "",
    link: "/#terms"
  },
  {
    label: "ContactUs",
    icon: "",
    image: "",
    link: "/#contactus"
  }
]

export const Footer = () => {
  const router=useRouter()
  return <div className=' bg-white w-full flex flex-row flex-wrap p-2 cursor-pointer justify-around'>
    {bm.map((fo: any, index) => {
      return <div className='hover:underline hover:font-bold p-2' key={index}
      onClick={()=>{
        router.push(`${fo.link}`)
      }}
      >{fo.label}</div>;
    })}
  </div>;
};
