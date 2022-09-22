import React, { useContext, useEffect, useState } from 'react'

import { RiDeleteBin2Line } from 'react-icons/ri'
import { MdModeEdit } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import menuContext from '../../context/menuItem/menuItemContext'

import '../content.css'
import Container from '../EditMenu/Container'
import Editmodal from '../EditMenu/EditModal2'
import Form from '../EditMenu/Form'
import menu from '../menu'
import EModal from '../EditMenu/Emodal'
import ActionModal from '../ActionModal/ActionModal'
const FilterCategory = ({ items, cat }) => {
    const context = useContext(menuContext);
    const { menus, setMenus, getMenus, deleteMenu, menuNoodles, menuSoup, setMenuNoodles, setMenuSoup, getMenuNoodles, getMenuSoup, getMenIn, menIn, setmenIn } = context;
    const[open,setopen]=useState(true);
    const { id } = useParams;

    //fetch noodles
    useEffect(() => {
        getMenus();
    }, [])




    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);

    };

    const onChange = (e) => {
        setmenIn({ ...menIn, [e.target.name]: [e.target.value] });
    }

    return (
        <div>
            <div className="menu">
          
                <h2 className="menu-group-heading">{cat}</h2></div>
            {/* <div className='empty-menu'>
                {items.length === 0 && 'No items to display!!'}</div> */}
            {items.map(m => (

                <div key={m._id}  >

                    <div className="content">
                        {/* <div className="menu">
      <h2 className="menu-group-heading">Noodles</h2> */}
                        <div className="menu-group">
                            <div className="menu-item">
                                {/* data:image/png;base64 */}
                                <img className="menu-item-image" src={require('../../images/soup.jpg')} alt="" />

                                <div className="menu-item-text">
                                    <h3 className="menu-item-heading">

                                        <span className="menu-item-name">{m.name}</span>
                                        <span className="menu-item-cost">{m.price}</span>
                                        {/* <button onClick={() => { getMenIn(m._id) }}>...</button> */}
                                        <RiDeleteBin2Line color="white" cursor="pointer" size={27} onClick={() => { deleteMenu(m._id) }} />
                                        {/* <MdModeEdit color="white" onClick={() => { getMenIn(m._id) }}></MdModeEdit> */}
                                        {/* <Container cursor="pointer" text={triggerText} currentmenu={m} onClick={()=>{console.log("there");getMenIn(m._id)}} onSubmit={onSubmit}>Edit</Container> */}
                                        <Editmodal id={m._id} onClick={() => { getMenIn(m._id) }}></Editmodal>
                                        {/* <ActionModal id={m._id} onClick={() => { getMenIn(m._id) }}></ActionModal> */}

                                    </h3>
                                    <div className="menu-item-description">
                                        <p>

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

export default FilterCategory
