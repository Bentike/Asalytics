import React from 'react';
import algo from './assets/algo-icon.png';
import './Styles/algorandCard.css';


function AlgorandCard({isAavailable}) {
  return (
    <div className='card__item'>
        <img src={algo} alt='algorand icon'/>
        <h4>Algorand</h4>
        <p 
           className={isAavailable ? 
           "status__text available" : 
           "status__text unavailable"}>
           {isAavailable ? "Available" : "Unavailable"}
        </p>
    </div>
  )
}

export default AlgorandCard;