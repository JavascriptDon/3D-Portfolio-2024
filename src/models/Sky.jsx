import { useGLTF } from '@react-three/drei'
import React, {useRef} from 'react'
import { useFrame } from '@react-three/fiber';
import skyScene from "../assets/3d/sky.glb";
const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky;

// Credit: https://github.com/adrianhajdin/3D_portfolio