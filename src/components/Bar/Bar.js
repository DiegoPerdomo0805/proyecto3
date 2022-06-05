import React from 'react'
import Pugno from '../../img/Pugno-removebg-preview.png'
import './Bar.css'
import { Flip } from 'react-reveal'
//import Salem from '../../audio/SalemSecret.mp3'

//const a = new Audio(Salem)

//function Secta(){
//  window.open('https://www.youtube.com/watch?v=dbpC5ew1Jto&ab_channel=DIEGOALEJANDROPERDOMOSAGASTUME');
//}

function Bar() {
  return (
    <div className='Barra'>
        <div className='logo_cont'>
          <img className='Logo'  src={Pugno} />
        </div>
        <Flip>
          <div className='who'>
            <h3 ></h3>
          </div>          
        </Flip>
    </div>
  )
}

export default Bar