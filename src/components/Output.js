import React from 'react'
import './styles/Output.styles.css'

export const Output = ({value}) => {
  
    var yr=Math.floor(value/12+1), mn=Math.floor(value%12);
    
    
    var months= ["June","July","August","September","October","November","December","January","February","March","April","May"];
    var monthnm = months[mn];
    var yrnm = 2019+yr;
  

  return (
    <div className='output-cont'>
        <h1 className='out-head'> 
         { monthnm } { yrnm }
        </h1>
        
    </div>
  )
}


/*
         { value<=35 ? (`year : ${yr}`): "It's Over 💔" } <br/>
         { mn!==0? ( value<=35? `month : ${mn}`:""): "" }
*/