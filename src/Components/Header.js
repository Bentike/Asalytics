import React from 'react';
import Button from './Button';
import Logo from './Logo';
import './Styles/header.css';

function Header({testid}) {
  return (
    <div data-testid={testid} className='header__wrapper'>
        <Logo/>
        <Button/>
    </div>
  )
}

export default Header;