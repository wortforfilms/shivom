import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image'
import { useRouter } from "next/router";
// import { S3Uri } from "../../constant/core";
import { remove_from_cart_ } from "../../store/cart/action";
// import { AddCartButton } from "../../utils/cart/AddCartButton";
// import { UPIApp } from "../../utils/payment/upi";
import { S3Uri } from "@/constants/containers";
// import { UPIApp } from "@/util/payment/upi";
import { AddCartButton } from "@/util/cart/AddCartButton";

import { motion } from "framer-motion";
import { snake } from "@/util/hkc";
import { UPIApp } from "@/components/Kosh/ShiftShaper";
import { Container } from "@/canvas/Container";
// import { LabelButton } from "@/factory/opening/create/LabelButton";
// import RazorApp from "../../utils/payment/razorpay";

// import { cashfreeSandbox } from 'cashfree-elementjs';

// let cashfree = new cashfreeSandbox.Cashfree(paymentSessionId);

// let testCashfree = new cashfreeSandbox.Cashfree({
//   "ENV": "TEST", 
//   "ClientID": "CLIENTID",
//   "ClientSecret": "CLIENTSECRET"
// });

export const LabelButton = (props:any) => {
  const { label, action, bg, color, cl } = props;
  return <motion.div
    whileHover={{ scale: .95 }}
    whileTap={{ scale: 1.05 }}
    className={`w-auto px-2 shadow-lg ${color?color:"text-white"} ${cl} ${bg?bg:"bg-gray-500"} m-auto cursor-pointer mt-2 mb-2  text-center hover:bg-pink-500 p-1 rounded-lg`}
    onClick={action}

  >{snake(label)}
  </motion.div>;
};


const test_cashfree=async()=>{
  await fetch(`/api/payment/cashfree/auth/otp`).then(res=>res.json()).then(data=>{
    console.log(data)
  }).catch(error=>console.log(error))
}

const test_cashfree_order=async(setOrder:any)=>{
  const order={
    amount:10.50,
    currency:"INR",
    notes:"for the line producer"
  }
  const customer={
    id:"18",
    email:"forfilmcoin@gmail.com",
    phone:"9811720270",
    name:"Hemant"

  }
  const data=JSON.stringify({order,customer})
  await fetch(`/api/payment/cashfree/order/createorder`,{
    method:"POST",
    body:data
  }).then(res=>res.json()).then(data=>{
    console.log(data)
    setOrder(data.data)
  }).catch(error=>console.log(error))
}
const Cart = (props:any) => {
  const { initialReduxState } = props;
  const earth: typeof initialReduxState = useSelector((state) => state);


  const products = earth?.cart?.cartItems;
  const qnums = products.map((i:any) => i.quantity);
  const _amount__q = qnums.reduce((i:any, a:any) => i + a, 0);
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const [deliveryAddressId, setDAI] = useState(null);
  const [openSelector, setOS] = useState(false);
  const [step, setStep] = useState(0);
  const [order,setOrder]=useState<any>(null)





  return (<Container>

    <div className="mx-auto w-full mt-2 min-h-[100vh] h-full bg-white text-gray-800 justify-around">



     
      <div className="text-center text-xl mx-auto mt-2 w-full font-bold">
         {_amount__q} items{" "}in cart
      </div>
      <CartEx
        products={products}
        earth={earth}
        setDeliveryAddress={setDeliveryAddress}
        setOS={setOS}
        deliveryAddressId={deliveryAddressId}
      />

<Device/>

    </div>
  </Container>

  );
};

export default Cart


const CartEx = (props:any) => {
  const { products, earth, deliveryAddressId, setOS } = props;
  const [amount, setAmount] = useState(0);
  // const [open, setOpen] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    let mount = true;
    if (mount && products.length > 1) {
      // reduce to sum
      const nums = products.map((i:any) => i.price * i.quantity);
      const _amount = nums.reduce((i:any, a:any) => i + a, 0);
      setAmount(_amount);
      console.log("cart amount", _amount, products);
    }
    return () => {
      mount = false;
    };
  }, [products]);

  if (products.length < 2) {
    return (
      <div className="text-center w-full mx-auto mt-2">
        Add some products to cart first..
      
        <LabelButton label="Visit Market" 
        action={() => {
          router.push("/market");
        }}
        />
      </div>
    );
  }

  return (
    <Container>

      <div className="flex h-full flex-col overflow-y-scroll bg-white ">
        <div className="flex-1 overflow-y-auto  px-2 sm:px-6">
          <div className="mt-4">
            <div className="">
              <ul  className=" divide-y divide-gray-200">
                {products &&
                  products.slice(1, products.length).map((product:any,index:number) => (
                    <li key={index} className="flex py-2 max-w-xl mx-auto scale-90">
               <PhysicalProductInCartCard product={product} earth={earth}/>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mx-auto py-2 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>{amount}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Taxes(@18% G.S.T.)</p>
            <p>{Math.round(amount * 0.18)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          { 

           amount>0 && <div>

                <UPIApp amount={Math.round(amount * 1.18)}/>
            </div>
   
          }
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{" "}
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => router.push("/market")}
              >
                Continue Shopping<span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
      </Container>

  );
};

const Device=()=>{
  return <div className="p-4 w-56 bg-gray-300 rounded-lg shadow-lg">

Increase your sales<br/>
    Register your product<br/>
    Starts as low as INR.99.00 p.m.<br/>
<UPIApp amount={999}/>
  </div>
}
// tamil pirates// 
// 

const PhysicalProductInCartCard=(props:any)=>{
  const {product, earth}=props
  const dispatch=useDispatch()
  const router=useRouter()
  return <>
         <div className="h-24 w-24  overflow-hidden rounded-md border border-gray-200"
                      
                      onClick={()=>{
                        console.log(product)
                        router.push(`/market/${product &&  product?.product_id}`)
                      }}
                      >
                  {product.pr_type==="market"? <Image
                          src={`${S3Uri}/media/tlp${product.images}`}
                          alt={product.images}
                          
                          width={100}
                          height={100}
                          className="h-full w-full object-cover object-center"
                        />:<Image
                        src={product && product.images && product.images.length>0?product?.images[0]:"/logo-172x172.png"}
                        alt={"product image in cart"}
                        
                        width={100}
                        height={100}
                        className="h-full w-full object-cover object-center"
                      />}
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <div>
                              {product.title}
                              </div>
                              <div>
                                {product.pr_type}
                                </div>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                        </div>
                        <AddCartButton id={product.product_id} title={product.title} price={product.prices} images={product.images} pr_type={product.item_types} earth={earth}/>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Qty {product.quantity}
                          </p>

                          <div className="flex">
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => {
                                dispatch(remove_from_cart_(product.product_id));
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
  </>
}


const RentalBookingCartCard=(props:any)=>{
  return <div></div>
}

const SubscriptionPurchaseCartCard=(props:any)=>{
  return <div></div>
}

const DigitalProductCartCard=(props:any)=>{
  return <div></div>
}

const ServiceBookingCartCard=(props:any)=>{
  return <div></div>
}