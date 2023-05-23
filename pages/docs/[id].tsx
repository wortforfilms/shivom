import { ProductList } from "@/components/catalogue/ProductList"
import { AboutUs } from "@/components/landing/AboutUs"
import { useRouter } from "next/router"
import Support from "../supportus"
import Shipping from "./shipping"
import Terms from "./terms"
import ContactUs from "./contactUs"
import Services from "../services"


const Doc=()=>{
const router=useRouter()
  const {id}=router.query
  return <div>
    <div className="h-12"></div>
    {id==="aboutus" && <AboutUs/>}
    {id==="catalogue" && <ProductList/>}
    {id==="services" && <Services/>}
    {id==="support" && <Support/>}
    {id==="terms" && <Terms/>}
    {id==="shipping" && <Shipping/>}
    {id==="contactus" && <ContactUs/>}
    {id==="upgrade" && <Upgrade/>}
  </div>
}

export default Doc

const Upgrade=()=>{
  return <div className="h-[90vh]">
    <h1 className="p-2">
      Upgrade Options
      </h1>
      <div className="flex flex-row gap-4 p-2 w-[90%] m-auto rounded-lg shadow-lg max-w-96 bg-white  ">
        <input type="email" placeholder="Enter email to get newsletter"className="bg-gray-300 rounded-lg p-1 w-full"/>
<button className="bg-pink-500 p-2 rounded-lg text-white m-auto shadow-lg hover:bg-blue-600  cursor-pointer">JOIN</button>
      </div>
  </div>
}
