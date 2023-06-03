import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, Checkbox, Divider, FormControlLabel, FormGroup, IconButton, TextField, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import GoogleIcon from '@mui/icons-material/Google';
import { COLORS } from '@/utils/app_constants';
import { Close } from '@mui/icons-material';

export interface SignInProps {
    open: boolean;
    onClose: () => void;
    goToSignUp: () => void;
}

export default function SignIn(props: SignInProps) {
    const { onClose, open, goToSignUp } = props;
    const isMobileScreen = useMediaQuery('(max-width: 768px)');

    return (
        <Dialog
            onClose={onClose}
            open={open}
            fullScreen={isMobileScreen}
            sx={{
                zIndex: 99999,
                '.MuiDialog-paper': { padding: '29px 44px', position: 'absolute' }
            }}>
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
                Login
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
                variant='outlined'
                size='small'
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
            <Box sx={{
                marginTop: '6px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginBottom: '21px'
            }}>
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left'
                    }}
                >
                    Forgot password?
                </Typography>
            </Box>

            <Divider orientation="horizontal" flexItem>
                <Typography
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontWeight: 400,
                        lineHeight: '17px',
                        letterSpacing: '0em',
                        textAlign: 'left'
                    }}
                >
                    or login via
                </Typography>
            </Divider>

            <Button
                onClick={onClose}
                variant='outlined'
                sx={{
                    marginTop: '10px',
                    height: '47px',
                    width: { xs: '100%', sm: '100%', md: '320px', lg: '320px' },
                    borderRadius: '7px',
                    textTransform: 'capitalize',
                    marginBottom: '10px',
                    backgroundColor: '#ffffff'
                }}
                startIcon={<GoogleIcon />}
            >
                Google
            </Button>

            <FormGroup
                sx={{

                    padding: '0px',
                    marginLeft: '8px'
                }}
            >
                <FormControlLabel
                    control={<Checkbox sx={{ padding: '0px', paddingRight: '6px' }} defaultChecked={false} />}
                    label="Keep me signed in"
                    sx={{
                        '.MuiFormControlLabel-label': {
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '17px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                        }
                    }}
                />
            </FormGroup>
            <Button
                onClick={onClose}
                variant='contained'
                sx={{
                    marginTop: '10px',
                    height: '47px',
                    width: { xs: '100%', sm: '100%', md: '320px', lg: '320px' },
                    borderRadius: '7px',
                    textTransform: 'capitalize'
                }}
            >
                Login
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
                    role='button'
                    onClick={goToSignUp}
                >
                    Sign up
                </Typography>
            </Box>
        </Dialog>
    );
}