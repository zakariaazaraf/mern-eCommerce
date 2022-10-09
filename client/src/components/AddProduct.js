import React, { useState } from 'react'

// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)


export const AddProduct = () => {
    const [files, setFiles] = useState([])
    const [name, setName] = useState('product name')
    const [description, setDescription] = useState('the description of the product')
    const [price, setPrice] = useState(120)

    /** Handle on submit form */
    const onSubmitForm = async (event) => {
        event.preventDefault();
        let { file } = files[0]
        /** TODO: Preform the validation on the product image {size, type} */
        
        let formData = new FormData()
        formData.append('title', name)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('image', file)

        let response = await fetch(`http://localhost:5000/products`, {
            method: 'POST',
            // body: JSON.stringify({ hi: 'hello' }), // convert Js object to a string
            body: formData,
            // mode: 'no-cors',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            
        })

        if (response.ok) {      
            let data = await response.json()
            console.log(data)
        }

    }

    const handleNameChange = event => setName(event.target.value)
    const handleDescriptionChange = event => setDescription(event.target.value)
    const handlePriceChange = event => setPrice(event.target.value)
    

    // TODO: Get back to the styling, It does not make sense to set the same styling for all the pages, make it dynamic
  return <form action='http://localhost:5000/products' method="POST" onSubmit={onSubmitForm} className='form' style={{paddingTop: 145}}>
    <div>
    <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={false}
        maxFiles={1}
        name="image" 
        labelIdle='Drag & Drop your product image or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  <div>
      <label htmlFor='name'>name: </label>
      <input type='text' name='name' id='name' onChange={handleNameChange} value={name} />
  </div>
  <div>
      <label htmlFor='description'>description: </label>
      <input type='text' name='description' id='description' onChange={handleDescriptionChange} value={description} />
  </div>
  <div>
      <label htmlFor='price'>price: </label>
      <input type='number' name='price' id='price' onChange={handlePriceChange} value={price} />
  </div>
  <div>
      <label htmlFor='categorieId'>categorie: </label>
        {/* TODO: Please fetch all the categories from the DB and display them for the below component */}
      {/* <select name="categorieId" id="categorieId">
          <option value={1}>Category 1</option>
          <option value={2}>Category 2</option>
          <option value={3}>Category 3</option>
          <option value={4}>Category 4</option>
          <option value={5}>Category 5</option>
      </select> */}
  </div>
  <button type='submit' className='btn'>Add User</button>
</form>
}
