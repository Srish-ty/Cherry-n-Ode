import React from 'react'
import './styles/Output.styles.css'

export const Output = ({value}) => {
  
    var yr=Math.floor(value/12+1), mn=Math.floor(value%12);
    
    if(value<=4){}
  

  return (
    <div className='output-cont'>
        <h1 className='out-head'> 
         { yr!==4 ? (`year : ${yr}`): "It's Over" } <br/>
         { mn!==0? `month : ${mn}`: ""}
        </h1>
        
    </div>
  )
}