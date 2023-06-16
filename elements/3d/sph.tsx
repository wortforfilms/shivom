
import React, { useEffect, useRef } from "react";
import { Canvas,useFrame,useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
// import { OrbitControls } from "@react-three/drei/core/OrbitControls"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OrbitControls } from "@react-three/drei"

// const CameraController = () => {
//   const { camera, gl } = useThree();
//   useEffect(
//      () => {
//         const controls = new OrbitControls(camera, gl.domElement) as any;
//         controls.minDistance = 3;
//         controls.maxDistance = 20;
//         return () => {
//           controls.dispose();
//         };
//      },
//      [camera, gl]
//   );
//   return null;
// };

const Sphere=(props:any)=>{
  const {texture, radius}=props
   const base=new THREE.TextureLoader().load(texture)
   const ref=useRef<any>(null)
   useFrame(() => (ref.current.rotation.y -= 0.01))
   return(
      <mesh visible castShadow ref={ref}>
      {/* <CameraController/> */}
      <OrbitControls />

      <ambientLight />
         <pointLight position={[10, 10, 10]} />
         <primitive object={new THREE.AxesHelper(10)} />
      <sphereGeometry attach="geometry" args={[radius?radius:3, 64, 64]} />
      <meshBasicMaterial
         map={base}
         color="white"
      />
      </mesh>
   )
}
 export  function SphereApp(props:any){
  const {texture, radius}=props

   return (
      <Canvas className="h-full" style={{height:'100%'}}>
         <ambientLight />
         <Sphere texture={texture} radius={radius}/>
      </Canvas>
   );
}