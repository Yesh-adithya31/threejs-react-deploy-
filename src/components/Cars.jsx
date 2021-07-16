import { Suspense } from "react"
import BoundingBox from "./BoundingBox"
import Dragable from "./Dragable"
import Model from "./Model"

const Cars = ({})=>{
    return(
        <Suspense fallback={null} >
          
        <Dragable transformGroup>
          <BoundingBox 
              // visible 
              position={[4,2,0]}
              dims ={[3,2,6]}
              offset={[0,-0.4,0.8]}
          >
             <Model 
                path='/tesla_model_3/scene.gltf' 
                scale ={new Array(3).fill(0.01)}
                objectName = 'teslaModel3'
              />
          </BoundingBox>
      </Dragable>
      <Dragable transformGroup>
        <BoundingBox 
          // visible 
          position={[-4,2,0]}
          dims ={[3,2,7]}
          offset={[0,-0.8,0.2]}
          >
            <Model 
            path='/tesla_model_s/scene.gltf' 
            scale ={new Array(3).fill(0.012)}
            objectName = 'teslaModelS'
            />
        </BoundingBox> 
      </Dragable>
      <group 
        // rotation = {[0, Math.PI,0]}
      >
      <Model 
          path='/biped_robot/scene.gltf' 
          scale ={new Array(3).fill(0.02)}
        />
      </group>
      </Suspense>
    )
}

export default Cars