import React, { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import menuContext from "../../context/menuItem/menuItemContext";
import Modal from "./Emodal";
import {MdModeEdit} from 'react-icons/md'
class Editmodal extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    //  this.context=useContext(menuContext);
    //  {getMenIn,menIn,setmenIn,updatedMenu}=context;
    
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
   
    
  }

  
  showModal = ({id}) => {
    
    this.setState({ show: true });

    // this.getMenIn(id);
  };

  
  

  hideModal = () => {
    this.setState({ show: false });
  };

 
  render() {
   
    return (
      <main>
        
        <Modal show={this.state.show} id={this.id} handleClose={this.hideModal}>
          
        </Modal>
        <span  >
         <MdModeEdit color="white" size={27}cursor="pointer" type="button" onClick={this.showModal} />
       
        </span>
      </main>
    );
  }
}

export default Editmodal