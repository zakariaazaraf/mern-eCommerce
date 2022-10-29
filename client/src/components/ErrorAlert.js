import React, { useState } from 'react'
import { Alert, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export const ErrorAlert = ({ errorMessage, isError }) => {
    console.log(errorMessage, isError)
    const [showError, setShowError] = useState(true);
    // setShowError(isError)

  return <Alert severity="error" style={{ position: 'absolute', top: 110, right: 30, zIndex: 100, display: isError && showError ? 'block' : 'none' }}
            action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => setShowError(false)}
                        >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
            }
            >
            {errorMessage}
    </Alert>
}
