import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


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
import { redirect } from 'react-router-dom'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const ProductModal = ({open, setOpen}) => {
//   const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('image', file)

        let response = await fetch(`http://localhost:5000/products`, {
            method: 'POST',
            body: formData,
        })

        if (response.ok) {      
            let data = await response.json()
            console.log(data)
            // redirect()
        }

    }

    const handleNameChange = event => setName(event.target.value)
    const handleDescriptionChange = event => setDescription(event.target.value)
    const handlePriceChange = event => setPrice(event.target.value)

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {/* <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography> */}
            <form action='http://localhost:5000/products' method="POST" onSubmit={onSubmitForm} className='form'>
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
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
