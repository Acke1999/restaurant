import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='app-menu-item'>
    <div className='app-menu-item-head'>
      <div className='app-menu-item-name'>
        <p className='p-cormorant' style={{color: '#DCCA87'}}>{title}</p>
      </div>

      <div className='app-menu-item-dash' />

      <div className='app-menu-item-price'>
        <p className='p-cormorant'>{price}</p>
      </div>
    </div>

    <div className='app-menu-item-tags'>
        <p className='p-cormorant' style={{color: '#AAA'}}>{tags}</p>
    </div>
  </div>
)

export default MenuItem;
