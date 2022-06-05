import React, {useState } from 'react';
import './App.css';
import { Fade } from 'react-reveal';
import Bar from './components/Bar/Bar';
import Castle from './components/Castle/Castle'
import Cards from './components/Cards/Cards';
import Cloud from './components/Cloud/Cloud.js';
import Cloud2 from './components/Cloud/Cloud2';
import Card2 from './components/Cards/Card2.js';

function App() {
  const aptitudes = [
    {'title':'Quién soy'             ,  'text':'Mi nombre es Diego Perdomo y soy un estudiante de tercer año de ingeniería en computación. Tengo 21 años y soy guatemalteco.'},
    {'title':'Qué es lo que he hecho',  'text':'Entre mis proyectos más detsacados se encuentran una memoria temática, una calculadora y una copia de una página de joyería que es de mi agrado personal.'}, 
    {'title': 'Qué es lo que hago'   ,  'text':'Manejo lo necesario de desarrollo web: HTML, CSS, JS, React, uso de Webpack y Babel.'}, 
    {'title':'Contactos'             ,  'text':'Dejo de referencia mi LinkedIn y Github.'}
  ];
  const links = [
    {'l1':'http://stw-uvg-22.site/lab09/DAPS20204/dist/', 'l2':'http://stw-uvg-22.site/lab10/DAPS20204/dist/', 'l3':'http://stw-uvg-22.site/proyecto1/DAPS20204/dist/', 'n1':'Elden Ring', 'n2':'Calculadora', 'n3':'Book Of Alchemy'},
    {'l1':'https://github.com/DiegoPerdomo0805', 'l2':'https://www.linkedin.com/in/diego-perdomo-58a41619b/', 'l3':'https://www.youtube.com/watch?v=dbpC5ew1Jto&ab_channel=DIEGOALEJANDROPERDOMOSAGASTUME', 'n1':'Github', 'n2':'LinkedIn', 'n3':'Secta Famélica'}
  ]
  const clouds = [];
  const [open, setOpen] = useState(false);


  for (var i = 0; i <aptitudes.length; i++){
    if(i%2 == 0){
      clouds.push(<div className='cloudLeft'><Fade left><Cloud text={aptitudes[i].title} paragraph={aptitudes[i].text}></Cloud> </Fade> </div>)
    }
    else{
      if(i == 1){
        clouds.push(<div className='cloudRight'><Fade right><Cloud2 text={aptitudes[i].title} paragraph={aptitudes[i].text} l1={links[0].l1} l2={links[0].l2} l3={links[0].l3}  n1={links[0].n1} n2={links[0].n2}  n3={links[0].n3}></Cloud2> </Fade> </div>)
      }
      else{
        clouds.push(<div className='cloudRight'><Fade right><Cloud2 text={aptitudes[i].title} paragraph={aptitudes[i].text} l1={links[1].l1} l2={links[1].l2} l3={links[1].l3}  n1={links[1].n1} n2={links[1].n2}  n3={links[1].n3}></Cloud2> </Fade> </div>)
      }
    }
  }


  return (
    <div className='App'>      
      <div className='top_header'>
      <Fade top>
        <Bar></Bar>
      </Fade>
      </div>
      <div className='Castle_container'>
      <Fade bottom>
        <Castle></Castle>
      </Fade>
      </div>
     <div className='Main'>
      {clouds}
     </div>
    </div>
  )
}

export default App

/**
 


server {
        listen 4080;
        listen [::]:4080;

        server_name _;

        root /var/www/html/proyecto3/DAPS20204/dist;
        index index.html;
        location / {
                try_files $uri $uri/ =404;
        }
}


 */
