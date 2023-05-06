import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CmpMSSR = dynamic(() => import("./cmp"), {
  ssr: false,
});

const CurrentPinMap = (props:any) => {
  const { initialReduxState,  pin,setPin, register, fl} = props;
  const earth: typeof initialReduxState = useSelector((state) => state);

  const [location, setLocation] = useState<any>({ lng: 0, lat: 0 });

  useEffect(()=>{
    let mount=true
    if(mount && pin.lng){
      setLocation({ lng: pin.lng, lat: pin.lat })
    }
    return ()=>{mount=false}
  },[pin])

  useEffect(() => {
    let mount = true;
    if (mount) {
      if (navigator.permissions && navigator.permissions.query) {
        const _onGetCurrentLocation = () => {
          navigator.geolocation.getCurrentPosition(function (position) {
            console.log("found permission run");
            const marker = {
              lat: JSON.stringify(position.coords.latitude),
              lng: JSON.stringify(position.coords.longitude),
              alt: position.coords.altitude,
              speed: position.coords.speed,
              heading: position.coords.heading,
            };
            setLocation({ lat: marker.lat, lng: marker.lng });
          });
        };

        navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            const permission = result.state;
            console.log(
              "found permission run detect",
              permission,
              navigator.geolocation
            );
            if (permission === "granted" || permission === "prompt") {
              _onGetCurrentLocation();
            }
            if (permission === "denied") {
              alert("set location permission first");
            }
          });
      }
    }
    return () => {
      setLocation({lng:'', lat:''});
      mount = false;
    };
  }, []);


  return (
    <div className="mx-auto p-1  w-full bg-slate-100 rounded-lg shadow-lg overflow-hidden  
    h-80 flex flex-col justify-start">
      {/* <div className="text-[10px] font-bold">{JSON.stringify(location)}</div> */}
      <div className="w-100  h-full overflow-hidden ">
        {location && (
          <CmpMSSR
            pin={pin}
            setPin={setPin}
            center={{ lat: location.lat, lng: location.lng }}
            location={location}
            draggable={true}
            register={register}
            fl={fl}
            

            onDragMarker={(e:any) => {
              console.log(e, "location selector e on map");
              let loc = { lat: e.lat, lng: e.lng };
              setLocation(loc);
            }}
          />
        )}
      </div>
  <input className="hidden" {...register(`${fl.name}.latitude`)} defaultValue={location.lat}/>
  <input className="hidden" {...register(`${fl.name}.longitude`)} defaultValue={location.lng}/>

    </div>
  );
};

export default CurrentPinMap;
