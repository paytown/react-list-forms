import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function App(){
  const [selected, updateSelected] = useState('home');

  const content = {
    home: 'Welcome back',
    prices: '$400.000',
    contact: 'papajohns@pizzahut.gov'
  };

  return (
    <div>
      <Sidebar select={updateSelected}>
        <a onClick={() => updateSelected('home')} href="#">home</a>
        <a onClick={() => updateSelected('prices')} href="#">prices</a>
        <a onClick={() => updateSelected('contact')} href="#">contact</a>
      </Sidebar>
      <p>{content[selected]}</p>
    </div>
  );
}
