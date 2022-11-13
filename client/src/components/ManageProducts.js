import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { ProductModal} from './modals/ProductModal'
import { SuccessAlert } from './SuccessAlert'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export const ManageProducts = () => {

    const [products, setProducts] = useState([])
    const [showModal, setShowModal] = useState(true)
    const [open, setOpen] = useState(false)
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [display, setDisplay] = useState(false)
    const [message, setMessage] = useState('')
    const [productId, setProductId] = useState(0)

    const getProducts = async () => {
        try {
            const response = await fetch(`http://localhost:5000/products`)

            if (response.ok && response.status === 200) {
                const data = await response.json()
                // Pass the products to its state then display them
                let {products} = data
                setProducts(products)
            } else {
                console.log(`something went wrong`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const editProduct = (id) => {
        console.log('Edit product', id)
        setProductId(id)
        setOpen(true)
    }

    const deleteProduct = (id) => {

        // 1) Delete the product from the DB, make a call to the backend and show the user a meesage
        deleteProductById(id)

        // 2) Delete the row from the current array as well as the row in the DOM
        removeProductFromList(id)
    }

    const deleteProductById = async id => {
        try {
            const response = await fetch(`http://localhost:5000/products/${id}`, {
                method: 'delete'
            })
    
            if (response.ok && response.status === 200) {
                const data = await response.json()
                let {error, message} = data
                setDisplay(true)
                setMessage(message)
            } else {
                console.log(`something went wrong`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const removeProductFromList = id => {
        let filteredProducts = products.filter(product => product.id !== id)
        setProducts(filteredProducts)
    }

    useEffect(() => {
      getProducts()
    }, [])
    

  return <>
      {
        // <ErrorAlert isError={isError} errorMessage={errorMessage} />
        <SuccessAlert message={message} display={display} />
      }
       <div style={{paddingTop: 145, display: 'flex', justifyContent: 'center'}}>
        <div className='container' style={{position: 'relative'}}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="left">Description</StyledTableCell>
                    <StyledTableCell align="left">Price</StyledTableCell>
                    <StyledTableCell align="left">Date created</StyledTableCell>
                    <StyledTableCell align="left">Image</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map(product => {
                            let {id, name, description, price, created, coverImagePath} = product
                            return <StyledTableRow key={id}>
                                <StyledTableCell component="th" scope="row">
                                    {name}
                                </StyledTableCell>
                                <StyledTableCell align="left">{description}</StyledTableCell>
                                <StyledTableCell align="left">${price}</StyledTableCell>
                                <StyledTableCell align="left">{created}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <img src={coverImagePath} style={{height: 80, width: 60}}/>
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <IconButton onClick={() => editProduct(id)} >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => deleteProduct(id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </StyledTableCell>
                            </StyledTableRow>
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
        <ProductModal productId={productId} open={open} setOpen={setOpen}/>
        </div>
    </div>
  </>
  
 
}

