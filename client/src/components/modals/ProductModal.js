import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';




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

export const ProductModal = ({productId, open, setOpen}) => {
//   const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [files, setFiles] = useState([])
    const [title, setTitle] = useState('product title')
    const [description, setDescription] = useState('the description of the product')
    const [price, setPrice] = useState(120)

    /** Handle on submit form */
    const onSubmitForm = async (event) => {
        event.preventDefault();
        let { file } = files[0]
        /** TODO: Preform the validation on the product image {size, type} */
        
        let formData = new FormData()
        formData.append('name', title)
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

    const handleTitle = event => setTitle(event.target.value)
    const handleDescription = event => setDescription(event.target.value)
    const handlePrice = event => setPrice(event.target.value)

    /** Get the product for the modal */
    const getProduct = async () => {

      try {
        let response = await fetch(`http://localhost:5000/products/${productId}`);

        if (response.ok && response.status === 200) {
            let { product, exists } = await response.json()
            let { _id, name, description, price, dateAdded, coverImagePath} = product
            /** Display the product data */
            setTitle(name)
            setDescription(description)
            setPrice(price)
            // setImageSrc(coverImagePath)
        } else {
          console.log(`Something went wrong`)
        }
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
      getProduct()
    }, [productId])

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
              <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="title">Title</InputLabel>
                  <OutlinedInput
                    id="title"
                    value={title}
                    onChange={handleTitle}
                    label="Title"
                  />
              </FormControl> 

              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="description">Description</InputLabel>
                <OutlinedInput
                  id="description"
                  value={description}
                  onChange={handleDescription}
                  label="Description"
                />
              </FormControl> 
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="price">Price</InputLabel>
                  <OutlinedInput
                    id="price"
                    value={price}
                    onChange={handlePrice}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Price"
                  />
              </FormControl>      
            
           
          </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
