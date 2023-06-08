
import { ContinentSelector } from "@/constants/earth/continent"
import { useEffect, useState } from "react"
// import { dispatch } from "d3"
import { getLocationOrigin } from "next/dist/shared/lib/utils"



const DeviceLanguage=(props:any)=>{
  
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useState()
var nala=null
const [device,setDevice]=useState<any>(nala)
// const []
const [deviceId, setDeviceId]=useState<any>(null)
const [location,setLocation]=useState<any>(null)
const [alert,setAlert]=useState<any>(()=>{
  []
})

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
          setLocation({ lat: marker.lng, lng: marker.lat });
          console.log(location)

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
    setLocation({ lat: marker.lng, lng: marker.lat });
    console.log(marker)
  });
};

// -. jal thal  vAyu
// wa_ter  h2o thal land vAyu airco2nh
// 

useEffect(() => {
  let mount=true
  if(mount){



    const device=navigator
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
    setDevice(device)
    // console.log(device.mediaDevices)
    // console.log(device.geolocation.getCurrentPosition((coordinates)=>{
      // getMoonSign(new Date())
      getLocationOrigin()
      // console.log(coordinates)
    // }))
    // dispatch(update_device_visit(device))
    // Devops
    //
    // dispatch()
  }


  return () => {
    mount=false
  }
}, [])


  return <div className="min-h-[90vh] w-full h-full">
    <div className="h-12"></div>
    {
      JSON.stringify(!!device && device)
    }
    {JSON.stringify(device)}
    {/* <Vartmaan/> */}
    {/* VratmAna */}
    {/* VrutamAa */}
  

{'ଓ'.charCodeAt(0)}
  <ContinentSelector/>
  <hr/>


  </div>
}

export default DeviceLanguage

export const view_chakra=(props:any)=>{
  const {doc,str}=props
  return <div className={`flex flex-col sm:flex-row `}>
{str.split('').map((i:any,j:number)=>{
  return <div key={j}{...i}></div>
})}
  </div> 

}