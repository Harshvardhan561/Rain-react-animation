import React from 'react';
import './App.css';

function App() {
    let amount =70;
  let body = document.querySelector('body');
  let i=0;
  while(i<amount){
    let drop = document.createElement('i');
    let size = Math.random()*2;
    let posx = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() *  -20;
    let duration = Math.random() * 5;
    drop.style.width= 0.2 + size +'px';
    drop.style.left= posx + 'px';
    drop.style.animationDelay = delay + 's' ;
    drop.style.animationDuration = 1 + duration + 's' ;
    body.appendChild(drop);
    i++;
  }
  return (
    <div className='outer'>
       <p className='p1'> </p>   
    </div>
  );
}

export default  App ;
