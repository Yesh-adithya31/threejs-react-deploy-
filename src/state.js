import * as THREE from 'three'

// model3 = "Capot001_CAR_PAINT_0"
//  model s = "object005_bod_0"

const state = {
    activeMesh : {},
    activeMeshName : "Capot001_CAR_PAINT_0",
    cameraPos : new THREE.Vector3(9,2,4),
    target : new THREE.Vector3(4,0,0),
    shouldUpdate: true,
    name : ""
}

export default state