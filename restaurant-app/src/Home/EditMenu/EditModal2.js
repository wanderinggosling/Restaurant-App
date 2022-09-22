import React, { useState, useContext, useRef } from 'react'
import Modal from './Emodal';
import { MdModeEdit } from 'react-icons/md'
import menuContext from '../../context/menuItem/menuItemContext';
import { useParams } from 'react-router-dom';

const EditModal2 = ({id}) => {


    const context = useContext(menuContext);
    const { getMenIn, menIn, setmenIn, updatedMenu } = context;

    const [show, setShow] = useState(false);
    let ide = useParams();
    const ref = useRef(null);


    const showModal = () => {

        setShow(true);
         getMenIn(id);

        console.log(ide)
        // this.getMenIn(id);
    };




    const hideModal = () => {
        setShow(false);
    };
    return (
        <div>
            <main>

                <Modal show={show} handleClose={hideModal} id={id}>

                </Modal>
              
                    <MdModeEdit color="red" size={27} cursor="pointer" type="button" onClick={showModal} />

            </main>

        </div>
    )
}

export default EditModal2
