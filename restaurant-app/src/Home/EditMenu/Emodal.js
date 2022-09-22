import React, { useContext,useState,useRef,Component } from "react";
import './editmodal.css';
import '../AddMenu/AddMenu.css'
import menuContext from '../../context/menuItem/menuItemContext';
import NoodleCategory from '../Category/NoodleCategory';
import SoupCategory from '../Category/SoupCategory';
import { useParams } from "react-router-dom";

const EModal = ({ handleClose, show, children ,id}) => {
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
    e.preventDefault();
  
    updatedMenu(menIn._id,menIn.name.toString(),Number(menIn.price),menIn.category.toString(),menIn.description.toString());
  
}
  return (
    <>
    
    <div className={showHideClassName}>
      <section className="modal-main">
      
        {children}
        <span id="close-modal" className="_hide-visual" >
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40" onClick={handleClose}>
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <h1  >Edit Form</h1>
            </div>
      
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" name='name' value={menIn.name} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input className="form-control" name='price' id="Price" value={menIn.price} onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select name="category" value={menIn.category} onChange={onChange}>
                    <option value="--">--</option>
                    <option value="noodles">Noodles</option>
                    <option value="soup">Soup</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input className="form-control" id="Description" name='description' value={menIn.description} onChange={onChange} />
            </div>



            <div className="form-group">
                <button className="form-control btn btn-primary" type="submit" onClick={handleClose} >
                    Update
                </button>
            </div>
           
        </form>
        {/* <button type="button" size={27}onClick={handleClose}>
          Close
        </button> */}
      </section>
    </div>
    </>
  );
};

export default EModal