import React from 'react';
import './styles/Slider.styles.css'

export const SliderPage = ({putValue}) => {
/* onMouseMove={(event)=>mousem(event)}
const mousem=(e)=>{
  var rval = 255-parseInt(e.target.value *255/36);
  e.target.style.backgroundColor=`rgb(${(rval)}, 37, 110 )`;
  e.target.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/3314/3314403.png')";
} */

  return (
    <section className='slider-cont'>

        <h1 className='slid-heading'> Timeline :</h1>
        <input className='inp-range' type='range' min='0' max='36' defaultValue={4} onChange={putValue} step='0.25'  /> 

    </section>
  )
}
