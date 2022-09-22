import React ,{useContext, useState,useEffect}from 'react'
import menuContext from '../context/menuItem/menuItemContext';
import CartLayout from '../Home/CartLayout/CartLayout';
import Categories from '../Home/Category/Categories';
import './Menulayout.css'

const menus=[{"category":"noodles"}];
const allCategories = ['all',...new Set(menus.map(item => item.category))];
const Menulayout = () => {
    const [categories, setCategories] = useState(allCategories)
    const [menuItems,setMenuItems]=useState(menus);
    // const [showcart,setshowcart]=useState(false);
    const context = useContext(menuContext);
    const {showcart,setshowcart,menus,getMenus,getMenIn,menIn}=context;
    const onClick=(id)=>{
        //  getMenIn(id);
        // alert(id);
        setshowcart(!showcart);
     
    }

    useEffect(()=>{
        getMenus();
    },[])


 
    const filterItems = (category) => {
    
        if (category === 'all') {
          setMenuItems(menus)
        //   setheading("All");
          return
        }
        const newItems = menus.filter((item) => item.category === category)
        setMenuItems(newItems)
        // setheading(category);
        console.log(category);
      }
     


    return (
        <div>  
            <div className="side-category">
            <Categories categories={categories} filterItems={filterItems} />
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
            {/* <div className="menulayout">
                <div className="menulayout-card-column">
                    <div className="menulayout-cards">
                        <h1>Item-title</h1>
                        <div className="menulayout-item-image">
                            <img src={require('../images/cnoodles.jpg')} alt="" />
                        </div>
                        <div className="menulayout-item-price">
                            <h2>$ 12</h2>
                        </div>
                        <div className="menulayout-item-addtocart">
                            <button onClick={onClick}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menulayout">
                <div className="menulayout-card-column">
                    <div className="menulayout-cards">
                        <h1>Item-title</h1>
                        <div className="menulayout-item-image">
                            <img src={require('../images/cnoodles.jpg')} alt="" />
                        </div>
                        <div className="menulayout-item-price">
                            <h2>$ 12</h2>
                        </div>
                        <div className="menulayout-item-addtocart">
                            <button onClick={onClick}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menulayout">
                <div className="menulayout-card-column">
                    <div className="menulayout-cards">
                        <h1>Item-title</h1>
                        <div className="menulayout-item-image">
                            <img src={require('../images/cnoodles.jpg')} alt="" />
                        </div>
                        <div className="menulayout-item-price">
                            <h2>$ 12</h2>
                        </div>
                        <div className="menulayout-item-addtocart">
                            <button onClick={onClick}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menulayout">
                <div className="menulayout-card-column">
                    <div className="menulayout-cards">
                        <h1>Item-title</h1>
                        <div className="menulayout-item-image">
                            <img src={require('../images/cnoodles.jpg')} alt="" />
                        </div>
                        <div className="menulayout-item-price">
                            <h2>$ 12</h2>
                        </div>
                        <div className="menulayout-item-addtocart">
                            <button onClick={onClick}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menulayout">
                <div className="menulayout-card-column">
                    <div className="menulayout-cards">
                        <h1>Item-title</h1>
                        <div className="menulayout-item-image">
                            <img src={require('../images/cnoodles.jpg')} alt="" />
                        </div>
                        <div className="menulayout-item-price">
                            <h2>$ 12</h2>
                        </div>
                        <div className="menulayout-item-addtocart">
                            <button >Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    )
}

export default Menulayout
