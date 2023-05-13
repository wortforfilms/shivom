import { useState, useEffect } from "react";
import Head from "next/head";
// import styles from "@/styles/Home.module.css";
import Gyroscope from "./Gyroscope";
import Compass from "./Compass";

export default function GyroHome() {
  const [heading, setHeading] = useState<any>(0);

  const handleOrientationChange = (event: DeviceOrientationEvent) => {
    if (event.absolute) {
      setHeading(event.alpha);
    } else if (event.webkitCompassHeading) {
      setHeading(event.webkitCompassHeading);
    }
  };

  useEffect(() => {
    window.addEventListener("deviceorientation", handleOrientationChange, true);
    return () => {
      window.removeEventListener("deviceorientation", handleOrientationChange, true);
    };
  }, []);

  return (
    <div className={"container"}>
      <Head>
        <title>Gyroscope and Compass App</title>
        <meta name="description" content="Gyroscope and Compass App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"main"}>
        <h1 className={"title"}>Gyroscope and Compass App</h1>
        <div className={"gyroscopeContainer"}>
          <Gyroscope />
        </div>
        <div className="compassContainer">
          <Compass heading={heading} />
        </div>
      </main>
    </div>
  );
}
