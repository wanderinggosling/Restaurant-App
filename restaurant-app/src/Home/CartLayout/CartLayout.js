import React, { useContext, useState,useEffect } from 'react'
import './CartLayout.css'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import menuContext from '../../context/menuItem/menuItemContext'


const CartLayout = ({id}) => {
    const [total, settotal] = useState(1);
   
  const context = useContext(menuContext);
  const {showcart,setshowcart,menus,getMenus,getMenIn,menIn}=context;
  const [amt, setamt] = useState(menIn.price);
    
  useEffect(()=>{
    // getMenIn("631f049ec47b4a06a0604c5d");
    getMenIn(id);
},[])


    // const [showcart,setshowcart]=useState(false);
    const onClick = (id,price) => {
        settotal(total + 1);
        setamt(amt +menIn.price );

    }

    
    const handleClick = () => {
        settotal(total - 1);
        setamt(amt - 12);
    }

    const buy = () => {
        alert("Your total bill is: Rs." + amt);
        setshowcart(false);
    }
    return (
    <>
       {<div className='cartlayout slide-bottom'>
                     <div className="cross">  <MdOutlineRestaurantMenu cursor={"pointer"} fontSize={27} className="overlay__close " onClick={() => { setshowcart(false) }} /></div> 

            <div className="total-amount">
                <h1>Total:Rs{" " + amt}</h1>
            </div>
            <div className="cartlayout-card-column">
                <div className="cartlayout-cards">
                    <h1>{menIn.name}</h1>
                    <div className="cartlayout-item-image">
                        <img src={require('../../images/cnoodles.jpg')} alt="" />
                    </div>
                    <div className="cartlayout-item-price">
                        <h2>Rs {menIn.price}</h2>
                    </div>
                    <div className="cartlayout-item-addsubtract">
                        <div className="add-quantity">
                            <button id="subtract" onClick={handleClick}>-</button>
                            <label htmlFor="t1">{total}</label>
                            <button id="add" onClick={onClick}>+</button>

                        </div>
                    </div>
                    <div className="cartlayout-item-buy">
                        <button id="add" onClick={buy} >Buy</button>
                    </div>
                </div>
            </div>

        </div>}
        </>
    )
}

export default CartLayout
