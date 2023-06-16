import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { OrbitControls } from '@react-three/drei';

const Ashwini: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);

  const createLine = (start: THREE.Vector3, end: THREE.Vector3) => {
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
    const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
    const line = new THREE.Line(geometry, material);
    return line;
  };

  const createStarLabel = (position: THREE.Vector3, text: string) => {
    const loader = new FontLoader();
    loader.load('/fonts/Arial_Regular.json', (font:any) => {
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const geometry = new TextGeometry(text, {
        font,
        size: 1.0,
        height: 0.12,
      });
      const label = new THREE.Mesh(geometry, material);
      label.position.copy(position);
      label.position.z += 0.1; // Adjust the z-position to avoid overlapping with lines
      groupRef.current?.add(label);
    });
  };

  const createAshwini = () => {
    // Create the lines connecting the stars of Ashwini constellation
    const lines = [
      createLine(new THREE.Vector3(0, 0, 0), new THREE.Vector3(2, 0, 0)),
      createLine(new THREE.Vector3(2, 0, 0), new THREE.Vector3(1, 1, 0)),
      createLine(new THREE.Vector3(1, 1, 0), new THREE.Vector3(2, 2, 0)),
      createLine(new THREE.Vector3(2, 2, 0), new THREE.Vector3(0, 2, 0)),
      createLine(new THREE.Vector3(0, 2, 0), new THREE.Vector3(1, 1, 0)),
    ];

    // Add star labels
    // createStarLabel(new THREE.Vector3(0, 0, 0), 'α Ari');
    // createStarLabel(new THREE.Vector3(2, 0, 0), 'β Ari');
    // createStarLabel(new THREE.Vector3(1, 1, 0), 'γ Ari');
    // createStarLabel(new THREE.Vector3(2, 2, 0), 'δ Ari');
    // createStarLabel(new THREE.Vector3(0, 2, 0), 'ε Ari');

    return lines;
  };

  return (
    <Canvas className=''  style={{height:"70vh"}}>
      <ambientLight intensity={0.5} />
      <OrbitControls/>
      <primitive object={new THREE.AxesHelper(10)} />

      <pointLight position={[10, 10, 10]} />
      <group ref={groupRef}>
        {createAshwini().map((line, index) => (
          <primitive key={index} object={line} />
        ))}
      </group>
      <axesHelper />
      <gridHelper />
    </Canvas>
  );
};

export default Ashwini;
