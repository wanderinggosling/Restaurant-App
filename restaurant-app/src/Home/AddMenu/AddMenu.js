import React, {useState,useContext}from 'react'
import './AddMenu.css'
import menuContext from '../../context/menuItem/menuItemContext'
import menu from '../menu';




class AddMenu extends React.Component {
  // const context=useContext(menuContext);
  // const {addMenu}=context;
  
  constructor(props) {
    super(props);
   
    this.state = { name: '', price: '', description: '', category: '', file: null };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // const[err,setErr]=useState({nameError:'',priceError:'',descriptionError:'',categoryError:''})

  validate() {
    let nameError = '';
    let priceError = '';
    let descriptionError = '';
    let categoryError = '';
    if (!this.state.name) {
      nameError = "Name field is required";
      console.log(nameError);
    }
    if (!this.state.price) {
      priceError = "price field is required";
      console.log(priceError);
    }
    if (!this.state.description) {
      descriptionError = "description field is required";
      console.log(descriptionError);
    }
    if (!this.state.category) {
      categoryError = "category field is required";
      console.log(categoryError);
    }

    if (nameError || priceError || categoryError || descriptionError) {
      this.setState({ nameError, priceError, categoryError, descriptionError });
      return false;
    }
    return true;

  }


  

  photoUpload = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file);
  }


  handleSubmit = (event) => {
    event.preventDefault();
 
    this.addMenu(this.state.name,this.state.description,this.state.category,this.state.price);
    //event.preventDefault();
    // if (this.validate()) {
    //   alert('A form was submitted: ' + this.state.file);

    //   fetch('http://localhost:4000/api/menu/postMenu', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     // We convert the React state to JSON and send it as the POST body
    //     body: JSON.stringify(this.state)
    //   }).then(function (response) {
    //     console.log(response)
    //     return response.json();
    //   });
    // }

    event.preventDefault();
  }

  render() {
    let imgPreview;
    if (this.state.file) {
      imgPreview = <img src={this.state.file} alt='' />;
    }
    return (
      <div className={"form-container  slide-bottom"} >
        <form onSubmit={this.handleSubmit}>
          <div className="form-rows">
            <div className="form-columns">


              <div className="form-group preview">
                {imgPreview}
              </div>

              <div className="imgupload">
              <label className='form-labels'> Upload:</label>
              <input type="file" className='form-inputs' value={this.state.value} name="upload" placeholder='name' onChange={this.uploadSingleFile} />
              </div>

              <div className="name">
              <label className='form-labels'>   Name:</label>

              <input type="text" required className='form-inputs' value={this.state.value} name="name" placeholder='name' onChange={this.handleChange} />
              </div>

              <div className="price">
              <label className='form-labels'>Price:</label>

              <input type="text" required className='form-inputs' value={this.state.value} name="price" placeholder='price' onChange={this.handleChange} />
              </div>
              <div className="category">
              <label className='form-labels'required >  Category:</label>

              <select name="category" required value={this.state.value} onChange={this.handleChange}>
              <option >--</option>
                <option value="noodles">Noodles</option>
                <option value="soup">Soup</option>
              </select>

              {/* <input type="text" className='form-inputs' value={this.state.value} name="category" placeholder='category' onChange={this.handleChange} /> */}

              </div>

              <label className='form-labels'> Description:</label>

              <input type="text" className='form-inputs' required value={this.state.value} name="description" placeholder='description' onChange={this.handleChange} />

            </div>
          </div>

          <input type="submit" className='form-submit' value="Submit" />
        </form>

      </div>

    );
  }
}

export default AddMenu;