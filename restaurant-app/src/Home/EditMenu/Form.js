
import React, { useState,useRef, useEffect, useContext } from 'react';
import menuContext from '../../context/menuItem/menuItemContext';
import NoodleCategory from '../Category/NoodleCategory';
import SoupCategory from '../Category/SoupCategory';
 import '../AddMenu/AddMenu.css'





export const Form = ({ onSubmit }) => {
    const context=useContext(menuContext);
  const {getMenIn,menIn,setmenIn,updatedMenu}=context;
    const init = {
        "_id": "6308aa0cd760cc46f7e15a90",
        "name": "egg soup",
        "category": "soup",
        "price": "$004",
        "description": "abcdefghijs",
        "__v": 0
    };




    const ref = useRef(null)
    const refClose = useRef(null)



    const [men, setmen] = useState({id: "",name: '', price: '', category: '',description: ''});


    const updateMenu = (currentMenu) => {
        ref.current.click();
        setmen({id: currentMenu._id, name: currentMenu.name,price:currentMenu.price,category:currentMenu.category, description: currentMenu.description})
    }

 
    const onChange = (e) => {
        setmenIn({ ...menIn, [e.target.name]: [e.target.value] });
    }

    const handleSubmit=(e)=>{
        updatedMenu(menIn._id,menIn.name,menIn.price,menIn.category,menIn.description);
        e.preventDefault();
    }

    return (
        <>   
        <form onSubmit={handleSubmit} >
            <div className="form-group">
                <h1 color='black' >Edit Form</h1>
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
                <input className="form-control" id="Description" value={menIn.description} onChange={onChange} />
            </div>



            <div className="form-group">
                <button className="form-control btn btn-primary" type="submit"  >
                    Submit
                </button>
            </div>
           
        </form>
   
    
        </>


    );
};
export default Form;