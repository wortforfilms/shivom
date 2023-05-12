import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GrPlayFill } from "react-icons/gr";
import { FaCartPlus } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  add_quantity,
  add_to_cart,
  remove_quantity,
} from "../../store/cart/action";
import { BiUpArrowAlt } from "react-icons/bi";
// import { IconButton } from "@/display/action/button/IconButton";
import { FcRemoveImage } from "react-icons/fc";
import { MdAddCircle, MdRemoveCircle } from "react-icons/md";
import { IconButton } from "@/action/button/IconButton";

export const AddCartButton = (props: any) => {
  const { id, title, price, images, pr_type, earth } = props;
  const [inCart, setInCart] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [cartI, setCI] = useState<any>({});
  const dispatch = useDispatch();

  useEffect(() => {
    let mount = true;

    if (mount) {
      setCI(
        earth.auth &&
          earth?.cart?.cartItems.filter((i: any) => i.product_id === id)
      );
    }

    return () => {
      mount = false;
    };
  }, [earth, id]);

  useEffect(() => {
    let mount = true;
    if (mount && earth?.auth?.authenticated) {
      // dispatchEvent()
      const actives = earth?.cart?.cartItems.map((i: any) => i.product_id);
      // console.log(
      //   earth?.cart,'----> whats in cart', actives, cartI
      // )
      if (
        earth &&
        earth?.cart &&
        earth?.cart?.cartItems &&
        actives.includes(id)
      ) {
        // setCI(earth?.cart?.cartItems.filter((i:any)=>i.product_id===id));
        if (cartI[0]?.quantity > 0) {
          setInCart(true);
        }
        // console.log(
        //   earth?.cart?.cartItems,
        //   "----> whats in  after inc cart",
        //   cartI
        // );
        setQuantity(cartI && cartI[0] && cartI[0]?.quantity);
      }

      // id: any, title: string, price: any, images: any, pr_type: any
    }

    return () => {
      mount = false;
    };
  }, [earth, id, cartI]);

  const AddButton = () => {
    return (
      <div
        className="bg-gray-600 flex flex-row justify-around text-white  p-2 text-xl"
  
      >
        <div>
          {price > 0 ? (
            <IconButton icon={<FaCartPlus className="text-3xl" />}/>
          ) : (
            <IconButton icon={<BiUpArrowAlt className="text-3xl animate-bounce" />}/>
          )}
        </div>
        <div>
          {price > 0 ? <div
                onClick={() => {
                  // setInCart(true)
                  if(price > 0 ){
        
                    setQuantity(quantity + 1);
                    dispatch(add_to_cart(id, title, price, images, pr_type));
                  } 
                }}
          >Add to cart <span className="rounded-lg bg-gray-500 p-1"> ₹ {parseInt(price)}</span></div> : <div onClick={()=>{
   
              alert("Select a variety first")
           
          }}>Select varient</div>}
        </div>
      </div>
    );
  };

  const QuantitySwitch = () => {
    return (
      <div className="flex flex-row bg-white  ">
        <div className="flex flex-row gap-4 mx-auto text-xl font-bold justify-around mt-2">
          {/* <div
          >
            <IconButton icon={<IoIosArrowBack className="font-bold" />} 
            action={() => {
              if (quantity === 1) {
                setInCart(false);
                setQuantity(quantity - 1);
                dispatch(remove_quantity(id));
              } else {
                setQuantity(quantity - 1);
                dispatch(remove_quantity(id));
              }
            }}
            />
          </div> */}
        
            <IconButton icon={<MdRemoveCircle/>} action={() => {
              if (quantity === 1) {
                setInCart(false);
                setQuantity(quantity - 1);
                dispatch(remove_quantity(id));
              } else {
                setQuantity(quantity - 1);
                dispatch(remove_quantity(id));
              }
            }}/>

          <div className="mt-2">{quantity}</div>
      
            <IconButton icon={<MdAddCircle/>} action={() => {
              setQuantity(quantity + 1);
              dispatch(add_quantity(id));
            }}/>

          {/* <div

          >
           <IconButton icon={<IoIosArrowForward className="rotate-0" />} action={() => {
              setQuantity(quantity + 1);
              dispatch(add_quantity(id));
            }}/>
          </div> */}
        </div>
        <div className="p-2 mt-1  text-xs">
          Amount: {cartI.price && quantity * cartI.price}
        </div>
      </div>
    );
  };

  return (
    <div>{inCart && quantity > 0 ? <QuantitySwitch /> : <AddButton />}</div>
  );
};

export const AddCartButtonAlpha = (props: any) => {
  const { item, initialReduxState } = props;
  const earth: typeof initialReduxState = useSelector((state) => state);
  const { id, title, images, pr_type, data, variance } = item;

  const _d = variance && variance.length>0 && variance[0]

  const price = JSON.parse(_d).price;
  const [inCart, setInCart] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [cartI, setCI] = useState<any>({});
  const dispatch = useDispatch();

  useEffect(() => {
    let mount = true;
    // console.log(item, "---> item in  cart");
    if (mount) {
      setCI(
        earth.auth &&
          earth?.cart?.cartItems.filter((i: any) => i.product_id === id)
      );
    }

    return () => {
      mount = false;
      setCI([]);
    };
  }, [earth, id, item]);

  useEffect(() => {
    let mount = true;
    if (mount && earth?.auth?.authenticated) {
      // dispatchEvent()
      const actives = earth?.cart?.cartItems.map((i: any) => i.product_id);

      if (
        earth &&
        earth?.cart &&
        earth?.cart?.cartItems &&
        actives.includes(id)
      ) {

        if (cartI[0]?.quantity > 0) {
          setInCart(true);
        }
   
        setQuantity(cartI && cartI[0] && cartI[0]?.quantity);
      }

      // id: any, title: string, price: any, images: any, pr_type: any
    }

    return () => {
      mount = false;
    };
  }, [earth, id, cartI]);

  const AddButton = () => {
    return (
      <div
        className="bg-gray-600 flex flex-row justify-around text-white w-full text-center p-2 text-xl"
        onClick={() => {
          // setInCart(true)
          setQuantity(quantity + 1);
          dispatch(add_to_cart(id, title, price, images, pr_type));
        }}
      >
        <div>
          <FaCartPlus className="text-3xl" />
        </div>
        <div>Add to cart ₹ {parseInt(price?price:"99")}</div>
      </div>
    );
  };

  const QuantitySwitch = () => {
    return (
      <div className="flex flex-row bg-white  ">
        <div className="flex flex-row gap-4 mx-auto text-xl font-bold justify-around mt-2">
          <div
            onClick={() => {
              if (quantity === 1) {
                setInCart(false);
                setQuantity(quantity - 1);
                dispatch(remove_quantity(id));
              } else {
                setQuantity(quantity - 1);
                dispatch(remove_quantity(id));
              }
            }}
          >
            <IoIosArrowBack className="font-bold" />
          </div>
          <div
            onClick={() => {
              if (quantity === 1) {
                setInCart(false);
                setQuantity(quantity - 1);
                dispatch(remove_quantity(id));
              } else {
                setQuantity(quantity - 1);
                dispatch(remove_quantity(id));
              }
            }}
            className="text-3xl -mt-4 p-2"
          >
            -
          </div>{" "}
          <div>{quantity}</div>
          <div
            className="text-3xl -mt-4 p-2"
            onClick={() => {
              setQuantity(quantity + 1);
              dispatch(add_quantity(id));
            }}
          >
            +
          </div>
          <div
            onClick={() => {
              setQuantity(quantity + 1);
              dispatch(add_quantity(id));
            }}
          >
            <IoIosArrowForward className="rotate-0" />
          </div>
        </div>
        <div className="p-2 mt-1  text-xs">
          Amount: {cartI.price && quantity * cartI.price}
        </div>
      </div>
    );
  };

  return (
    <div>{inCart && quantity > 0 ? <QuantitySwitch /> : <AddButton />}</div>
  );
};
