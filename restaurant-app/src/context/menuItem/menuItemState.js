import menuItemContext from "./menuItemContext";
import React, { useState } from "react";
import menu from "../../Home/menu";

const menuItemState = (props) => {

  const host = "http://localhost:4000"


  // const[state,setState]=useState(s1);
  const menusInitial = []
  const [menus, setMenus] = useState(menusInitial)
  const [menuNoodles, setMenuNoodles] = useState(menusInitial)
  const [menuSoup, setMenuSoup] = useState(menusInitial)
  const [menIn, setmenIn] = useState({ id: "", name: '', price: '', category: '', description: '' })
  const [showcart,setshowcart]=useState(false);

  //get menus
  const getMenus = async () => {
    // API Call 
    const response = await fetch(`${host}/api/menu/getMenu`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',

      }
    });
    const menujson = await response.json()
    setMenus(menujson)
  }

  const getMenuNoodles = async () => {
    // API Call 
    const response = await fetch(`${host}/api/menu/getMenuNoodles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',

      }
    });
    const noodlejson = await response.json()
    setMenuNoodles(noodlejson)
  }

  const getMenuSoup = async () => {
    // API Call 
    const response = await fetch(`${host}/api/menu/getMenuSoup`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',

      }
    });
    const soupjson = await response.json()
    setMenuSoup(soupjson)
  }

  const getMenIn = async (id) => {
    setmenIn({ id: id, name: '', price: '', category: '', description: '' })
    const response = await fetch(`${host}/api/menu/getIndividual/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }

    });
    const individual = await response.json()
    setmenIn(individual);
    // console.log("You clicked on: ")
    // console.log(menIn);
  }

  //add menuItems
  const addMenu = async (name, price, category, description) => {
    console.log("added menu successfully");
    const response = await fetch(`${host}/api/menu/postMenu`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      },
      body: JSON.stringify({ name, price, category, description })
    });

    const menu = await response.json();
    if (category === 'noodles') {
      setMenuNoodles(menuNoodles.concat(menu));
    }
    else if (category === 'soup') {
      setMenuSoup(menuSoup.concat(menu));
    }
    else {
      setMenus(menus.concat(menu));
    }

    setMenuItems(menuItems.concat(menu));
    setMenus(menus.concat(menu));
  }

  //deleting menuitems
  const deleteMenu = async (id) => {
    // API Call
    const confirm = window.confirm("Do you want to Delete ?")
    if (confirm == true) {
      const response = await fetch(`${host}/api/menu/deleteMenu/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
        }
      });


      const json = response.json();
      console.log("deleted menu successfully");
      const newMenuItems = menuNoodles.filter((menuItem) => { return menuItem._id !== id })
      const  newMenus=menus.filter((menu)=>{return menu._id!==id})
      const newMenuSoup = menuSoup.filter((menusoup) => { return menusoup._id !== id })

      // if(confirm==true){
      //   setMenuNoodles(newMenu);
      // }


      setMenuNoodles(newMenuItems)
      setMenuSoup(newMenuSoup)
       setMenuItems(newMenuItems)
    }
  }

  //edit menu
  const updatedMenu = async (id, name, price, category,description) => {
    // API Call 
    const response = await fetch(`${host}/api/menu/updatemenu/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
   
      },

      body: JSON.stringify({name,price,category,description})
    });
    const json = await response.json(); 

    let newMenus = JSON.parse(JSON.stringify(menuNoodles))
    // Logic to edit in client
    for (let index = 0; index < newMenus.length; index++) {
      const element = newMenus[index];
      if (element._id === id) {
        newMenus[index].name = name;
        newMenus[index].price = price;
        newMenus[index].category = category;
        newMenus[index].description = description;
        break;
      }
    }
    
    // const confirm = window.confirm("Do you want to Update details?")
    // if (confirm == true) {
    //   if (category === "noodles") {
    //     // setMenuNoodles(newMenus);
    //     setMenuNoodles(newMenus)
    //   }

    //   if (newMenus.category === "soup") {
    //     setMenuSoup(newMenus);
    //   }


    // }
   setMenuNoodles(newMenus)
  //  setMenuSoup(newMenus)
  //   setMenuItems(newMenus);
    // setMenus(newMenus)

  }


  const updateMenuNoodles = async (id, name, price, category, description) => {
    let newMenus = JSON.parse(JSON.stringify(menuNoodles))
    // Logic to edit in client
    for (let index = 0; index < newMenus.length; index++) {
      const element = newMenus[index];
      if (element._id === id) {
        newMenus[index].name = name;
        newMenus[index].price = price;
        newMenus[index].category = category;
        newMenus[index].description = description;
        break;
      }
    }
    setMenuNoodles(newMenus);
  }


  //filter

  const [menuItems, setMenuItems] = useState(menus)

  const allCategories = ['all', ...new Set(menus.map(item => item.category))];
  const [categories, setCategories] = useState(allCategories)

  let cat = "All";

  const filterItems = (category) => {
    cat = category;

    if (category === 'all') {
      setMenuItems(menus)
      return
    }
    const newItems = menus.filter((item) => item.category === category)
    setMenuItems(newItems)
    console.log(cat);
  }


  return (
    <menuItemContext.Provider value={{showcart,setshowcart, menus, setMenus, addMenu, deleteMenu, getMenus, menuNoodles, menuSoup, setMenuNoodles, setMenuSoup, getMenuNoodles, getMenuSoup, updatedMenu,updateMenuNoodles, getMenIn, menIn, setmenIn,menuItems,setMenuItems,categories,allCategories,setCategories,filterItems }}>
      {props.children}
    </menuItemContext.Provider>
  )
}

export default menuItemState;