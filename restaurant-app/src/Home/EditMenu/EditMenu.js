import React , {useState,useRef,useContext}from 'react'
import './EditMenu.css'
import menuContext from '../../context/menuItem/menuItemContext'
const EditMenu = () => {
    
    const context=useContext(menuContext);
  const {addMenu,updatedMenu}=context;
  const ref = useRef(null)
  const refClose = useRef(null)

  const [emenu,setemenuItem]=useState({id: "",ename: '', eprice: '', ecategory: '',edescription: ''})
  const currentMenu={ "_id": "6308aa0cd760cc46f7e15a90",
  "name": "egg soup",
  "category": "soup",
  "price": "$004",
  "description": "abcdefghijs",
  "__v": 0};
  
  const updateMenu = (currentMenu) => {
      ref.current.click();
      setemenuItem({id: currentMenu._id, ename: currentMenu.name, edescription: currentMenu.description})
  }
    const [menu, setMenuItem] = useState({name: '', price: '', category: '',description: ''})

  
    const handleSubmit= (e)=>{
      e.preventDefault();
    
  }
  
  const handleClick = (e)=>{ 
    updatedMenu(emenu.id, emenu.ename,emenu.eprice,emenu.ecategory, emenu.edescription)
    refClose.current.click();
}
    
  const handleChange = (e)=>{
    setemenuItem({...emenu, [e.target.name]: e.target.value})
  }


  return (
    <>
    <button id="myBtn">Open Modal</button>


<div id="myModal" className="modal">

 
  <div className="modal-content">
    <span className="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
</>
  )
}

export default EditMenu
