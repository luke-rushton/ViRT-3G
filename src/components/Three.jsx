import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'


function Three(props) {
   // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  useFrame((state, delta) => (meshRef.current.rotation.y += delta))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={3}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <RoundedBox args={[1,1,1]} radius={0.1}>
        <meshStandardMaterial roughness={0.25} color={hovered ? '#0ae448' : '#61dafb'} />
      </RoundedBox>
    </mesh>
  )
}


export default Three