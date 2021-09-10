import React, { FC } from 'react';
import tuniLogo from '../../assets/images/tuni.png';
import './menu.scss';

const Menu: FC = () => {
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
