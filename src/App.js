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
    //let h = parseInt(100-(val/36*100) + 237);
    let g = 255-parseInt(val*255/36); console.log(g);
    bod.style.backgroundColor = `rgb(${g+10}, 48, 122 )`; //`hsl(${h}, 86%, 56% )`  
  
    let slider =document.getElementsByClassName('slider-cont')[0];
    slider.style.backgroundColor = `rgb(${g+15}, 82, 157 )`; slider.style.color = `rgb(${Math.abs(g-10)}, 28, 102 )`;  

    let outp = document.getElementsByClassName('output-cont')[0];
    outp.style.backgroundColor = `rgb(${(g+10)}, 77, 150 )`; outp.style.color = `rgb(${255-g}, 48, 122 )`; outp.style.boxShadow = `0vw 0vw 2vw rgb(${g-30},08, 82)`;

    let inp=document.getElementsByClassName('inp-range')[0]; inp.style.backgroundColor=`rgb(${(g)}, 37, 110 )`;
    let inpval = val*100/36;
    inp.style.background = `linear-gradient(to right, rgb(${(g+62)}, 107, 180) ${inpval-0.25}%, rgb(${(g)}, 37, 110) ${inpval+0.25}%)`; //rgb(${(255-g+15)}, 118, 165)

    let promp=document.getElementsByClassName('numdays')[0]; promp.style.left= val*90/36 +5 +"%" ; 
    promp.style.borderColor =`rgb(${Math.abs(255-g+10)}, 128, 202 )` ; // `rgb(${Math.abs(255-g+10)}, 128, 202 )`
    promp.style.backgroundColor=`rgb(${g+20}, 129, 189 )`;
  }

  return (
    <div className="App">
      <SliderPage putValue={changeval} className='slider' value={timing}/>
      <Output value={timing}/>
    </div>
  );
}

export default App;
