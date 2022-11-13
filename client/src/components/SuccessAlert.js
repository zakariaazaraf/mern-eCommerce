import React, { useState } from 'react'
import { Alert, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export const SuccessAlert = ({ message, display }) => {
    console.log(message, display)
    const [showMessage, setShowMessage] = useState(true);
    // setShowError(isError)

  return <Alert severity="success" style={{ position: 'absolute', top: 110, right: 30, zIndex: 100, display: display && showMessage ? 'flex' : 'none' }}
            action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => setShowMessage(false)}
                        >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
            }
            >
            {message}
    </Alert>
}
