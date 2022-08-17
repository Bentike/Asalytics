import React from 'react';
import Button from './Button';
import Logo from './Logo';
import './Styles/header.css';

function Header({testid}) {
  return (
    <div data-testid={testid} className='header__wrapper'>
        <Logo testid='logo'/>
        <Button testid='btn'/>
    </div>
  )
}

export default Header;