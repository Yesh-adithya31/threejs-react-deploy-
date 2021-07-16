import React from 'react'
import './styles.css'
import state from '../state'

const Card = props => {

    console.log(props.name)

  return (
    <>
      <div className='wrapper'>
        <div className='container'>
          <div className='image'>
            <img src={props.imageUrl} width={'100%'} height={'100%'} alt='user' />
          </div>
          <div className='story' id='story1'>
            <div className='info'>
              <h2>{props.name}</h2>
              <p>
                {' '}
                { props.des }
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
