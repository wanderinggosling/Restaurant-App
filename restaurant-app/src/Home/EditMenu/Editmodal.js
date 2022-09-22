import React, { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import menuContext from "../../context/menuItem/menuItemContext";
import Modal from "./Emodal";
class Editmodal extends Component {
  
  constructor(props, context) {
    super();
    this.state = {
      show: false
    };

    //  this.context=useContext(menuContext);
    //  {getMenIn,menIn,setmenIn,updatedMenu}=context;
    
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  //  this.id=useParams();
    
  }

  
  showModal = (id) => {
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
        <button  cursor="pointer" type="button" onClick={this.showModal}>
          Open
        </button>
      </main>
    );
  }
}

export default Editmodal