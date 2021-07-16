import logo from './logo.svg'
import './App.css'
import { Canvas } from 'react-three-fiber'
import {  Suspense } from 'react'
import { Physics } from 'use-cannon'


import Orbit from './components/Orbit'
import Background from './components/Background'
import Floor from './components/Floor'
import ColorPicker from './components/ColorPicker'
import Cars from './components/Cars'
import CameraControls from './components/CameraControls'
import CameraButtons from './components/CameraButtons'
import state from './state'
import Lights from './components/Lights'
import Effects from './components/Effects'



function App() {

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <ColorPicker/>
      <CameraButtons/>
      <Canvas 
      gl ={{
        powerPreference : "high-performance",
        antialias : false,
        stencil : false,
        depth : false
      }}
      shadowMap 
      style={{ background: 'black' }} 
      camera={{ position: [7, 7, 7] }}
      >

        <Suspense fallback={null} >
          <Background />
        </Suspense>
        {/* <fog attach='fog' args={['white', 1, 10]}/> */}
        <CameraControls state={state}/>
        <Lights/>
        <Orbit />
        
        <axesHelper args={[5]} />

      
        <Physics>
          <Cars/>
        {/* <Suspense fallback={null} >
          <Box position={[4, 1, 0]} />
        </Suspense> */}
        <Floor position={[0, -0.5, 0]} />
        </Physics>
        <Effects/>
      </Canvas>
    </div>
  )
}

export default App
