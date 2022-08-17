import React from 'react';
import './Styles/algorandCard.css';

function AlgorandCard({logo, name, available}) {
  return (
    <div className='card__item'>
        <img src={logo} alt='algorand icon'/>
        <h4 title='algo'>{name}</h4>
        <p 
           className={available ? 
           "status__text available" : 
           "status__text unavailable"}
           title='status'>
           {available ? "Available" : "Unavailable"}
        </p>
    </div>
  )
}

export default AlgorandCard;