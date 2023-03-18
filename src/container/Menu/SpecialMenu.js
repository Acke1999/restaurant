import { SubHeading, MenuItem } from '../../components';
import {images, data} from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app-special-menu flex-center section-padding' id='menu'>

    <div className='app-special-menu-header'>
      <SubHeading title='Menu that fits you palatte' />
      <h1 className='headtext-cormorant'>Today's Special</h1>
    </div>

    <div className='app-special-menu-menu flex-center'>
      <div className='app-special-menu-wine'>
        <p className='app-special-menu-heading'>Wine &amp; Beer</p>
        <div className='app-special-menu-items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} 
                      title={wine.title}
                      price={wine.price}
                      tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className='app-special-menu-img'>
        <img src={images.menu} alt="drinks img" />
      </div>

      <div className='app-special-menu-cocktail'>
        <p className='app-special-menu-heading'>Cocktails</p>
        <div className='app-special-menu-items'>
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} 
                      title={cocktail.title}
                      price={cocktail.price}
                      tags={cocktail.tags}/>
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom-button'>View More</button>
    </div>
  </div>
)
export default SpecialMenu;
