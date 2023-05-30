import React, { useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { TextureLoader, MeshBasicMaterial } from 'three';

interface BookCover3DProps {
  title: string;
  author: string;
  imageUrl: string;
}

const BookCover3D: React.FC<BookCover3DProps> = ({ title, author, imageUrl }) => {
  const bookRef = useRef<THREE.Mesh>(null);

  return (
    <canvas className="book-cover-3d">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={bookRef}>
        <boxBufferGeometry args={[1, 1.5, 0.2]} />
        <meshBasicMaterial attach="material" color="white" />
        <mesh>
          <planeBufferGeometry args={[0.9, 1.4]} />
          <meshBasicMaterial attach="material" map={new TextureLoader().load(imageUrl)} />
        </mesh>
      </mesh>
      {/* {useFrame(() => {
        if (bookRef.current) {
          bookRef.current.rotation.y += 0.01;
        }
      })} */}
    </canvas>
  );
};

export default BookCover3D;
