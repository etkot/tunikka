import React from 'react';
import './menu.scss';
import tuniLogo from '../../images/tuni.png';

const Menu = (): JSX.Element => {
  return (
    <div className='menu'>
      <div className='menu-row'>
        <img className='tuni-logo' src={tuniLogo} />
      </div>
      <div className='menu-row'>
        <h1 className='title'>TUNIKKA</h1>
      </div>
    </div>
  );
};

export default Menu;
