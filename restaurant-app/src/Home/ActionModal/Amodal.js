import React, { useContext,useState,useRef,Component } from "react";
import './ActionModal.css';
import '../AddMenu/AddMenu.css'
import menuContext from '../../context/menuItem/menuItemContext';
import NoodleCategory from '../Category/NoodleCategory';
import SoupCategory from '../Category/SoupCategory';
import { useParams } from "react-router-dom";
import EditModal2 from "../EditMenu/EditModal2";

const AModal = ({ handleClose, show, children ,id}) => {
    const context=useContext(menuContext);
    const {getMenIn,menIn,setmenIn,updatedMenu,updateMenuNoodles}=context;
  
  
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  
  
     const [men, setmen] = useState({id: "",name: '', price: '', category: '',description: ''});


//   const ref = useRef(null)
//   const refClose = useRef(null)

//   const updateMenu = (currentMenu) => {
//       ref.current.click();
//       setmen({id: currentMenu._id, name: currentMenu.name,price:currentMenu.price,category:currentMenu.category, description: currentMenu.description})
//   }
    // const{id}=useParams
   
  const onChange = (e) => {
      setmenIn({ ...menIn, [e.target.name]: [e.target.value] });
  }

  const handleSubmit=(e)=>{
    updatedMenu(menIn._id,menIn.name,menIn.price,menIn.category,menIn.description);

    e.preventDefault();
}
  return (
    <>
    
    <div className={showHideClassName}>
      <section className="modal-main-action">
      
        {children}
        <span id="close-modal" className="_hide-visual" >
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40" onClick={handleClose}>
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
        <button >Edit</button>
        <button>Delete</button>
        <EditModal2/>
        {/* <button type="button" size={27}onClick={handleClose}>
          Close
        </button> */}
      </section>
    </div>
    </>
  );
};

export default AModal