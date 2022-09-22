
import React, { useContext, useEffect, useRef } from 'react'

import { RiDeleteBin2Line } from 'react-icons/ri'
import {MdModeEdit} from 'react-icons/md'
import { useParams } from 'react-router-dom'
import menuContext from '../../context/menuItem/menuItemContext'
import '../content.css'
import Container from '../EditMenu/Container'
import Editmodal from '../EditMenu/Editmodal'
import Form from '../EditMenu/Form'
import menu from '../menu'




const NoodleCategory = (props) => {
    const context = useContext(menuContext);
    const { menus, setMenus, getMenus, deleteMenu, menuNoodles, menuSoup, setMenuNoodles, setMenuSoup, getMenuNoodles, getMenuSoup ,getMenIn,menIn,setmenIn} = context;

    const{id}=useParams;

    //fetch noodles
    useEffect(() => {
        getMenuNoodles();
    }, [])



  

    const onSubmit = (event) => {
        event.preventDefault(event);
        console.log(event.target.name.value);

    };

    const triggerText = 'Edit form';

    return (
        <div>
            <div className="menu">

                <h2 className="menu-group-heading">Noodles</h2></div>
            <div className='empty-menu'>
                {menuNoodles.length === 0 && 'No noodles to display!!'}</div>
            {menuNoodles.map(m => (

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
                                        <RiDeleteBin2Line color="white" cursor="pointer" size={27} onClick={() => { deleteMenu(m._id) }} />
                                        <MdModeEdit color="white" onClick={()=>{getMenIn(m._id)}}></MdModeEdit>
                                        {/* <Container cursor="pointer" text={triggerText} currentmenu={m} onClick={()=>{console.log("there");getMenIn(m._id)}} onSubmit={onSubmit}>Edit</Container> */}
                                           <Editmodal onClick={()=>{getMenIn(m._id)}}></Editmodal>
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

        </div>
    )
}

export default NoodleCategory

