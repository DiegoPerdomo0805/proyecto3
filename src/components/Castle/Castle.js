import React from 'react'
import Castillo from '../../img/Castle.png'
import './Castle.css'

function Castle() {
  return (
    <div className='Castle'>
        <div className='Castillo'>
            <img className='image' src={Castillo}></img>
        </div>
    </div>
  )
}

export default Castle