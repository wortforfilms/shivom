// import { Footer } from "../../components/visual/footer"

// import { HeaderCard } from "@/display/card/HeaderCard"



export const SP = [
  { q:"Topic",a:["SHIPPING & DELIVERY POLICY"]},
 
 {q:"Last updated ",a:["November 4, 2022"]},
 
 {q:"Instructions",
 a:["This Shipping & Delivery Policy is part of our https/shivom.thelineproducer.com/legal/terms (Terms) and should be therefore read alongside our main Terms: shivom.thelineproducer.com/legal/contactUs",
 
 "Please carefully review our Shipping & Delivery Policy when purchasing our products. This policy will apply to any order you place with us.",]
 },
 
 
 {q:"WHAT ARE MY SHIPPING & DELIVERY OPTIONS?",
 
 a:["In-Store Pickup",
 
 "In-store and curbside pickup is available for all purchases. Pickups are available Monday to Friday 10:AM to 5 P.M..",
 
 "We offer various shipping options. In some cases a third-party supplier may be managing our inventory and will be responsible for shipping your products. Free Shipping",
 
 "We offer free shipping on orders over INR. 1999.",
 
 "Expedited Shipping Fees",
 
 "We also offer expedited shipping at the following rates:",
 
 "Standard: 7-8 Business days",
 
 "500 gm INR:90.00",
 
 "If you select an expedited shipping option, we will follow up after you have placed the order with any additional shipping information. All times and dates given for delivery of the products are given in good faith but are estimates only.",
 
 "For EU and UK consumers: This does not affect your statutory rights. Unless specifically noted, estimated delivery times reflect the earliest available delivery, and deliveries will be made within 30 days after the day we accept your order. For more information please refer to our Terms.",
 ]},
 {q:"WHAT'S THE TIMLINE FOR DELIVERY?",
 
 a:[
   "Minimum delivery time for within India",
   "Express: 2-3 Business days",
 
 "Standard: 7-8 Business days within India",
 "In case of certain areas delivery time goes to 15 days after that if recieval is not initiated refund process initiates.",
 "International:  15-30 Days. Depending on various countries and clearences delivery can take upto 45 days in some countries.",
 "If you select an expedited shipping option, we will follow up after you have placed the order with any additional shipping information. All times and dates given for delivery of the products are given in good faith but are estimates only.",
 
 "For EU and UK consumers: This does not affect your statutory rights. Unless specifically noted, estimated delivery times reflect the earliest available delivery, and deliveries will be made within 30 days after the day we accept your order. For more information please refer to our Terms.",
 ]},
 
 {q:"DO YOU DELIVER INTERNATIONALLY?",
 
 a:["We offer worldwide shipping. Free shipping is not valid on international orders.",
 
 "Please note, we may be subject to various rules and restrictions in relation to some international deliveries and you may be subject to additional taxes and duties over which we have no control. If such cases apply, you are responsible for complying with the laws applicable to the country where you Iive and will be responsible for any such additional costs or taxes."]
 },
 {q:"WHAT HAPPENS IF MY ORDER IS DELAYED?",
 
 a:["If delivery is delayed for any reason we will let you know as soon as possible and wi|| advise you of a revised estimated date for delivery. For EU and UK consumers: This does not affect your statutory rights. For more information please refer to our Terms.",]
 },
 {q:"QUESTIONS ABOUT RETURNS?",
 
 a:["If you have questions about returns, please review our Return Policy: https/shivom.thelineproducer.com/legal/refund."]},
 
 {q:"HOW CAN YOU CONTACT US ABOUT THIS POLICY?",
 
 a:["If you have any further questions or comments, you may contact us by:",
 
 "- Phone (Toll free): +91-98111720270",
 ". Email: support@thelineproducer.com",
 
 ". Online contact form: https://shivom.thelineproducer.com/docs/contactUs"]}
 ] 
 
 
 const Shipping = ()=>{
   return <div className="p-4 mt-2 mb-24 max-w-3xl bg-slate-200 text-gray-600 mx-auto">
    <div className="h-12"></div>
     {
       SP.map((set, index)=>{
         return <div key={index} className="mt-2 mb-2 bg-white p-1">
          <div className="2xl font-bold"
          > {set.q}</div>
           {set.a.map((ans, ind)=>{
             return<p key={ind} className="text-xs">{ans}</p>
           })}
           </div>
       })
     }
   </div>
 }
 
 export default Shipping