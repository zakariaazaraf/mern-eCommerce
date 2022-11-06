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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const ManageProducts = () => {

    const [products, setProducts] = useState([])

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
    }

    const deleteProduct = id => {
        // 1) Delete the row from the current array as well as the row in the DOM
        removeProductFromList(id)
        // 1) Delete the product from the DB, make a call to the backend and show the user a meesage
        deleteProductById(id)
    }

    const deleteProductById = async id => {
        try {
            const response = await fetch(`http://localhost:5000/products/${id}`, {
                method: 'delete'
            })
    
            if (response.ok && response.status === 200) {
                const data = await response.json()
                console.log(data)
            } else {
                console.log(`something went wrong`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const removeProductFromList = id => {
        console.log(`deleting a product from a list`)
    }

    useEffect(() => {
      getProducts()
    }, [])
    

  return <div style={{paddingTop: 145, display: 'flex', justifyContent: 'center'}}>
        <div className='container'>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="right">Description</StyledTableCell>
                    <StyledTableCell align="right">Price</StyledTableCell>
                    <StyledTableCell align="right">Date created</StyledTableCell>
                    <StyledTableCell align="right">Image</StyledTableCell>
                    <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        products.map(product => {
                            let {id, name, description, price, dateAdded, coverImagePath} = product
                            return <StyledTableRow key={id}>
                            <StyledTableCell component="th" scope="row">
                                {name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{description}</StyledTableCell>
                            <StyledTableCell align="right">${price}</StyledTableCell>
                            <StyledTableCell align="right">{dateAdded}</StyledTableCell>
                            <StyledTableCell align="right">
                                <img src={coverImagePath} style={{height: 80, width: 60}}/>
                            </StyledTableCell>
                            <StyledTableCell align="right">
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
        </div>
    </div>
}

