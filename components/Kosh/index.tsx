import { supabase } from "@/lib/Store";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaBackward } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ShiftShaper } from "./ShiftShaper";
import { SwarnGranthi } from "./SwarnGranthi";


export const get_user_kosh=async(userId:any)=>{
  const {data,error}=await supabase.from("").select('*').eq('swami', userId)
  return {data,error}
}



export const Kosh = (props:any) => {

  const {initialReduxState}=props
  const  earth: typeof initialReduxState=useSelector(state=>state)
  const [recharges, setRecharges] = useState<any>([
    { count: 1, amount: 10,   name:"iron", image:"",icon:""},
    { count: 10, amount: 100,   name:"broze", image:"",icon:""},
    { count: 50, amount: 500,  name:"silver", image:"",icon:""},
    { count: 100, amount: 1000, name:"gold", image:"",icon:"" }
  ])

  type Auth ={
    authenticated:boolean
  }
// सिद्धि biddya वीर्य {} {}
// माता धरा 
// and AkAra
// shiv paarvatI शिव पार्वती 
// हनुमान :: {""}
  // const ['','जय हनुमान ज्ञान गुण सागर ']=उसेस्टते()
  const [kosh_kotwaala,setKoshKotwAla]=useState<Auth>()

  const [koshy, setKosh] = useState<any>([{ total: "0", last_use: "9", last_deposite: "20" }])
  
  const [orders, setOrders] = useState<any>([
    { amount: "5", paid_to: "palmistry", use: "session" },
    { amount: "50", paid_to: "Tshirt", use: "purchase" },
    { amount: "5", paid_to: "tarot", use: "session" },

  ])

  const [cart,setCart]=useState<any>([
    {item_id:"2",item_name:"Lakshmi",item_type:"Digital",quantity:20,price:99},
    {item_id:"1",item_name:"Ganesh",item_type:"Digital",quantity:20,price:9}

  
  ])

  const [transact, setTransact] = useState({ amount: "", from: "", to: "", for: "" })
  const [model,setModel]=useState()
  const [step,setStep]=useState<string>('')
  const [rechargeAmount,setRechargeAmount]=useState<number>(0)
  const [your,setYour]=useState('all')
  // const [idea,]=useState()
const router=useRouter()
  useEffect(()=>{
    if(earth?.auth?.authenticated){
      return 
    } else {
      router.push('/auth/login')
    }
  },[])


  return <div className="flex flex-row p-4 bg-white mt-4 flex-wrap gap-2">
    
   {step!=="" && <div onClick={()=>{
      setStep("")
    }}><FaBackward/></div>}
      <div className="flex flex-row gap-4 m-auto text-center">

<div>Yantra: <h3>
  20
  </h3>
  </div>
<div>Mantra: <h3>
  60
  </h3>
  </div>

      </div>
    {step!=="shift" && <div className="w-1/2 m-auto">
    
       <Image
src={"/img/om-71gQJPwz8gL._UL1500_2000x.png"}
alt="coins"
width={100}
height={100}
className='m-auto w-72   h-auto'

/>
</div>}


  {/* {step==="cart" && <Cart cart={cart} kosh={kosh} setStep={setStep}/>} */}
   {step==="" && <SwarnGranthi setStep={setStep} setAmount={setRechargeAmount} recharges={recharges} kosh={koshy} />}

  {step==="shift" && <ShiftShaper amount={rechargeAmount}/>}

  {/* {step==="manik" &&  <ManikYantra/>} */}

  <video muted autoPlay controls={false} loop
            
            className="  w-full w-full sm:w-full  p-0 sm:p-2 mt-8
              min-w-96 min-h-full max-w-none mb-8"
            >
                
              <source src={"/mp4/dixiom.mp4"} type="video/mp4"
            //   autoplay={true}
            
              
              
              />
              Your browser does not support the video tag.
            </video>
<Dixi/>
  </div>


};


const Dixi=()=>{
  const di={
    Introduction:"Dixom Tool is an innovative feature in the Shivom platform that allows users to seamlessly manage their financial transactions by leveraging the power of Yantras. It provides a unique and holistic approach to monetary transactions by integrating traditional practices with modern technology. Let's explore how the Dixom Tool works and how users can buy or sell Yantras using money.",
matter:[
{
  q:"Concept of Yantras",
  d:["In ancient Indian traditions, Yantras are geometric diagrams or symbols that are believed to possess mystical and spiritual properties. They are considered powerful tools for focusing energy and manifesting intentions. Yantras are often associated with specific deities, energies, or intentions and are used for various purposes, including spiritual practices, healing, and prosperity."]
  },
{

  q:"Integration of Yantras in the Dixom Tool",
  d:["In the Dixom Tool of the Shivom platform, Yantras are integrated as digital objects that represent digital assets or monetary value. Users can acquire specific Yantras by purchasing them within the platform. Each Yantra is associated with a unique identifier that links it to the user's digital account."]
},


 {q:"Purchasing Yantras  with Money:",
d:["To deposit money using the Dixom Tool, users can acquire a Yantra through the platform. The Yantra serves as a representation of the deposited funds. Users can activate the Yantra by scanning it or associating it with their digital account. The value of the Yantra is then reflected in their kosh balance. The Yantra becomes a digital representation of the deposited money, connecting the digital and physical realms."]
},

 {q:"Withdrawing Money with Yantras:",
d:["When users wish to sale Yantra from their account, they can initiate the process through the Shivom platform. The platform verifies the user's request and converts the desired Yantra into a corresponding ammount. The user on request can then receive the money digitally in attached account, which represents the Yantra. This allows for a tangible and symbolic representation of the converted Yantra."]
},

 {q:"Benefits and Significance:",
d:["The integration of Yantras in the Dixom Tool provides several benefits and adds a unique dimension to financial transactions:",
"Blending Tradition and Technology: By incorporating the power of Yantras, Shivom combines ancient wisdom with modern financial technology, creating a harmonious synergy between the two.",
"Symbolic Representation: The digital Yantras act as tangible representations of assets, fostering a deeper connection and understanding of one's financial transactions.",
"Energy and Intention: Yantras are believed to carry specific energies and intentions. By utilizing them in financial transactions, users can infuse their money management with positive and focused energy.",

]}
],
Remark:"It's important to note that the specific workings and details of the Dixom Tool in Shivom may vary, as it is a hypothetical scenario based on the context provided. The description aims to illustrate a creative integration of ancient practices and modern financial tools to enhance the user experience and provide a unique approach to managing monetary transactions."
}

  
  return <div>
<h1>{di.Introduction}</h1>
<div>
  {
    di.matter.map((ma,index)=>{
      return <div key={index}>
        <div className="font-bold p-2 text-sm">{ma.q}</div>
        {ma.d.map((li,index)=>{
          return <div  key={index} className="p-2">{li}</div>
        })}
        </div>
    })
  }
</div>
<h3>{di.Remark}</h3>

  </div>
}

// local <> cloud
// user tokens
// activity
// clock
// []-{}
// 

// calender eid V 5 ∞%ﬁ {5 ﬁ ∞%} kesh kachChA {} kaDA {∂Dd}{øoo} {aåA/* A */}{æÆ'""}/{string_in_action}
// 

// eye in Jj jJAn {∆ÔJ∆j}
// {}-{}-{}
// {}-{}-{}
// “‘{}[]”’
// ”’[] observe {}
// _—_||_—_
// »»«« time craft 
// ºººº 
// ˘˘≥≥
// ª·9()
//  
// channel user group
// @//user_id,contact_id,idom
// 

// keygen: ()={}
// faker_random : ()=>{}
// random_fakeerr : sai baba
// vidyA bhramana 
// bharamaNa
// society for society
//  {"which society does you belive in"}
// {"lie"}
// {"et","ter"}
// {"co":"pu"}
// {"comp":"u":"ter"}
//  


// https://roamingclicks.com
// /view/
// ivWFhFIFsULptK3gpd5IKBXMlbjqJVtZvWr4BddtreteRA?c=33347&pid=4826
// &site=352272.501559_2482b17d-3d
// a8-45
// dd-b028-f8c83c
// aaa6
// d2

// create typescript based detailed order invoice payment system.

// 1. Create a Database: 
// Create a database to store customer information and orders. This should include customer name, address, email, phone number, and order information such as item purchased, quantity, and payment method.

// 2. Design a Form: 
// Design a form for customers to submit their order information. This should include fields for customer name, address, email, phone number, items purchased, quantity, and payment method.

// 3. Create a Payment System: 
// Create a payment system to process customer payments. This should include a payment gateway to securely process credit cards and other payment methods, as well as a way to store payment information for future orders.

// 4. Generate an Invoice: 
// Generate an invoice for each customer order. This should include all relevant order information, such as item purchased, quantity, and payment method.

// 5. Send Confirmation Emails: 
// Send a confirmation email to the customer after their order has been processed. This should include an invoice and a link to view the order status.

// 6. Track Order Status: 
// Create a way to track the status of each customer order. This should include order processing, payment processing, shipment status, and delivery status.

// 7. Create an Interface: 
// Create an interface for customers to view their order status. This should include a way to view the order details and track the progress of the order.

// thiland
// {}-{}
// {}-{}-{}
// {}-{}-{}-{}-{}
// {sale}-{subscription}-{venders:sellers}
// {buyer} :: {seller}
// {slice}{catalogue}{buyer}{seller}{banker}
// {product}{seller_subscription::""}
// {product:"language"}
// {work:"documentation"}
// {software:""}
// {process:""}
// bhAshA samaya gyAna
// language time knowledge prrogramming
// {"money"}{"subscription"}{""}
// {"money"}{"sale"}{"consumable"}
// {"dosh nivaraNa patra"}
// {"fabric"}
// {"sale"}
// {"write  ${100} times"}
// {"chandrma"}{k}{shadow}{क़ क } मून सोम लिक्विड मर्क्यरी मर करी बुद्ध ¨Í˚  shadow 
// राहु केतु हू RAW 
// tu tu Tu ::: †
// लाइट एंड साउंड शो 
// 
// Some recent entries:
// मगध	m.	magadha	Bihar[Geog.]	
// विपत्र-वणिक्	m.	vipatra-vaNik	billbroker[Com.]	
// मन्दसमीर	m.	mandasamIra	lightbreeze[Beaufort scale 2]	
// हीनता-लेखा	f.	hInatA-lekhA	deficiencyaccount[Com.]	
// विपत्र-पुस्त	n.	vipatra-pusta	billbook[Com.]	


// write typescript based code for detailed order invoice payment system.

// Typescript interface that defines the structure of the Order Invoice
interface OrderInvoice {
  orderId: number;
  customerName: string;
  items: OrderItem[];
  totalPrice: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
}

// Typescript interface that defines the structure of the OrderItem
interface OrderItem {
  itemId: number;
  quantity: number;
  itemPrice: number;
}

// Typescript enum that defines the payment methods
enum PaymentMethod {
  Cash = 'CASH',
  CreditCard = 'CREDIT_CARD',
  BankTransfer = 'BANK_TRANSFER'
}


// Typescript enum that defines the payment statuses
enum PaymentStatus {
  Pending = 'PENDING',
  Paid = 'PAID',
  Cancelled = 'CANCELLED'
}


// Function that processes the payment for a given order invoice 
function processPayment(orderInvoice: OrderInvoice): void {
  const paymentMethod = orderInvoice.paymentMethod;
  const totalPrice = orderInvoice.totalPrice;

  switch (paymentMethod) {
    case PaymentMethod.Cash:
      // process cash payment
      console.log(`Processing cash payment of $${totalPrice}`);
      break;
    case PaymentMethod.CreditCard:
      // process credit card payment
      console.log(`Processing credit card payment of $${totalPrice}`);
      break;
    case PaymentMethod.BankTransfer:
      // process bank transfer payment
      console.log(`Processing bank transfer payment of $${totalPrice}`);
      break;
  }
}




// sh pu

// flow er
// flow sound 
// r->l
// => 

// register
// login 
// board
// products
// games
// 