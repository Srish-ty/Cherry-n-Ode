import React from 'react'
import './styles/Output.styles.css';
import secjune from './images/june20/2june.jpg';
import thirjune from './images/june20/3june.jpeg';
import jul from './images/july20/Screenshot_2020-07-30-23-50-42-236.jpeg';
import jul2 from './images/july20/Screenshot_2020-07-30-23-51-11-019.jpeg';
import thirtaug from './images/august20/30 august.jpg';
import thiroaug from './images/august20/31august.jpg';
//import laug from './images/august20/30august.jpg';
import laaug from './images/august20/30august -.jpg';
import lsaug from './images/august20/30-august-.jpg';
import sep from './images/september20/5sep20.jpg';
import sisep from './images/september20/24sep/Snapchat-722323209.jpg';

export const Output = ({value}) => {
  
    var yr=Math.floor(value/12+1), mn=Math.floor(value%12);
    
    
    var months= ["June","July","August","September","October","November","December","January","February","March","April","May"];
    var monthnm = months[mn], cust='', imsrc='';
    var yrnm = 2019+yr;

    if(yr===1){
      if(mn===0){
        if (value<=0.5){cust='2nd'; imsrc=secjune;} else{cust='3rd'; imsrc=thirjune;}}
      else if(mn===1){
        if (value<=1.5){cust='30th'; imsrc=jul;} else{cust='31st'; imsrc=jul2;}}
      else if(mn===2){
        if (value<=2.25){cust='30th'; imsrc=thirtaug;} else if(value<=2.5){cust='31st'; imsrc=laaug;} else{ cust='31st';imsrc=thiroaug} }
      else if(mn===3){
        if (value<=3.25){cust='5th'; imsrc=lsaug;} else if(value<=3.5){cust='6th'; imsrc=sep;} else if(value<=3.75){imsrc=sisep} else{imsrc=sisep} }
      else if(mn===4){
        imsrc=secjune;
      }
}


  return (
    <div className='output-cont'>
        <h2 className='out-head'> 
         {cust+" "+ monthnm } { yrnm }
        </h2>
        <div className='piccont'>
          <img src={imsrc} alt='us' className='ourpic'></img>
        </div>
        
    </div>
  )
}


/*
         { value<=35 ? (`year : ${yr}`): "It's Over 💔" } <br/>
         { mn!==0? ( value<=35? `month : ${mn}`:""): "" }
*/