/**
 * https://www.linkedin.com/in/diego-perdomo-58a41619b/
 * https://github.com/DiegoPerdomo0805
 * 
 */
import React from 'react'
import Card from './Card'
import './Cards.css'

function Cards() {
  return (
    <div className='Cartas'>
        <Card name='Github' link='https://github.com/DiegoPerdomo0805' img='https://cdn-icons-png.flaticon.com/512/25/25231.png'/> 
        <Card name='LinkedIn' link='https://www.linkedin.com/in/diego-perdomo-58a41619b/' img='https://cdn-icons-png.flaticon.com/512/174/174857.png'/> 
    </div>
  )
}

export default Cards