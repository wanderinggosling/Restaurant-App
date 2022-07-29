import React from 'react'
import logo from './logo.svg';
import './App.css';
import { FaHeart } from "react-icons/fa";
import Home from './Home/home';
import Content from './Home/content';
import Footer from './Home/footer';
import Navbar from './nav-bar/navbar';
import HomeLayout from './Home/HomeLayout/HomeLayout';
import Menu from './Home/menu';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import OfferLayout from './Home/OfferLayout/OfferLayout';

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
     <Home></Home>
     
    </>
  );
}

export default App;
