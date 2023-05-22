import { useEffect, useState } from "react";
import Image from "next/image"
import { ShiftShaper } from "./ShiftShaper";
import { Cart } from "./Cart";
import { ManikYantra } from "./ManikYantra";
import { SwarnGranthi } from "./SwarnGranthi";
import { BsBack } from "react-icons/bs";
import { FaBackward } from "react-icons/fa";
import { supabase } from "@/lib/Store";
import { useSelect } from "@react-three/drei";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";


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

// चैट gpt ७८६ ::: । ।। ॰॰॰ विद्या 
// स्तर स्टार 
// स्टोरी 
// 

// css:{}
// ब्लाइंड:{}
// गोल्ड:स्वर्ण 
//  
  return <div className="flex flex-row p-4 bg-white mt-8 flex-wrap gap-2">
    
   {step!=="" && <div onClick={()=>{
      setStep("")
    }}><FaBackward/></div>}
    {step!=="shift" && <div className="w-1/2">

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

  </div>


};


// local <> cloud
// user tokens
// activity
// clock
// []-{}
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