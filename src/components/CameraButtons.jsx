import { useState } from "react"
import state from "../state"
import Card from "./Card"

const style = {
    zIndex: 1,
    position: 'absolute',
    bottom: '30vh',
    height: '30px',
    width: '30px',
    background: 'white',
    textAlign: 'center',
    borderRadius: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.7,
    border: '1px solid black',
    cursor: 'pointer'
}
const CameraButtons = ({}) =>{
    const [name, setName] = useState('Model 3 | Tesla')
    const [imageUrl, setImageUrl] = useState('https://www.aljazeera.com/wp-content/uploads/2020/08/1b494d172c944119820d384269fc82d0_18.jpeg?resize=770%2C513')
    const [des, setDes] = useState('Tesla Inc. will start exporting Model 3 sedans made at its gigafactory on the outskirts of Shanghai to Europe later this month, seeking to boost sales in one of the fastest-growing electric-car markets.'
                                    + 'The car will be shipped to more than 10 countries, including Germany, France and Switzerland, the automaker said in a statement sent via WeChat on Monday. The company’s Shanghai factory — its first outside the U.S. — opened for local deliveries at the start of this year.')

    const sets = {
        //model 3
        1: {
            cameraPos: [9,2,4],
            target: [4,0,0],
            name: 'Capot001_CAR_PAINT_0',
            mainName: 'Model 3 | Tesla',
            des: 'Tesla Inc. will start exporting Model 3 sedans made at its gigafactory on the outskirts of Shanghai to Europe later this month, seeking to boost sales in one of the fastest-growing electric-car markets.'
            + 'The car will be shipped to more than 10 countries, including Germany, France and Switzerland, the automaker said in a statement sent via WeChat on Monday. The company’s Shanghai factory — its first outside the U.S. — opened for local deliveries at the start of this year.',
            imgUrl: 'https://www.aljazeera.com/wp-content/uploads/2020/08/1b494d172c944119820d384269fc82d0_18.jpeg?resize=770%2C513'
        }, 
        // model s
        2: {
            cameraPos: [1,2,5],
            target: [-4,0,0],
            name: 'object005_bod_0',
            mainName: 'Model S | Tesla',
            des: 'Tesla\'s CEO Elon Musk announced today that the customer deliveries of the refreshed Tesla Model S Plaid - scheduled on June 3, 2021 - were pushed back to June 10.'+
            'The additional week is required for the company to make some final, undisclosed tweaks.'
            + 'At the same time, Elon Musk said that the new Model S feels like a spaceship:',
            imgUrl: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/ea201786-4dec-4ca2-b266-c7a180443853/bvlatuR/std/1440x1080/MS-Specs-Hero-Desktop'
       
        }
    }
    const handleClick = num => {
        state.cameraPos.set(...sets[num].cameraPos)
        state.target.set(...sets[num].target)
        state.activeMeshName = sets[num].name
        state.shouldUpdate = true

        setName(sets[num].mainName)
        setImageUrl(sets[num].imgUrl)
        setDes(sets[num].des)
    }

    return(
        <>
        <Card name ={name} imageUrl={imageUrl} des={des} />
        <button 
            onClick = {e => handleClick(2)}
            style={{
            left: '40vw',
            ...style
        }}>
            {'<'}
        </button>

        <button 
            onClick = {e => handleClick(1)}
            style={{
            right: '40vw',
            ...style
        }}>
            {'>'}
        </button>
        </>
    )
}

export default CameraButtons