import React from 'react';
import AlgorandCard from './AlgorandCard';
import './Styles/algorand.css';

function Algorand() {
  return (
    <div className='algorand'>
       <AlgorandCard isAavailable/>
       <AlgorandCard />
       <AlgorandCard isAavailable/>
       <AlgorandCard isAavailable/>
       <AlgorandCard />
       <AlgorandCard isAavailable/>
       <AlgorandCard />
       <AlgorandCard isAavailable/>
       <AlgorandCard />
       <AlgorandCard />
    </div>
  )
}

export default Algorand;