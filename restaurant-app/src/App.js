import React from 'react'

import './App.css';

import Home from './Home/home';



// import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import OfferLayout from './Home/OfferLayout/OfferLayout';
import MenuItemState from './context/menuItem/menuItemState';
function App() {
  return (
  <>
 <div>
  {/* <Home></Home> */}
   {/* <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/Home" element={<Content />}/> 
    <Route path="/Menu" element={<Menu />}/> 
  </Routes> */}
  </div>
    <MenuItemState>
    <Home></Home>

    </MenuItemState>
   
     
    </>
  );
}

export default App;
