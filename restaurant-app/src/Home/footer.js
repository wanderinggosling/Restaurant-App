import React, { useContext } from 'react'
import './footer.css'
import menuItemContext from '../context/menuItem/menuItemContext'
const footer = () => {
  const a=useContext(menuItemContext);
  return (
    <div>
        <h1>This is About {a.name}</h1>
    </div>
  )
}

export default footer
