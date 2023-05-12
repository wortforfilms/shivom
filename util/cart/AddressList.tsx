
import { MdDelete } from "react-icons/md";
import { delete_address_by_user } from "../../q/d/address";
import { useEffect } from "react";

export const AddressList = (props: any) => {
  const {
    addresses, setDelivery, delivery, setUserAddresses, delivery_address, setDeliveryAddress, setStep,
  } = props;

  useEffect(() => {
    let mount=true
    if(mount){
      setDelivery(true)
      setDeliveryAddress(addresses[0])
    }
  
    return () => {
      mount=false
    }
  }, [addresses,setDelivery,setDeliveryAddress
  ])
  

  return (
    <div
      className="
  mb-12 mt-1"
    >
      <div className={"text-xl font-light p-2"}>
        {" "}
        {delivery ? "Selected" : "Select"} delivery address
      </div>
      <div className="h-2 overflow-y-scroll">
        {!delivery && addresses &&
          addresses.map((address: any, index: number) => {
            // console.log(address,'--=-0?')
            return (
              <div key={index}>
                <div className="mx-auto flex flex-row justify-between gap-4  text-center p-4 bg-white shadow-lg rounded-lg mb-2 mt-2">
                  <div
                    onClick={() => {
                      setDelivery(true);
                      setDeliveryAddress(address);

                      setStep("address selected");
                    }}
                  >
                    <input type="radio" />
                  </div>
                  <div
                    onClick={() => {
                      setDelivery(true);
                      setDeliveryAddress(address);
                    }}
                  >
                    {address.house_address}
                  </div>

                  <div
                    onClick={() => {
                      delete_address_by_user(address.id);
                      setUserAddresses(
                        addresses.filter((ad: any) => ad.id !== address.id)
                      );
                    }}
                  >
                    <MdDelete className="text-3xl text-right" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {delivery && delivery_address && (
        <div>
          <div
            className="mx-auto flex justify-between flex-row gap-4 text-center p-2 bg-white shadow-lg rounded-lg mb-12 mt-2"
            onClick={() => {
              console.log("selected address");
              setStep("address selected");
            }}
          >
            <div>
              {" "}
              <input
                type="radio"
                className={`text-3xl text-red-500 p-4 rounded-full checked`}
                readOnly
                checked />


  
            </div>


            <div>
              {delivery_address.house_address}
              {delivery_address.district}
            </div>
            <div
                className={"text-xs p-2 bg-gray-500 text-white shadow-lg"}
                onClick={() => {
                  setDelivery(false);
                  setDeliveryAddress([]);
                  setStep("");
                }}
              >
                change address
              </div>
          </div>
        </div>
      )}

    </div>
  );
};
