import './App.css';
import { useState } from 'react';
import { SliderPage } from './components/SliderPage';
import { Output } from './components/Output';

function App() {
  var [timing, setTiming]= useState(4)

  const changeval = (e)=>{
    let val = e.target.value;
    setTiming(val);

    let bod = document.getElementsByClassName('App')[0];
    let g = 255-parseInt(val*255/36); console.log(g);
    bod.style.backgroundColor = `rgb(${g}, 48, 122 )`; 
  
    let slider =document.getElementsByClassName('slider-cont')[0];
    slider.style.backgroundColor = `rgb(${g}, 98, 172  )`; slider.style.color = `rgb(${g}, 28, 102 )`;

    let outp = document.getElementsByClassName('output-cont')[0];
    outp.style.backgroundColor = `rgb(${g}, 77, 150 )`; outp.style.color = `rgb(${255-g}, 48, 122 )`;

  }

  return (
    <div className="App">
      <SliderPage putValue={changeval} className='slider' bcolor={timing}/>
      <Output value={timing}/>
    </div>
  );
}

export default App;
