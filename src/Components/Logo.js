import React from 'react';
import logo from './assets/Header_Logo.png';

function Logo({testid}) {
  return (
    <div data-testid={testid}>
        <img src={logo} alt="logo"/>
    </div>
  )
}

export default Logo;