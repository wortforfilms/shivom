import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import * as three from "three";


const Cube = () => {
  const cube = useRef<three.Mesh>(null);

  useFrame(() => {
    cube.current!.rotation.x += 0.01;
    cube.current!.rotation.y += 0.01;
  });

  return (
    <mesh ref={cube}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <sphereGeometry args={[4, 3, 2]}/>
      <meshStandardMaterial color="#0391BA" />
    </mesh>
  );
};

const Cube0 = () => {
  const cube = useRef<three.Mesh>(null);

  useFrame(() => {
    cube.current!.rotation.x += 0.01;
    cube.current!.rotation.y += 0.01;
    // cube.current!.position.y += 0.01;
  });

  return (
    <mesh ref={cube}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <sphereGeometry args={[5, 1, 2]}/>
      <meshStandardMaterial color="#039000" />
    </mesh>
  );
};


const ac_source=()=>{
  // sun soorya ravi bhanu son
  // depedent pendulum
  // nirogen cold
  // उत्स्फोटन-रीति	f.	utsphoTana-rIti	nitroglycerin	
// 
// Found 2 entries
// Your results for utsphoTana-rIti:
// gaumukh
// gau_grass
// {}-{}-{}
// live_feed
// []::[]
// same;:
// noa's boat error
// {}-{}-{}-{}-{}
// ayurveda
// anti aging :;: pro aging maturity
// luck ::: destiny ::: hard ::: work ::: w->k
// x=>≈˛xX¸Zz
// उत्स्फोटन-रीति	f.	utsphoTana-rIti	nitroglycerin	
// उत्स्फोटन-क्षोद	m.	utsphoTana-kSoda	blastingpowder	

}
const Scene = () => {
  return (
    <>
      <gridHelper />
      <axesHelper />
      <pointLight intensity={1.0} position={[5, 5, 5]} />
      <Cube />
      <Cube0 />
    </>
  );
};

const CubeApp = () => {
  return (
    <div
      style={{
        height: "70vh",
        width: "100vw",
      }}
    >
      <Canvas
        // concurrent
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#252934");
        }}
      >
        {/* <Stats /> */}
        <OrbitControls />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CubeApp;
