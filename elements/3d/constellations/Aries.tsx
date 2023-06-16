import { OrbitControls } from '@react-three/drei';
import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';

const Aries: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const createLine = (start: THREE.Vector3, end: THREE.Vector3) => {
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
    const line = new THREE.Line(geometry, material);
    return line;
  };

  const createAries = () => {
    // Create the lines connecting the stars of Aries constellation
    const lines = [
      createLine(new THREE.Vector3(0, 0, 0), new THREE.Vector3(2, 0, 0)),
      createLine(new THREE.Vector3(2, 0, 0), new THREE.Vector3(1, 1, 0)),
      createLine(new THREE.Vector3(1, 1, 0), new THREE.Vector3(2, 2, 0)),
      createLine(new THREE.Vector3(2, 2, 0), new THREE.Vector3(0, 2, 0)),
      createLine(new THREE.Vector3(0, 2, 0), new THREE.Vector3(1, 1, 0)),
    ];

    return lines;
  };

  return (
    <Canvas  style={{height:'60vh'}}>
      <OrbitControls/>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <group ref={groupRef}>
        {createAries().map((line, index) => (
          <primitive key={index} object={line} />
        ))}
      </group>
      <axesHelper />
      <gridHelper />
    </Canvas>
  );
};

export default Aries;
