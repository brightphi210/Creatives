
import React from 'react'
import { useState, Navigate } from 'react';
import Axios from 'axios';
import './CSS/dashCreatePart.css'
import uploadImage from './images/upload.png'

const DashCreatePart = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(uploadImage);


    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    
        // Convert the image to a Base64 string
        const reader = new FileReader();
        reader.onload = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };




    //   ==================== create Api ===========================
    const [redirect, setRedirect] = useState(false) 
    const [productName, setProductName] = useState('');
    const [description, setProductDescription] = useState('');


    let url = 'http://127.0.0.1:8000/api/products/'

    async function handleSubmit(e) {
        e.preventDefault();
      
        const productData = {
          name: productName,
          description: description,
          // Other product attributes
        };
      
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
          });
      
          // Handle response (e.g., show success message)
        } catch (error) {
          // Handle error (e.g., show error message)
        }
      }


    if(redirect){
        return <Navigate to='/dashboard/create' />
    }


  return (
    <div>
        <section className='dashCreatePart'>
            <h2><i class="uil uil-lightbulb-alt"></i> Create Work Here</h2>
            <div className='dashCreateDiv'>
                <form action="" className='dashCreateformDiv' onSubmit={handleSubmit}>
                    <div className='formDivOne'>

                        <div className='inputOne'>
                            <label>Work Name</label>
                            <input 
                                  value={productName}
                                  onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>

                        <label className='myCategory'>Category</label>
                        <select id="mySelect">
                            <option selected>-- select category -- </option>
                            <optgroup label="Web and Mobile">
                                <option value="Mobile App">Mobile App</option>
                                <option value="Website">Website Dev</option>
                            </optgroup>

                            <optgroup label="Furnitures">
                                <option value="Chair">Chairs</option>
                                <option value="Tables">Tables</option>
                            </optgroup>

                            <optgroup label="Fashions">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </optgroup>
                        </select> 

                        <div className='inputTwo'>
                            <label>Work Description</label>
                            <textarea 
                                 value={description}
                                 onChange={(e) => setProductDescription(e.target.value)}
                            ></textarea>
                        </div>

                    </div>

                    <div className='formDivTwo'>
                        <img src={imagePreview} alt="Selected" />
                        <p>Upload a fileNo file chosen or drag and drop</p>
                        <span>PNG, JPG, GIF up to 2MB</span>
                        <input type="file" accept="image/*"/>
                    </div> 

                    <div className='myBtn'>
                        <button type='submit'>Upload <i class="uil uil-arrow-up-right"></i></button>
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}

export default DashCreatePart
