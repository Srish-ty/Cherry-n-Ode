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
    bod.style.backgroundColor = `rgb(${g}, 77, 150 )`;
  }

  return (
    <div className="App">
      <SliderPage putValue={changeval}/>
      <Output value={timing}/>
    </div>
  );
}

export default App;
