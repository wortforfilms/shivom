import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface CompassProps {
  heading: number;
}

const Compass = (props:any) => {
  const { heading , gyroscopeData}=props
  const [transform, setTransform] = useState("rotate(30deg)");

  useEffect(() => {
    setTransform(`rotate-[${Math.round(heading)}deg]`);
  }, [heading]);

  return (
    <div className="compass-container ">
      <div className="compass-rose  z-10" 
      style={{transform: transform}}
      ></div>
      <div className={`relative compass-direction `} 
      // style={{ transform }}
      >
        <div className="compass-north mt-2 z-30 "></div>
      </div>
    </div>
  );
};

export default Compass;
