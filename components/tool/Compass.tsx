import { useEffect, useState } from "react";

interface CompassProps {
  heading: number;
}

const Compass = (props:any) => {
  const { heading , gyroscopeData:any}=props
  const [transform, setTransform] = useState("rotate(30deg)");

  useEffect(() => {
    setTransform(`rotate(${heading}deg)`);
  }, [heading]);

  return (
    <div className="compass-container ">
      <div className="compass-rose  z-20" 
      // style={{transform: transform}}
      ></div>
      <div className={`compass-direction rotate-[${heading}deg]`} 
      // style={{ transform }}
      >
        <div className="compass-north"></div>
      </div>
    </div>
  );
};

export default Compass;
