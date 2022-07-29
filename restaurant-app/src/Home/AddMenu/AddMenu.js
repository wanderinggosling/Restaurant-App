import React, { useContext,useState } from 'react'
import './AddMenu.css'
const AddMenu = () => {
  const[item,setItem]=useState({name:'',description:'',price:'',category:''})
const onchange=(e)=>{
  setItem({...item,[e.target.name]:e.target.value})
}
  return (
    <div>
      <div className="add-items">
      <form className='items' >
       <label htmlFor="name" className='item-name'>Name</label>
        <input type="text"  id="name" name='name' onChange={onchange} />
        <label htmlFor="Description" className='item-name'>Description</label>
        <textarea  id="Description" name='Description' onChange={onchange} />
        <label htmlFor="Price" className='item-name'>Price</label>
        <input type="text"  id="Price" name='Price' onChange={onchange} />
        <label htmlFor="Category" className='item-name'>Category</label>
        <input type="text"  id="Cateogry" name='Cateogry' onChange={onchange} />
     
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default AddMenu
