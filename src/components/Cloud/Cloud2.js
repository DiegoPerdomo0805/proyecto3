import React from 'react';
import 'react-appear-on-scroll/dist/index.css';
import cloud from '../../img/cloud2.png'
import './Cloud.css'

function Cloud2({text, l1, l2, l3, n1, n2, n3, paragraph}) {
    return (
      <div className='cloud_cont'>
        <img className='cloud_img' src={cloud}></img>
        <h2 className='center'>{text}</h2>
        <h3 className='info'>{paragraph}<br/>
            <a href={l1}>{n1}</a><br/>
            <a href={l2}>{n2}</a><br/>
            <a href={l3}>{n3}</a><br/>
        </h3>
      </div>
    )
  }

export default Cloud2