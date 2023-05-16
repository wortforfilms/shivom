import { useState, useEffect } from "react";
import Head from "next/head";
// import styles from "@/styles/Home.module.css";
import Gyroscope from "./Gyroscope";
import Compass from "./Compass";
import CelestialChart from "./CelestialChart";
import ThreeDChart from "@/canvas/threechart";

// type DeviceOrientationEvent = {
//   absolute:boolean
//   alpha:number
//   // webkitCompassHeading:number
// }

export default function GyroHome() {
  const [orientation, setOrientation] = useState({ alpha: 0, beta: 0, gamma: 0 });
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [heading, setHeading] = useState(0);


  // const handleOrientationChange = (event: any) => {
  //   if (event.absolute) {
  //     setHeading(event.alpha);
  //   } else if (event?.webkitCompassHeading) {
  //     setHeading(event?.webkitCompassHeading);
  //   }
  // };

  
  useEffect(() => {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    // Calculate the heading based on the gyroscope orientation
    const { alpha, beta, gamma } = orientation;
    const heading = beta ? (gamma > 0 ? alpha : 360 - alpha) : 0;
    setHeading(heading);
  }, [orientation]);

  const handleOrientationChange = (rotationRate: DeviceOrientationEvent) => {
    setOrientation({
      alpha: rotationRate.alpha || 0,
      beta: rotationRate.beta || 0,
      gamma: rotationRate.gamma || 0,
    });
  };

  useEffect(()=>{
    // handleOrientationChange()
  },[])

  const [gyroscopeData, setGyroscopeData] = useState<any>({ x: 0, y: 0, z: 0 });

  return (
    <div className={"container"}>
      <Head>
        <title>Gyroscope and Compass App</title>
        <meta name="description" content="Gyroscope and Compass App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main p-2 flex flex-col sm:flex-row gap-2"}>
      <a href="https://ofrohn.github.io/celestial-demo/viewer.html" className="p-2 bg-gray-600 text-green-500 font-bold"> Launch </a>

        <h1 className={"title text-xs"}>Gyroscope and Compass App</h1>
        <div className={"gyroscopeContainer"}>
          <Gyroscope gyroscopeData={gyroscopeData} setGyroscopeData={setGyroscopeData}/>
        </div>
        <div className="compassContainer">
          <Compass heading={heading} gyroscopeData={gyroscopeData} />
        </div>

        {/* <CelestialChart latitude={latitude} longitude={longitude} /> */}
      <ThreeDChart />
      </main>
    </div>
  );
}
