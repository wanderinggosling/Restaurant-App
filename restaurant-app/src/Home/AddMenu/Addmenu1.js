import React, {useState,useContext}from 'react'
import './AddMenu.css'
import menuContext from '../../context/menuItem/menuItemContext'

const Addmenu1 = () => {
    const context=useContext(menuContext);
  const {addMenu}=context;
  
  const [menu, setMenuItem] = useState({name: '', price: '', category: '',description: ''})

  
  const handleSubmit= (e)=>{
    e.preventDefault();
    addMenu(menu.name, menu.price,menu.category, menu.description);
    setMenuItem({name: '', price: '', category: '',description: ''})
}

  
const handleChange = (e)=>{
  setMenuItem({...menu, [e.target.name]: e.target.value})
}

  return (
    <div className={"form-container  slide-bottom"} >
    <form onSubmit={handleSubmit}>
      <div className="form-rows">
        <div className="form-columns">


        

          <div className="imgupload">
          <label className='form-labels'> Upload:</label>
          <input type="file" className='form-inputs'  name="upload" placeholder='name' />
          </div>

          <div className="name">
          <label className='form-labels'> Name:</label>

          <input type="text" required className='form-inputs' value={menu.name} name="name" placeholder='name' onChange={handleChange} />
          </div>

          <div className="price">
          <label className='form-labels'>Price:</label>

          <input type="text" required className='form-inputs' value={menu.price} name="price" placeholder='price' onChange={handleChange} />
          </div>
          <div className="category">
          <label className='form-labels'required >  Category:</label>

          <select name="category" value={menu.category} onChange={handleChange}>
          <option value="--">--</option>
            <option value="noodles">Noodles</option>
            <option value="soup">Soup</option>
          </select>

          {/* <input type="text" className='form-inputs' value={this.state.value} name="category" placeholder='category' onChange={this.handleChange} /> */}

          </div>

          <label className='form-labels'> Description:</label>

          <input type="text" className='form-inputs' required value={menu.description} name="description" placeholder='description' onChange={handleChange} />

        </div>
      </div>

      <input type="submit" className='form-submit' value="Submit" />
    </form>

  </div>
  )
}

export default Addmenu1
