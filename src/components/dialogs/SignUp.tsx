import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Image from 'next/image';
import { Alert, Box, IconButton, Snackbar, TextField, Typography, useMediaQuery } from '@mui/material';
import { Close } from '@mui/icons-material';
import { COLORS } from '@/utils/app_constants';
import { UserContext } from '@/auth/FirebaseAuthProvider';
import { SnackbarContext } from '../snackbar/SnackbarProvider';

export interface SignUpProps {
    open: boolean;
    onClose: () => void;
    goToSignIn: () => void;
}

export default function SignUp(props: SignUpProps) {
    const { onClose, open, goToSignIn } = props;

    const auth = React.useContext(UserContext)
    const alert = React.useContext(SnackbarContext)

    React.useEffect(() => {
        if (auth.user) {
            return onClose()
        }
    }, [auth.user])

    const isMobileScreen = useMediaQuery('(max-width: 768px)');
    const emailRef = React.useRef<string>('')
    const passwordRef = React.useRef<string>('')
    const confirmPasswordRef = React.useRef<string>('')
    const [isErrorSignUp, setIsErrorSignUp] = React.useState<{ status: boolean, message: string }>({ status: false, message: '' })

    const handleCloseSnackbar = () => {
        setIsErrorSignUp({ ...isErrorSignUp, status: false })
    }

    const handleSignUpUser = async () => {
        const emailValue = emailRef.current
        const passwordValue = passwordRef.current
        const confirmPasswordValue = confirmPasswordRef.current

        if (emailValue === '') {
            return alert.showErrorAlert('Please input your password')
        }
        if (passwordValue === '') {
            return alert.showErrorAlert('Please input your password')
        }
        if (confirmPasswordValue === '') {
            return alert.showErrorAlert('Please confirm your password')
        }

        if (passwordValue !== confirmPasswordValue) {
            return alert.showErrorAlert('Make sure that password and confirm password is matching')
        }

        await auth.signUpWithEmailAndPassword(emailValue, passwordValue)
    }

    return (
        <Dialog
            onClose={onClose}
            open={open}
            fullScreen={isMobileScreen}
            sx={{
                zIndex: 99999,
                '.MuiDialog-paper': { padding: '29px 44px', position: 'relative' }
            }}>
            {/* This is for alerts */}
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={isErrorSignUp.status} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    {isErrorSignUp.message}
                </Alert>
            </Snackbar>

            <Box
                sx={{
                    position: 'absolute',
                    width: 'calc(100% - 88px)',
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}
            >
                <IconButton
                    onClick={onClose}
                    sx={{
                        marginTop: '-10px',
                        marginRight: '-20px',
                    }}>
                    <Close sx={{
                        color: COLORS.BROWN
                    }} />
                </IconButton>
            </Box>
            <Box sx={{ position: 'relative', overflow: 'hidden', height: `53px`, width: '163px' }}>
                <Image
                    fill
                    src='/assets/logo-with-slogan.svg'
                    alt='logo'
                />
            </Box>
            <Typography
                sx={{
                    fontFamily: 'Inter',
                    fontSize: '25px',
                    fontWeight: 600,
                    lineHeight: '30px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    marginTop: '18px'
                }}
            >
                Sign Up
            </Typography>
            <Typography
                sx={{
                    marginTop: '12px',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '17px',
                    letterSpacing: '0em',
                    textAlign: 'left'
                }}
            >
                Email
            </Typography>
            <TextField
                variant='outlined'
                size='small'
                type='email'
                required
                onChange={(event) => {
                    emailRef.current = event.currentTarget.value
                }}
                sx={{
                    marginTop: '6px',
                    width: { xs: '100%', sm: '100%', md: '320px', lg: '320px' },
                }}
                inputProps={{
                    style: {
                        height: '39px',
                        padding: '2px 10px'
                    },
                }}
            />
            <Typography
                sx={{
                    marginTop: '12px',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '17px',
                    letterSpacing: '0em',
                    textAlign: 'left'
                }}
            >
                Password
            </Typography>
            <TextField
                required
                type='password'
                variant='outlined'
                size='small'
                onChange={(event) => {
                    passwordRef.current = event.currentTarget.value
                }}
                sx={{
                    marginTop: '6px',
                    width: { xs: '100%', sm: '100%', md: '320px', lg: '320px' },
                }}
                inputProps={{
                    style: {
                        height: '39px',
                        padding: '2px 10px'
                    },
                }}
            />
            <Typography
                sx={{
                    marginTop: '12px',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '17px',
                    letterSpacing: '0em',
                    textAlign: 'left'
                }}
            >
                Confirm password
            </Typography>
            <TextField
                variant='outlined'
                size='small'
                type='password'
                required
                onChange={(event) => {
                    confirmPasswordRef.current = event.currentTarget.value
                }}
                sx={{
                    marginTop: '6px',
                    width: { xs: '100%', sm: '100%', md: '320px', lg: '320px' },
                }}
                inputProps={{
                    style: {
                        height: '39px',
                        padding: '2px 10px'
                    },
                }}
            />
            <Button
                onClick={handleSignUpUser}
                variant='contained'
                sx={{
                    marginTop: '16px',
                    height: '47px',
                    width: { xs: '100%', sm: '100%', md: '320px', lg: '320px' },
                    borderRadius: '7px',
                    textTransform: 'capitalize'
                }}
            >
                Sign up
            </Button>
            <Box sx={{
                marginTop: '12px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '21px'
            }}>
                <Typography
                    role='button'
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                    onClick={goToSignIn}
                >
                    Login
                </Typography>
            </Box>
        </Dialog>
    );
}