import React from 'react';
import './styles/Slider.styles.css'

export const SliderPage = ({putValue}) => {
  return (
    <section className='slider-cont'>

        <h1 className='slid-heading'> Timeline :</h1>
        <input type='range' min='0' max='36' defaultValue={4} onChange={putValue}/> 

    </section>
  )
}
