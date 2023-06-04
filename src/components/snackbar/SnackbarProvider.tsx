import { SnackbarProps } from '@mui/material'
import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { Box, Alert } from '@mui/material'

export const SnackbarContext = createContext<{
    showSuccessAlert: (message: string) => void
    showErrorAlert: (message: string) => void
}>({
    showSuccessAlert: () => { },
    showErrorAlert: () => { }
})

interface SnackbarProvider {
    children: ReactNode
}

const DEFAULT_DELAY = 6000

const SnackbarProvider = ({ children }: SnackbarProps) => {
    const [delay, setDelay] = useState(DEFAULT_DELAY)
    const [showSnackbar, setShowSnackbar] = useState<boolean>(false)
    const [isError, setIsError] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [alertMessage, setAlertMessage] = useState<string>('')

    useEffect(() => {
        const autoHideSnackbar = () => {
            setTimeout(() => {
                setShowSnackbar(false)
            }, delay)
        }

        if (showSnackbar) {
            autoHideSnackbar()
        }

    }, [showSnackbar])

    const resetSnackbar = () => {
        setIsError(false)
        setIsSuccess(false)
    }

    const showSuccessAlert = (message: string, delay?: number) => {
        resetSnackbar()
        setShowSnackbar(true)
        setIsSuccess(true)
        setDelay(delay ?? DEFAULT_DELAY)
        setAlertMessage(message)
    }

    const showErrorAlert = (message: string, delay?: number) => {
        resetSnackbar()
        setShowSnackbar(true)
        setIsError(true)
        setDelay(delay ?? DEFAULT_DELAY)
        setAlertMessage(message)
    }

    return (
        <SnackbarContext.Provider value={{ showSuccessAlert, showErrorAlert }}>
            {showSnackbar && (
                <Box
                    sx={{
                        position: 'fixed',
                        zIndex: 999999,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '12px',
                        paddingX: { xs: '15px', sm: '15px', md: '60px', lg: '115px' },
                    }}>
                    {isSuccess && <Alert severity='success' >{alertMessage}</Alert>}
                    {isError && <Alert severity='error' >{alertMessage}</Alert>}
                </Box>
            )}
            {children}
        </SnackbarContext.Provider>
    )
}

export default SnackbarProvider