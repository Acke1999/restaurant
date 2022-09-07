import React from 'react';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import './Gallery.css';


const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;
    direction ==='left' ? current.scrollLeft -= 300 : current.scrollLeft += 300;
  };

  return (
    <div className='app-gallery flex-center'>
      <div className='app-gallery-content'>
        <SubHeading  title='Instagram'/>
        <h1 className='headtext-cormorant'>Photo Gallery</h1>
        <p className='p-opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                  Expedita, libero necessitatibus dolore dolor aperiam cupiditate!
        </p>
        <button type='button' className='custom-button'>View More</button>
      </div>

      <div className='app-gallery-img'>
        <div className='app-gallery-img-container' ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
            <div className='app-gallery-img-card flex-center' key={`gallery-img-${index + 1}`}>
              <img src={image} alt="gallery"/>
              <BsInstagram className='gallery-img-icon' />
            </div>
          ))}
        </div>

        <div className='app-gallery-img-icon'>
          <BsArrowLeftShort className='gallery-arrow' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery-arrow' onClick={() => scroll('right')} />
        </div>
      </div> 
    </div>
  )
}

export default Gallery;
