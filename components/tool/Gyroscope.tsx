import { useEffect, useState } from "react";
// import "./Gyroscope.css";

const Gyroscope = () => {
  const [gyroscopeData, setGyroscopeData] = useState<any>({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientationChange, true);
    }
    return () => {
      window.removeEventListener("deviceorientation", handleOrientationChange, true);
    };
  }, []);

  const handleOrientationChange = (event: DeviceOrientationEvent) => {
    setGyroscopeData({ x: event.beta, y: event.gamma, z: event.alpha });
  };

  return (
    <div className="gyroscope-container flex flex-row gap-2 text-xs">
      <div className="gyroscope-data">
        <div className="gyroscope-label">X:</div>
        <div className="gyroscope-value">{gyroscopeData.x.toFixed(2)}</div>
      </div>
      <div className="gyroscope-data">
        <div className="gyroscope-label">Y:</div>
        <div className="gyroscope-value">{gyroscopeData.y.toFixed(2)}</div>
      </div>
      <div className="gyroscope-data">
        <div className="gyroscope-label">Z:</div>
        <div className="gyroscope-value">{gyroscopeData.z.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Gyroscope;
