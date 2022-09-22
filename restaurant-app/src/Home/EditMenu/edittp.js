import React, { useState,useRef, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import menuContext from '../../context/menuItem/menuItemContext';
import NoodleCategory from '../Category/NoodleCategory';
import SoupCategory from '../Category/SoupCategory';

const edittp = () => {
    const context=useContext(menuContext);
  const {getMenIn,menIn,setmenIn}=context;
  const {id}=useParams;
    const init = {
        "_id": "6308aa0cd760cc46f7e15a90",
        "name": "egg soup",
        "category": "soup",
        "price": "$004",
        "description": "abcdefghijs",
        "__v": 0
    };

    useEffect(() => {
        getMenIn()
    }, [])
  return (

    <div>
       
       <div key={menIn.id}>
                    <h1>{menIn.name}</h1>
                    <h1>{menIn.category}</h1>

                </div>
    </div>
  )
}

export default edittp
