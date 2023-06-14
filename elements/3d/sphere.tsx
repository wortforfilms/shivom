import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { SphereGeometry, MeshBasicMaterial, BufferGeometry,Material, TextureLoader, Mesh } from 'three';

export const InteractiveSphere= (props:any) => {
  
  const {_texture}=props
  const sphereRef = useRef<Mesh<BufferGeometry,Material>>(null);
  // Rotate the sphere in each frame
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01;
    }
  });

  // Load the texture image
  const texture = new TextureLoader().load(_texture);

  // Create the sphere geometry and material
  const geometry = new SphereGeometry(1, 32, 32);
  const material = new MeshBasicMaterial({ map: texture });

  return (
    <Canvas>

    <mesh ref={sphereRef} geometry={geometry} material={material} />
    </Canvas>
  );
};


export const SphereApp = (props:any) => {
  const {_texture}=props
  return (
    <Canvas>
      <InteractiveSphere _texture={_texture}/>
    </Canvas>
  );
};

