import React, { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom';
import './home.css'
import Content from './content';
import Menu from './menu'
import './menu'
import Footer from './footer'
import Home from './home'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import HomeLayout from './HomeLayout/HomeLayout';
import OfferLayout from './OfferLayout/OfferLayout';
import AddMenu from './AddMenu/AddMenu';
import CN from '../index.css';
import {motion} from "framer-motion/dist/framer-motion";


const home = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="nav-bar">
            <ul className='nav-bar-links'>
                <div className="logo">
                    Big Bite !!
                </div>
                <li ><NavLink exact={`$`} to='/'>Home 
                 </NavLink> 
                </li>
                <li ><NavLink to='/Menu' >Menu
                </NavLink> 
                </li>
                <li ><NavLink to='/Offers'>Offers
                </NavLink> 
                </li>
                <li ><NavLink to='/Contact'>Contact
                </NavLink> 
                </li>
                <li ><NavLink to='/AddMenu'>AddMenu
                </NavLink> 
                </li>
                { /*<div className="searchbar">
                        <li className='p__opensans'> <input type="text" placeholder='Search..' /> </li>
                        <button type='submit'><AiOutlineSearch /></button>
                    </div>*/}
            </ul>
            <div className="nav-bar-smallscreen">

                <div className="hamburger">
                    <GiHamburgerMenu color="white" fontSize={27} onClick={() => setToggleMenu(true)} />
                </div>
                <div className="logo-smallscreen">
                    Big Bite !!
                </div>
                {toggleMenu && (
                    <div className={"nav-bar-smallscreen_overlay slide-forward "}>
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close " onClick={() => {setTimeout(()=>setToggleMenu(false),600);}} />
                        <ul className='nav-bar-smallscreen-links ' >
                        <li ><NavLink exact={`$`} to='/'onClick={() => {setTimeout(()=>setToggleMenu(false),600);}}>Home </NavLink> </li>
                            <li ><NavLink to='/Content' className='active' onClick={() => {setTimeout(()=>setToggleMenu(false),600);}}>Content</NavLink> </li>
                             <li ><NavLink  to='/Offers' onClick={() => {setTimeout(()=>setToggleMenu(false),600);}}>Offers</NavLink> </li>
                            <li ><NavLink to='/Menu'  onClick={() => {setTimeout(()=>setToggleMenu(false),600);}}>Menu</NavLink> </li>
                            <li ><NavLink  to='/Contact' onClick={() => {setTimeout(()=>setToggleMenu(false),600);}}>Contact</NavLink> </li>
                            <li ><NavLink  to='/AddMenu' onClick={() => {setTimeout(()=>setToggleMenu(false),600);}}>AddMenu</NavLink> </li>
                            
                        </ul>
                    </div>
                )}
                


            </div>
             {/* Navbar Routes */}
            <Routes>
        <Route exact path="/" element={<HomeLayout/>}/>
        <Route path="/Home" element={<HomeLayout/>}/>
        <Route path="/Content" element={<Content/>}/>  
        <Route path="/Menu" element={<Menu />}/> 
        <Route path="/Offers" element={<OfferLayout/>}/> 
        <Route path="/Contact" element={<Footer/>}/> 
        <Route path="/AddMenu" element={<AddMenu/>}/> 
      </Routes>
        </nav>

    )
}

export default home
