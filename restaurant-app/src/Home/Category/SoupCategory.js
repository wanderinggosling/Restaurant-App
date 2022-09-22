import React, { useContext, useEffect,useRef } from 'react'

import { RiDeleteBin2Line } from 'react-icons/ri'
import menuContext from '../../context/menuItem/menuItemContext'
import '../content.css'

const SoupCategory = () => {
    const context = useContext(menuContext);
    const { menus, setMenus, getMenus, deleteMenu, menuNoodles, menuSoup, setMenuNoodles, setMenuSoup, getMenuNoodles, getMenuSoup } = context;


    //for soup category
    useEffect(() => {
        getMenuSoup();
    }, [])

    const updatedMenu=(m)=>{
        console.log("edit"+" "+m._id+m.name);
      }

    return (
        <div>
            <div className="menu">
                <h2 className="menu-group-heading">Soup</h2></div>
            <div className='empty-menu'>
                {menuSoup.length === 0 && 'No soup to display!!'}</div>
            {
                menuSoup.map(ms => (
                    <div key={ms._id}>
                        <div className="content">
                            { /*<div className="menu">
                <h2 className="menu-group-heading">{ms.category}</h2>*/}
                            <div className="menu-group">
                                <div className="menu-item">
                                    <img className="menu-item-image" src={require('../../images/soup.jpg')/*"data:image/png;base64,"+ms.Image*/} alt="" />
                                    <div className="menu-item-text">
                                        <h3 className="menu-item-heading">
                                            <span className="menu-item-name">{ms.name}</span>
                                            <span className="menu-item-cost">{ms.price}</span>
                                            <RiDeleteBin2Line color="white" cursor="pointer" size={27} onClick={() => { deleteMenu(ms._id) }} />
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

        </div>
    )
}

export default SoupCategory
