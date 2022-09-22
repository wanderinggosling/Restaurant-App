import React, { useState } from 'react'
import './OfferLayout.css'
const OfferLayout = () => {
    const[amt,setamt]=useState(0);
    const onClick=()=>{
        setamt(amt+12);
        console.log(amt);
    }
    return (
        <div>
            <div className="offer-heading">
                <h1>Today's Offers!!!</h1>

            </div>
            <div className="amt">
                <h1>Total:${amt}</h1>
            </div>
            <div className="offer">
                <div className="offer-card-column">
                    <div className="offer-cards">
                        <h1>Offer-cards</h1>
                        <div className="offer-item-image">
                            <img src={require('../../images/cnoodles.jpg')} alt="" />
                        </div>
                        <div className="offer-item-price">
                            <h2>$ 20</h2>
                        </div>
                        <div className="offer-item-discountprice">
                            <h2>$ 12</h2>
                        </div>
                        <div className="offer-item-addtocart">
                            <button onClick={onClick}>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="offer-card-column">
                    <div className="offer-cards">
                        <h1>Offer-cards</h1>
                        <div className="offer-item-image">
                            <img src={require('../../images/cnoodles.jpg')} alt="" />
                        </div>
                        <div className="offer-item-price">
                            <h2>$ 20</h2>
                        </div>
                        <div className="offer-item-discountprice">
                            <h2>$ 12</h2>
                        </div>
                        <div className="offer-item-addtocart">
                            <button onClick={onClick}>Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="offer-card-column">
                    <div className="offer-cards">
                        <h1>Offer-cards</h1>
                        <div className="offer-item-image">
                            <img src={require('../../images/cnoodles.jpg')} alt="" />
                        </div>
                        <div className="offer-item-price">
                            <h2>$ 20</h2>
                        </div>
                        <div className="offer-item-discountprice">
                            <h2>$ 12</h2>
                        </div>
                        <div className="offer-item-addtocart">
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="offer-card-column">

                    <div className="offer-cards">
                        <h1>Offer-cards</h1>
                        <div className="offer-item-image">
                            <img src={require('../../images/cnoodles.jpg')} alt="" />
                        </div>
                        <div className="offer-item-price">
                            <h2>$ 20</h2>
                        </div>
                        <div className="offer-item-discountprice">
                            <h2>$ 12</h2>
                        </div>
                        <div className="offer-item-addtocart">
                            <button onClick={onClick}>Add To Cart</button>
                        </div>
                    </div>
                </div>

                <div className="offer-card-column">

                    <div className="offer-cards">
                        <h1>Offer-cards</h1>
                        <div className="offer-item-image">
                            <img src={require('../../images/cnoodles.jpg')} alt="" />
                        </div>
                        <div className="offer-item-price">
                            <h2>$ 20</h2>
                        </div>
                        <div className="offer-item-discountprice">
                            <h2>$ 12</h2>
                        </div>
                        <div className="offer-item-addtocart">
                            <button onClick={onClick}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferLayout
