import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useTexture, AccumulativeShadows, RandomizedLight, Decal, Environment, Center } from '@react-three/drei'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { state } from './store'
// import {GLTF} from '@react-three/drei'
export const TSApp = ({  }) => {
  
  // const document: Document = document as Document;
  const x=0
  const y=0
  const z=2.5
  const position = [x, y, z]  as any
  const fov = 25

const isBrowser = typeof window !== "undefined";
const [doc,setDoc]=useState<any>()

useEffect(() => {
  let mount=true
  if(mount){
    if (typeof window !== "undefined") {
      // browser code
      setDoc(document.getElementById("root"))
    }
  }

  return () => {
    mount=false
  }
}, [])

  return isBrowser?<Canvas shadows 
  camera={{ position, fov }} 
  gl={{ preserveDrawingBuffer: true }} 
  eventSource={doc} 
  eventPrefix="client">
    <ambientLight intensity={0.5} />
    <Environment preset="city" />
    <CameraRig>
      {/* <Backdrop /> */}
      <Center>
        <Shirt />
      </Center>
    </CameraRig>
  </Canvas>:null
}

// function Backdrop() {
//   const shadows = useRef<any>()
//   useFrame((state, delta) => easing.dampC(shadows.current.getMesh().material.color, state.color, 0.25, delta))
//   return (
//     <AccumulativeShadows ref={shadows} temporal frames={60} alphaTest={0.85} scale={10} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.14]}>
//       <RandomizedLight amount={4} radius={9} intensity={0.55} ambient={0.25} position={[5, 5, -10]} />
//       <RandomizedLight amount={4} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -9]} />
//     </AccumulativeShadows>
//   )
// }

function CameraRig( children:any ) {
  const group = useRef<any>()
  const snap = useSnapshot<any>(state)
  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [snap.intro ? -state.viewport.width / 4 : 0, 0, 2], 0.25, delta)
    easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta)
  })
  return <group ref={group}>{children}</group>
}


// type GLTFResults= GLTF & {
// nodes:{
//   T_Shirt_Male: THREE.Mesh
// };
// materials:{
//   ['default']:THREE.MeshStandardMaterial
// }
// } 


function Shirt(props:any) {
  const snap = useSnapshot(state)
  const texture = useTexture(`/${snap.decal}.png`)
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb') as any
  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta))
  return (
    <mesh castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roughness={1} {...props} dispose={null}>
      <Decal position={[0, 0.04, 0.15]} rotation={[0, 0, 0]} scale={0.15} map={texture} map-anisotropy={16} />
    </mesh>
  )
}

useGLTF.preload('/shirt_baked_collapsed.glb')
;['/react.png', '/three2.png', '/pmndrs.png'].forEach(useTexture.preload)
