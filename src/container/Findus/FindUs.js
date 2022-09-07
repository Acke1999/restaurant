import React from 'react';
import {SubHeading} from '../../components';
import {images} from '../../constants';

const FindUs = () => (
  <div className='app-bg app-wrapper section-padding' id='contact'>
    <div className='app-wrapper-info'>
      <SubHeading title='Contact'/>
      <h1 className='headtext-cormorant' style={{marginBottom: '4rem'}}>Find Us</h1>
      <p className='p-opensans' style={{color: 'var(--color-grey)'}}>
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG 
      </p>
      <p className='p-cormorant' style={{margin: '2rem 0', color: '#DCCA87'}}>Opening Hours</p>
      <p className='p-opensans'>Mon - Fri: 10:00am - 02:00am</p>
      <p className='p-opensans' style={{marginBottom: '3rem'}}>Sat - Sun: 10:00am - 03:00am</p>
      <button type='button' className='custom-button'>Visit Us</button>
    </div>
    <div className='app-wrapper-img'>
      <img src={images.findus} alt="find us" />
    </div>
  </div>
)


export default FindUs;
