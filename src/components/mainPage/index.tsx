import React, { FC } from 'react';
import Menu from 'src/components/menu';
import './mainPage.scss';

const MainPage: FC = () => {
  return (
    <div className='mainPage'>
      <Menu />
    </div>
  );
};

export default MainPage;
