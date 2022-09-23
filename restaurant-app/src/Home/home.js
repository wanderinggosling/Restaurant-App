import React, { useContext, useState,useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './home.css'
import Content from './content';
import Menu from './menu'
import './menu'
import Footer from './footer'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './HomeLayout/HomeLayout';
import OfferLayout from './OfferLayout/OfferLayout';
import Addmenu1 from './AddMenu/Addmenu1';
import EditMenu from './EditMenu/Editmodal';
import Card from './CardProfile/CardProfile'
import NoodleCategory from './Category/NoodleCategory';
import SoupCategory from './Category/SoupCategory';
import menuContext from '../context/menuItem/menuItemContext'
import Categories from './Category/Categories';
import Menulayout from '../Menulayout/Menulayout';
import ActionModal from './ActionModal/ActionModal';
import CartLayout from './CartLayout/CartLayout';



const home = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const context = useContext(menuContext);
  const { menus, setMenus, getMenus, deleteMenu, menuNoodles, menuSoup, setMenuNoodles, setMenuSoup, getMenuNoodles, getMenuSoup ,menuItems,setMenuItems,allCategories} = context
  
    
// const allCategories = ['all',...new Set(menus.map(item => item.category))];

  const [categories, setCategories] = useState(allCategories)
  const[heading,setheading]=useState("ALL");

  useEffect(()=>{
    getMenus();
},[])
 
  const filterItems = (category) => {
    
    if (category === 'all') {
      setMenuItems(menus)
      setheading("ALL");
      return
    }
    const newItems = menus.filter((item) => item.category === category)
    setMenuItems(newItems)
    setheading(category);
    console.log(category);
  }
    
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
                {/* <li ><NavLink to='/Cart'>Cart
                </NavLink>
                </li> */}
                <li ><NavLink to='/MenuLayout'>MenuLayout
                </NavLink>
                </li>
                <li ><NavLink to='/profile'>Profile
                </NavLink>
                </li>
                {/* <li ><NavLink to='/amodal'>Modal
                </NavLink>
                </li> */}
                <li ><NavLink to='/soup'>Noodle
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
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close " onClick={() => { setTimeout(() => setToggleMenu(false), 600); }} />
                        <ul className='nav-bar-smallscreen-links ' >
                            <li ><NavLink exact={`$`} to='/' onClick={() => { setTimeout(() => setToggleMenu(false), 600); }}>Home </NavLink> </li>
                            <li ><NavLink to='/Content' className='active' onClick={() => { setTimeout(() => setToggleMenu(false), 600); }}>Content</NavLink> </li>
                            <li ><NavLink to='/Offers' onClick={() => { setTimeout(() => setToggleMenu(false), 600); }}>Offers</NavLink> </li>
                            <li ><NavLink to='/Menu' onClick={() => { setTimeout(() => setToggleMenu(false), 600); }}>Menu</NavLink> </li>
                            <li ><NavLink to='/Contact' onClick={() => { setTimeout(() => setToggleMenu(false), 600); }}>Contact</NavLink> </li>
                            <li ><NavLink to='/Addmenu1' onClick={() => { setTimeout(() => setToggleMenu(false), 600); }}>AddMenu</NavLink> </li>
                            <li ><NavLink to='/noodle' onClick={() => { setTimeout(() => setToggleMenu(false), 600); }}>NoMenu</NavLink> </li>

                        </ul>
                    </div>
                )}



            </div>
            {/* Navbar Routes */}
            <Routes>
                <Route exact path="/" element={<HomeLayout />} />
                <Route path="/Home" element={<HomeLayout />} />
                <Route path="/Content" element={<Content />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/Offers" element={<OfferLayout />} />
                <Route path="/Contact" element={<Footer />} />
                <Route path="/profile" element={<Card />} />
                <Route path="/Addmenu1" element={<Addmenu1 />} />
                <Route path="/MenuLayout" element={<Menulayout />} />
                <Route path="/noodle" element={<NoodleCategory />} />
                <Route path="/soup" element={<SoupCategory />} />
                <Route path="/amodal" element={<ActionModal />} />
                <Route path="/Cart" element={<CartLayout />} />

                



            </Routes>
        </nav>

    )
}

export default home
