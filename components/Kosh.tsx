import { useState } from "react";
import QRCode from "react-qr-code";

export const Kosh = () => {

  const [recharges, setRecharges] = useState<any>([
    { count: 10, amount: 200, discount: 5 },
    { count: 50, amount: 1000, },
    { count: 100, amount: 2000 }
  ])
  const [kosh, setKosh] = useState<any>([{ total: "499", last_use: "9", last_deposite: "20" }])
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

  return <div className="flex flex-row flex-wrap gap-2">
      
    <div className='p-2 w-96 bg-white shadow-lg'>
      <h1 className='text-3xl p-2 mb-12 font-extrabold'>
        ShivOm Cart
      </h1>
   
    
      <div className='p-2 font-bold mt-4'>Items:</div>
      <div className='p-1 flex flex-col gap-2'>
        {cart.map((item: any, index: number) => {
          return <div key={index} className='bg-gray-100 p-2 text-xs flex  flex-row justify-between'>
            <div>
              {index + 1}. 
              </div>
            <div>
              {item.item_name} 
              </div>
            <div>
              {item.price} 
              </div>
            <div>
              {item.quantity}
              </div>
              <div>
              {item.quantity * item.price}
              </div>
            
            </div>;
        })}
      </div>
      <div className="mt-4 mb-4 ">
        {kosh.map((det: any, index: number) => {
          return <div key={index} className='p-4 flex flex-col gap-2 text-right text-xs font-bold rounded-lg text-sky-700 '>
            <div>TOTAL: {det.total}</div>
            <div>Taxes: {det.last_use}</div>
            <div>Grand Total: {det.last_deposite}</div>
          </div>;
        })}
      </div>
    </div>
    <div className='p-2 bg-white shadow-lg'>
      <h1 className='text-3xl p-2 mb-12 font-extrabold'>
        Refill your {"OMBox"}
      </h1>
      <div className='flex flex-row gap-4'>

        {recharges.map((sr: any, index: number) => {
          return <div key={index} className='bg-gray-300 rounded-lg p-2   '>
            <div className='text-sm font-bold p-2 text-center'>Add {sr.count}</div>

            <div className='text-xs '>Pay {"INR"} {sr.amount}</div>
          </div>;
        })}
      </div>
      <div className="mt-4 mb-4 ">
        {kosh.map((det: any, index: number) => {
          return <div key={index} className='p-4 flex flex-col gap-2 text-xs bg-sky-500 rounded-lg text-white '>
            <div>TOTAL: {det.total}</div>
            <div>LAST USED: {det.last_use}</div>
            <div>LAST REFIL: {det.last_deposite}</div>
          </div>;
        })}
      </div>
      <div className='p-2 font-bold mt-4'>Orders:</div>
      <div className='p-1 flex flex-col gap-2'>
        {orders.map((his: any, index: number) => {
          return <div key={index} className='bg-gray-100 p-2 text-xs'>{index + 1}. {his.amount} lakshmi user for {his.use} of {his.paid_to}</div>;
        })}
      </div>
    </div>
    <div className="w-80 h-auto  bg-white p-2">
      <QRCode value="/hkd" className="m-auto" />
      <div className="text-3xl m-auto text-center p-4 font-bold upperrcase">Scan to pay</div>
    </div>
    <div className="w-80 h-auto  bg-white p-2">
      {
        [{data:"",freinds:"",chats:"",kosh:""}].map((u,index)=>{
return <div>{u.data}{u.chats}{u.freinds}{u.kosh}</div>
        })
      }
    </div>

  </div>
};


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