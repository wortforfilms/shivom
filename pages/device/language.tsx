
import { ContinentSelector } from "@/constants/earth/continent";
import { useEffect, useState } from "react";
// import { dispatch } from "d3"
import { getLocationOrigin } from "next/dist/shared/lib/utils";
import { Dial } from ".";

function convertToDms(dd:any, isLng:boolean) {
  var dir = dd < 0
    ? isLng ? 'W' : 'S'
    : isLng ? 'E' : 'N';

  var absDd = Math.abs(dd);
  var deg = absDd | 0;
  var frac = absDd - deg;
  var min = (frac * 60) | 0;
  var sec = frac * 3600 - min * 60;
  // Round it to 2 decimal points.
  sec = Math.round(sec * 100) / 100;
  return deg + "°" + min + "'" + sec + '"' + dir;
}

const get_address=async(cords:any)=>{
  console.log(cords,'--=> cords')
  const url=`https://nominatim.openstreetmap.org/reverse?lat=${cords.lat}&lon=${cords.lng}&zoom=18&format=json`
  await fetch(url).then(res=>res.json()).then(data=>{
    console.table(data)
  }).catch(error=>console.log("Error",error))

}

const _onGetCurrentLocation = (setLocation:any) => {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log("found permission run");
    const marker = {
      lat: JSON.stringify(position.coords.latitude),
      lng: JSON.stringify(position.coords.longitude),
      alt: position.coords.altitude,
      speed: position.coords.speed,
      heading: position.coords.heading,
    };
    if(marker){

      setLocation({ lat: marker.lng, lng: marker.lat });
    }
    // setLo
    console.log(marker)
  });
};

const DeviceLanguage=(props:any)=>{
  
  const {initialReduxState}=props
  const earth:typeof initialReduxState=useState()
var nala=null
const [device,setDevice]=useState<any>(nala)
const [bluetooth,setBluetooth]=useState<any>(nala)
// const []
const [deviceId, setDeviceId]=useState<any>(null)
const [location,setLocation]=useState<any>(null)
const [spread_loc,setSpreadLoc]=useState({lat:convertToDms(location?.lat,true), lng:convertToDms(location?.lng,false)})

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
      get_address({ lat: marker.lng, lng: marker.lat })
          
          console.log(location, spread_loc)


        });

        navigator.cookieEnabled
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



// -. jal thal  vAyu
// wa_ter  h2o thal land vAyu airco2nh
// cavas dials for speed with  acceleration
// 
// cavas :;
// labels numbers <> ø˜øø∫∫˜µµµÂÂÂ˜˜¨¨ÆÚ
// magic of  apple or curse of apple
// ¿? ˜¨¨:
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
        _onGetCurrentLocation(setLocation);
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
    <div className="flex  flex-row justify-around  p-1">

  <Dial maxValue={80}  value={20} radius={80} strokeWidth={2}/>
  <Dial maxValue={80}  value={10} radius={80} strokeWidth={2}/>
  <Dial maxValue={80}  value={50} radius={80} strokeWidth={2}/>
  <Dial maxValue={80}  value={20} radius={80} strokeWidth={2}/>
    </div>
 

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


// feed planets texture 
// snowball structure vs HKD
// expand:shrink{compression capability}
// {switch capability}
// {serve:[];[biom]}
// {corrector:JUPIToR}
// 