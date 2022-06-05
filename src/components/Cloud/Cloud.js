import React from 'react'
import 'react-appear-on-scroll/dist/index.css';
import cloud from '../../img/cloud2.png'
import './Cloud.css'

function Cloud({text, paragraph}) {
  return (
    <div className='cloud_cont'>
      <img className='cloud_img' src={cloud}></img>
      <h2 className='center'>{text}</h2>
      <h3 className='info'>{paragraph}</h3>
    </div>
  )
}

export default Cloud