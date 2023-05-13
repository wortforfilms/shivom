import { useState, useEffect } from "react";

type GyroscopeProps = {
  onUpdate: (x: number, y: number, z: number) => void;
};

const Gyroscope = ({ onUpdate }: GyroscopeProps) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  useEffect(() => {
    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      setX(event.beta || 0);
      setY(event.gamma || 0);
      setZ(event.alpha || 0);
      onUpdate(x, y, z);
    };

    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [onUpdate, x, y, z]);

  return (
    <div>
      <div>Gyroscope Readings:</div>
      <div>X: {x.toFixed(2)}, Y: {y.toFixed(2)}, Z: {z.toFixed(2)}</div>
    </div>
  );
};

export default Gyroscope;
