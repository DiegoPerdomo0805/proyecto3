import React from 'react'
import './Card.css'

function Card({name, link, img}) {    

  return (
    <div className='prod_cont'>
        <div className='img_cont'>
            <img src={img}/>
        </div>
        <div className='details'>
          <div className='card_name'>
              <a className='link' href={link} target='_blank'>{name}</a>
          </div>
        </div>
    </div>
  )
}

export default Card 