import React, { FC } from 'react';
import Menu from '../menu';
import Map from '../map';
import './mainPage.scss';

const MainPage: FC = () => {
  return (
    <div className='mainPage'>
      <Menu />
      <div className='map-container'>
        <Map />
      </div>
    </div>
  );
};

export default MainPage;
