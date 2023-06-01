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
      <div className="compass-rose  z-20" 
      // style={{transform: transform}}
      ></div>
      <div className={`relative compass-direction z-30 ${transform}`} 
      // style={{ transform }}
      >
        <div className="compass-north mt-32"></div>
      </div>
    </div>
  );
};

export default Compass;
