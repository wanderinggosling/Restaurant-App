import React, { useContext, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom';
// import axios from 'axios'
import { useState } from 'react';
import './home.css'
import './menu.css'
import { GrFormAdd } from 'react-icons/gr'
import AddMenu from './AddMenu/Addmenu1';
import menuContext from '../context/menuItem/menuItemContext'
import { RiDeleteBin2Line } from 'react-icons/ri'
import EditMenu from './EditMenu/EditMenu';
import { NavLink } from 'react-router-dom';
import SoupCategory from './Category/SoupCategory';
import NoodleCategory from './Category/NoodleCategory';

import Categories from './Category/Categories';
import FilterCategory from './Category/FilterCategory';

// import AddMenu from './AddMenu/AddMenu'

//import './content.css'
const menus=[{"category":"noodles"}];


const menu = (props) => {
  const context = useContext(menuContext);
  const { menus, setMenus, getMenus, deleteMenu, menuNoodles, menuSoup, setMenuNoodles, setMenuSoup, getMenuNoodles, getMenuSoup ,menuItems,setMenuItems,allCategories} = context
  
// const allCategories = ['all',...new Set(menus.map(item => item.category))];
//   useEffect(() => {
//     setMenuItems(menus)
//    }, []);

 
  const [emptymenu,setemptymenu]=useState(menus);


  const { addMenu } = context;

  const updatedMenu = (m) => {
    console.log("edit" + " " + m._id + m.name);
  }

  const [toggleAddMenu, setToggleAddMenu] = useState(false);
  useEffect(() => {
    getMenus();
  }, [])

  //for noodle category
  useEffect(() => {
    getMenuNoodles();
  }, [])



  //for soup category
  useEffect(() => {
    getMenuSoup();
  }, [])

  // const [menuItems,setMenuItems] = useState(menus)


  const [categories, setCategories] = useState(allCategories)
  const[heading,setheading]=useState("ALL");

 
  const filterItems = (category) => {
    
    if (category === 'all') {
      setMenuItems(menus)
      setheading("All");
      return
    }
    const newItems = menus.filter((item) => item.category === category)
    setMenuItems(newItems)
    setheading(category);
    console.log(category);
  }
 
  return (
    <>
      <div>
       
        <div className="add-menu">
          <button onClick={() => setToggleAddMenu(!toggleAddMenu)}><GrFormAdd color="white" />Add Menu</button>
        </div>

        {toggleAddMenu && (
          <AddMenu />
        )}
        
{/* 
        <Categories categories={categories} filterItems={filterItems} />
        
 
        <FilterCategory items={menuItems} cat ={heading}></FilterCategory> */}
        {/* <div> {menuItems.length===0 && <NoodleCategory/> }</div> */}
        <div>
        
          <NoodleCategory></NoodleCategory>
          <SoupCategory></SoupCategory>

        </div>





      </div>
    </>
  )
}


export default menu
