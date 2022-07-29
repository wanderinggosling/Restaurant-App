import React from 'react';
import './HomeLayout.css';
import OfferLayout from '../OfferLayout/OfferLayout';


const HomeLayout = () => {
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
              <button>Explore Now</button>
            </div>
        </div>
      </div>
     
    </div>

  )
}

export default HomeLayout
