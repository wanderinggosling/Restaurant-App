import React, {useState,useContext}from 'react'
import { MdModeEdit } from 'react-icons/md'
import menuContext from '../../context/menuItem/menuItemContext';
import { useParams } from 'react-router-dom';
import Modal from './Amodal'
import './ActionModal.css'




const ActionModal = ({id}) => {
    const context = useContext(menuContext);
    const { getMenIn, menIn, setmenIn, updatedMenu } = context;

    const [show, setShow] = useState(false);
 


    const showModal = () => {

        setShow(true);
         getMenIn(id);

        // console.log(ide)
        // this.getMenIn(id);
    };




    const hideModal = () => {
        setShow(false);
    };
    return (
        <div>
            <main>

                <Modal show={show} handleClose={hideModal}>

                </Modal>
                

                <button  cursor="pointer"onClick={showModal}>...</button>

            </main>

        </div>
    )
}

export default ActionModal
