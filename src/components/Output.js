import React from 'react'
import './styles/Output.styles.css'

export const Output = ({value}) => {
  return (
    <div className='output-cont'>
        <h1 className='out-head'> {value} </h1>
        
    </div>
  )
}