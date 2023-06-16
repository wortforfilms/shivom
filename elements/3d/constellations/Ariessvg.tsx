import React, { useRef } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

interface SVG3DProps {
  url: string;
}

const SVG3D: React.FC<SVG3DProps> = ({ url }) => {
  const groupRef = useRef<any>();

  const { paths } = useLoader(SVGLoader, url);
  console.log(paths,'====')

  return (
    <group ref={groupRef}>
      {paths.map((path: any, index: number) => (
        <mesh key={index} position={[0, 0, 0]}>
          <shapeBufferGeometry args={[path?.toShapes()[0], 1]} />
          <meshBasicMaterial color="black" />
        </mesh>
      ))}
    </group>
  );
};

const SVGApp = (props:any) => {
  const{rashi}=props
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SVG3D url={`/assets/A.svg`} />
    </Canvas>
  );
};

export default SVGApp;
