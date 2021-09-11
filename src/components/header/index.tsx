import React, { FC, useEffect, useState } from 'react';
import './header.scss';

const weekdays = ['Sunnuntai', 'Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai'];
const months = [
  'tammi',
  'helmi',
  'maalis',
  'huhti',
  'touko',
  'kesä',
  'heinä',
  'elo',
  'syys',
  'loka',
  'marras',
  'joulu',
];

const Header: FC = () => {
  const [date, setDate] = useState(new Date());

  setTimeout(() => {
    const date = new Date();
    setDate(date);
  }, 1000);

  return (
    <div className='header'>
      <div className='info'>
        <p className='text date'>{`${date.getDate()}`} </p>
        <p className='text date'>{`${months[date.getMonth()].toUpperCase()}`} </p>
        <p className='text date'>{`${date.getFullYear()}`}</p>
        <p className='text'>{weekdays[date.getDay()]}</p>
        <p className='text'>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</p>
      </div>
    </div>
  );
};

export default Header;
