import React ,{useContext, useState,useEffect}from 'react'
import menuContext from '../context/menuItem/menuItemContext';
import CartLayout from '../Home/CartLayout/CartLayout';
import Categories from '../Home/Category/Categories';
import FilterCategory from '../Home/Category/FilterCategory';
import './Menulayout.css'
const Defaultmenulayout = () => {
    const context = useContext(menuContext);
    const {showcart,setshowcart,menus,getMenus,getMenIn,menIn,menuItems,setMenuItems,allCategories}=context;
   
    // const allCategories = ['all',...new Set(menuItems.map(item => item.category))];
    const onClick=(id)=>{
        //  getMenIn(id);
        // alert(id);
        setshowcart(!showcart);
     
    }

    useEffect(()=>{
        getMenus();
    },[])
  return (
    <div>
      <div className="side-category">
            {/* <Categories categories={categories} filterItems={filterItems} />  */}
        {/* <FilterCategory items={menuItems} cat ={"abc"}></FilterCategory>  */}
    {/* <div> {menuItems.length===0 && setMenuItems(menus) }</div>  */}
  
            </div>

            <div className="menus">
          
            {menus.map(m => (<div key ={m._id}className="menulayout"  >
            {showcart && <CartLayout id={ menIn._id}/>}
                <div className="menulayout-card-column" >
                    <div className="menulayout-card-heading">
                        <h1></h1></div>
                    <div className="menulayout-cards">
                        <h1>{m.name}</h1>
                        <div className="menulayout-item-image" onClick={()=>{getMenIn(m._id)}}>
                            <img src={require('../images/cnoodles.jpg')} alt="" />
                        </div>
                        <div className="menulayout-item-price">
                            <h2>Rs {m.price}</h2>
                        </div>
                        <div className="menulayout-item-addtocart">
                            <button onClick={()=>{onClick(m._id)}} >Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>))}
    </div>
</div>
  )
}

export default Defaultmenulayout
