import React from 'react'
import './Card2.css'

function Card2({img, text}) {
  return (
    <div className='card_cont'>
        <div className='img_cont'>
            <img src={img}/>
        </div>
        <div className='details'>
          <div className='card_name'>
              <h2>{text}</h2>
          </div>
        </div>
    </div>
  )
}

export default Card2