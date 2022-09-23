import React ,{useContext} from 'react';
import './HomeLayout.css';
import { NavLink } from 'react-router-dom';
import menuContext from '../../context/menuItem/menuItemContext';
// import OfferLayout from '../OfferLayout/OfferLayout';
// import Card from '../CardProfile/CardProfile'


const HomeLayout = () => {
  const context = useContext(menuContext);
  const { menus, setMenus, getMenus, deleteMenu, menuNoodles, menuSoup, setMenuNoodles, setMenuSoup, getMenuNoodles, getMenuSoup ,menuItems,setMenuItems,allCategories} = context
  
  return (
    <div>
      <div className="homelayout">
        <div className="homelayout-right">
          <img src={require("../../../src/images/noodles.jpg")} alt="" />
        </div>
        <div className="homelayout-left">
          <div className="homelayout-left-heading">
            <h2>This is heading</h2>
          </div>
            <div className="homelayout-left-content">
              <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae pariatur incidunt debitis dicta beatae, quidem iusto at molestias error dignissimos autem fuga quae magni dolorum nemo. Reiciendis, id repudiandae.</h5>
            </div>
            <div className="homelayout-left-button">
             <NavLink to="/Offers"> <button>Explore Now</button></NavLink>
            </div>
        </div>
      </div>

     
    </div>

  )
}

export default HomeLayout
