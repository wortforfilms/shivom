import { useEffect, useState } from "react";

interface CompassProps {
  heading: number;
}

const Compass = ({ heading }: CompassProps) => {
  const [transform, setTransform] = useState("rotate(0deg)");

  useEffect(() => {
    setTransform(`rotate(${heading}deg)`);
  }, [heading]);

  return (
    <div className="compass-container">
      <div className="compass-rose"></div>
      <div className="compass-direction" style={{ transform }}>
        <div className="compass-north"></div>
      </div>
    </div>
  );
};

export default Compass;
