import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import './home.css'
import './menu.css'
import {GrFormAdd} from 'react-icons/gr'
import AddMenu from './AddMenu/AddMenu'

//import './content.css'


const menu = () => {
  //for noodle category
  useEffect(() => {
    fetchNoodleData();
  }, []);
  const [menusNoodles, setMenus] = useState([]);
  const fetchNoodleData = async () => {
    const result = await fetch('http://localhost:4000/noodles');
    const menuNoodles = await result.json();
    setMenus(menuNoodles);
    console.log("HI");
  };

  //for soup category
  useEffect(() => {
    fetchSoupData();
  }, []);
  const [menuSoup, setSoup] = useState([]);
  const fetchSoupData = async () => {
    const soup = await fetch('http://localhost:4000/soup');
    const menuSoup = await soup.json();
    setSoup(menuSoup);
    console.log("Soup");
  };



  //demo
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('/Menu');
    const items = await data.json();
    setItems(items);
  };
  //
  return (
    <>
    <div>
    <div className="add-menu">
      <button to="./AddMenu/AddMenu.js"><GrFormAdd color="white"/>Add Menu</button>
    </div>


    <div className="menu">
                <h2 className="menu-group-heading">Noodles</h2></div>
      {
    
        menusNoodles.map(m => (
          <div key={m.id}>
            <div className="content">
              {/* <div className="menu">
                <h2 className="menu-group-heading">Noodles</h2> */}
                <div className="menu-group">
                  <div className="menu-item">
                    <img className="menu-item-image" src={"data:image/png;base64,"+m.Image} alt="Image not found" />
                    <div className="menu-item-text">
                      <h3 className="menu-item-heading">
                        <span className="menu-item-name">{m.Name}</span>
                        <span className="menu-item-cost">{m.price}</span>
                      </h3>
                      <div className="menu-item-description">
                        <p>
                          {m.Description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       
        ))
      }
      <div className="menu">
                <h2 className="menu-group-heading">Soup</h2></div>
      {
        menuSoup.map(ms => (
          <div key={ms.id}>
            <div className="content">
             { /*<div className="menu">
                <h2 className="menu-group-heading">{ms.category}</h2>*/}
                <div className="menu-group">
                  <div className="menu-item">
                    <img className="menu-item-image" src={"data:image/png;base64,"+ms.Image} alt="" />
                    <div className="menu-item-text">
                      <h3 className="menu-item-heading">
                        <span className="menu-item-name">{ms.Name}</span>
                        <span className="menu-item-cost">{ms.price}</span>
                      </h3>
                      <div className="menu-item-description">
                        <p>
                          {ms.Description}
                        </p>
                      </div>

                    </div>
                  </div>

                </div>


              </div>
            </div>
       
        ))

      }




      {/* {
    
        items.map(item => (
          <div>
            <div className="content">
        <div className="menu">
          <h2 className="menu-group-heading">{item.Category}</h2>
          <div className="menu-group">
            <div className="menu-item">
              <img className="menu-item-image" src={require("../images/noodles.jpg")} alt="" />
              <div className="menu-item-text">
                <h3 className="menu-item-heading">
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-cost">{item.Price}</span>
                </h3>
                <div className="menu-item-description">
                  <p>
                   {item.Category}
                  </p>
                </div>

              </div>
            </div>

          </div>

   
        </div>
      </div>

            <p >{item.name}</p>
            <p >{item.Category}</p>
            <p >{item.Price}</p>
          </div>
        ))
      } */}
</div>
    </>
  )
}


export default menu
