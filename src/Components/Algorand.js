import React from 'react';
import { useQuery } from 'react-query';
import AlgorandCard from './AlgorandCard';
import './Styles/algorand.css';

const algorandQuery = `
query MyQuery {
  asalist {
    result {
      logo
      name
      available
    }
  }
}
`

const fetchAlgorandData = () => {
  return fetch('https://analytics-api.herokuapp.com/analytics', {
             method: "POST",
             headers: {"Content-Type" : "application/json"},
             body: JSON.stringify({query : algorandQuery})
         })
         .then(response => response.json())
 } 
 

function Algorand({testid}) {
  const {isLoading, error, data} = useQuery("ASAs", fetchAlgorandData);

  let items = data?.data?.asalist?.result; 
  
  if (isLoading) {
    return (
    <div className='loading' data-testid={testid}>
       <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921' alt="loading"/>
    </div>
    )
  }
 
  if (error){
    return(
      <div data-testid={testid}>
         <h2>Error fetching data</h2>
      </div>
    )
  }

  return (
    <div className='algorand' data-testid={testid}>
      {items.map(algo => {
        return <AlgorandCard
                  key={algo.name}
                  name={algo.name}
                  logo={algo.logo}
                  available={algo.available}
                />
      })}       
    </div>
  )
}

export default Algorand;