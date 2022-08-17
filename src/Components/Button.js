import React from 'react';
import './Styles/button.css';

function Button({testid}) {
  return (
    <div data-testid={testid}>
        <button className='header__btn'>ANALYZE ASAs</button>
    </div>
  )
}

export default Button;