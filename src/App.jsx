import { useState } from 'react'
import './App.css'
import Three from './components/Three'
import { Canvas } from '@react-three/fiber'

//logos
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gsapLogo from './assets/gsap-greensock.svg'
import threejsLogo from'./assets/threejs.svg'
import tailwindLogo from './assets/tailwind.svg'
import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'

function App() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();

  useGSAP( 
    () => {
      gsap.from('.logo', { 
        x: -1000,
        ease: "sine.out",
        stagger: -0.2,
      });
    },
    { scope: container}
  )


  return (
    <>
      <div ref={container} className='flex justify-between'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={tailwindLogo} className="logo tailwind" alt="Tailwind logo" />
        </a>
        <a href="https://threejs.org" target="_blank">
          <img src={threejsLogo} className="logo threejs" alt="ThreeJS logo" />
        </a>
        <a href="https://gsap.com/" target="_blank">
          <img src={gsapLogo} className="logo gsap" alt="GSAP logo" />
        </a>
      </div>
      <h1>ViRT-3G</h1>
      <p className="about-info">
        Vite + React + Tailwind + ThreeJS + GSAP
      </p>
      <div className="card">
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Three position={[0, 0, 0]} />
        </Canvas>
      </div>
      <p className="about-info">
        An Unofficial template by <a href="github.com/luke-rusthon">Luke Rushton</a>
      </p>
    </>
  )
}

export default App
