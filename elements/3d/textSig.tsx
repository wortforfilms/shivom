import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';


const ComingSoonSign: React.FC = () => {
  const signRef = useRef<Mesh>(null);


  useFrame(() => {
    if (signRef.current) {
      signRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={signRef} position={new Vector3(0, 0, -5)}>
      <boxGeometry args={[2, 0.2, 0.5]} />
      <meshBasicMaterial color="red" />
      
     <text
     
     />
      <meshBasicMaterial color="white" />
    </mesh>
  );
};

const App: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ComingSoonSign />
    </Canvas>
  );
};

export default App;
