import React from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useThree, extend } from 'react-three-fiber'

extend({OrbitControls})

const Orbit = () => {
    const { camera, gl } = useThree()
    return <orbitControls 
                attach = 'orbitControls'
                args={[camera, gl.domElement]} />
  }

export default Orbit
