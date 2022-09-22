import React, { useContext, useEffect,useRef } from 'react'
// import { Link } from 'react-router-dom';
// import axios from 'axios'
import { useState } from 'react';
import './home.css'
import './menu.css'
import { GrFormAdd } from 'react-icons/gr'
import AddMenu from './AddMenu/Addmenu1';
import menuContext from '../context/menuItem/menuItemContext'
import {RiDeleteBin2Line}from 'react-icons/ri'
import EditMenu from './EditMenu/EditMenu';
import {  NavLink } from 'react-router-dom';
import SoupCategory from './Category/SoupCategory';
import NoodleCategory from './Category/NoodleCategory';

// import AddMenu from './AddMenu/AddMenu'

//import './content.css'


const menu = (props) => {
  const context = useContext(menuContext);
  const { menus, setMenus, getMenus, deleteMenu,menuNoodles,menuSoup,setMenuNoodles,setMenuSoup,getMenuNoodles,getMenuSoup } = context


  const {addMenu}=context;
  
  const updatedMenu=(m)=>{
    console.log("edit"+" "+m._id+m.name);
  }

  const [toggleAddMenu, setToggleAddMenu] = useState(false);
   //for noodle category
  useEffect(() => {
    getMenuNoodles();
  }, [])



 //for soup category
  useEffect(() => {
    getMenuSoup();
  }, [])
  return (
    <>
      <div>
        <div className="add-menu">
          <button onClick={() => setToggleAddMenu(!toggleAddMenu)}><GrFormAdd color="white" />Add Menu</button>
        </div>

        {toggleAddMenu && (
          <AddMenu />
        )}


        <NoodleCategory></NoodleCategory>
        <SoupCategory></SoupCategory>





      </div>
    </>
  )
}


export default menu
