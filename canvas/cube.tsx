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
      <boxGeometry args={[1, 1, 1]} />
      {/* <sphereGeometry args={[4, 3, 2]}/> */}
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
      <pointLight intensity={5.0} position={[5, 5, 5]} />
      <Cube />
      {/* <Cube0 /> */}
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


// Astro developer courses
// hem bhAshA 
// ham bhAshA
// ice language
// 
// mail notification whatsapp
// star gazer communnnity
// 8k 5G app 6G9g
// ->Cancer -{So}-{ci}-{ety}-





// 44 प्रविष्टियां मिलीं
// dikSaitR के लिए आपके परिणाम :
// दीक्षा	एफ।	dikSA	प्रारंभ करने वाला	
// दीक्षा	एफ।	dikSA	उपक्रमधार्मिकपर्वके लिएएविशिष्टउद्देश्यऔरtheपर्वखुद	
// दीक्षा	एफ।	dikSA	अनुरागकोएव्यक्तियाईश्वर	
// दीक्षा	एफ।	dikSA	तैयारीयाअभिषेकके लिएएधार्मिकसमारोह	
// दीक्षा	एफ।	dikSA	दीक्षा	
// दीक्षा	एफ।	dikSA	अनन्यपेशासाथ	
// दीक्षा	एफ।	dikSA	समर्पण	
// दीक्षा	एफ।	dikSA	पूराइस्तीफायाप्रतिबंधको	
// दीक्षा	एफ।	dikSA	कोईगंभीरतैयारी	
// दीक्षिते{दीक्षा}	क्रिया	dikSate[डीआईकेएस]	समर्पित करनाकिसी काखुदकोएमठवासीआदेश	
// दीक्षिते{दीक्षा}	क्रिया	dikSate[डीआईकेएस]	ज्ञान देनायासमर्पित करनाकिसी काखुद	
// संचालक	एम।	दीक्षा	आध्यात्मिकमार्गदर्शक	
// संचालक	एम।	दीक्षा	पुजारी	
// दीक्षा	एन।	दीक्षा	दीक्षा	
// दीक्षा	एन।	दीक्षा	अभिषेक	
// दीक्षा	एन।	दीक्षा	पवित्र करनाकिसी काखुदयाके कारणकिसी काखुदकोहोनापवित्रा	
// धीक्षते{दिह}	क्रिया वांछित।	धीकसते[दीह]	इच्छाकोअभिषेककिसी काखुद	
// धिक्षते{धीक्ष}	क्रिया	धिकसते[dIkS]	इच्छाकोअभिषेक	
// धिक्षते{धिक्ष}	क्रिया	धिकसते[dhikS]	होनाथकायापरेशान	
// धिक्षते{धिक्ष}	क्रिया	धिकसते[dhikS]	रहना	
// धिक्षते{धिक्ष}	क्रिया	धिकसते[dhikS]	प्रज्वलित करना	
// Dixom	एन।	दीक्सअम्या	समानताकादिशा

// Dix om
// 9∂∂dD -> option ∂ shift option no-action 
// Om for Dixit ∂ˆ≈ˆ† {}