import { useEffect, useState } from "react";
// import { FormCreator } from "../formCreator";
// import { address_form, yup_address_form } from "@/constant/form/address";
import { get_addresses_by_user } from "@/q/r/s/address.";
// import { Form } from "@/display/forms";
// uph
// audio :: 
import { address_form, yup_address_form } from "./address";


export const AddressCard = (props: any) => {
  const {
    setDelivery, setIs, earth, delivery, setStep, setUserAddresses, delivery_address, setDeliveryAddress,
  } = props;
  const [addresses, setAddresses] = useState<any>([]);
  const [selected_delivery_address, setDelAdd] = useState<any>(null);
  const [new__, setNew] = useState(false);

  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let mount = true;
    if (mount && new__) {
      get_addresses_by_user(earth?.auth?.user?.id)
        .then((add:any) => {
          if (add.addresses) {
            setUserAddresses(add.addresses);
            setDeliveryAddress(add.addresses[0]);
          }
          setDelivery(true);

          setStep("address selected");
        })
        .catch((error:any) => console.log(error));
    }

    return () => {
      mount = false;
    };
  }, [
    new__,
    setNew,
    earth?.auth,
    setUserAddresses,
    setDeliveryAddress,
    setDelivery,
    setStep,
  ]);
  return (
    <div className="">
      {/* <div>list</div> */}

      <div
        className="p-2 bg-slate-300 text-white text-center text-rose-500 font-bold mt-2 uppercase shadow-lg  w-80 mx-auto"
        onClick={() => {
          setNew(!new__);
        }}
      >
        Add new address
      </div>
      {/* {new__ && (
        <Form
          state={{label:"",fields:address_form}}
          validationSchema={yup_address_form}
          name="Shorts delivery Address"
          SetNew={setNew}
          setIs={setIs} />
      )} */}
    </div>
  );
};


export const ShortsInventoryAddressCard = (props: any) => {
  const {
      earth, setStep,   setInventoryAddress
  } = props;
  const [addresses, setAddresses] = useState<any>([]);
  const [selected_delivery_address, setDelAdd] = useState<any>(null);
  const [new__, setNew] = useState(false);

  const [complete, setComplete] = useState(false);

  useEffect(() => {
    let mount = true;
    if (mount && new__) {
      get_addresses_by_user(earth?.auth?.user?.id)
        .then((add:any) => {
          if (add.addresses) {
            setAddresses(add.addresses);
            setInventoryAddress(add.addresses[0]);
          }
console.log(add,'---=.,---->',addresses)

          // setStep("address selected");
        })
        .catch((error) => console.log(error));
    }

    return () => {
      mount = false;
    };
  }, [
    new__,
    setNew,
    earth?.auth,
addresses,

setInventoryAddress,
    setStep,
  ]);

  useEffect(() => {
    let mount = true;
    if (mount ) {
      get_addresses_by_user(earth?.auth?.user?.id)
        .then((add:any) => {
          if (add.addresses) {
            // setUserAddresses(add.addresses);
            setInventoryAddress(add.addresses[0]);
          }
console.log(add,'---=.,>')

          // setStep("address selected");
        })
        .catch((error) => console.log(error));
    }

    return () => {
      mount = false;
    };
  }, [
    
    setNew,
    earth?.auth,


setInventoryAddress,
    setStep,
  ]);


  
  return (
    <div className="">
      {/* <div>list</div> */}

      <div
        className="p-2 bg-slate-300 text-white text-center text-rose-500 font-bold mt-2 uppercase shadow-lg  w-80 mx-auto"
        onClick={() => {
          setNew(!new__);
        }}
      >
        Add new address
      </div>
      {/* {new__ && (
        <Form
          state={{label:"Address",fields:address_form}}
          validationSchema={yup_address_form}

          setParent={setNew}
          setStep={setStep}
           />
      )} */}
    </div>
  );
};