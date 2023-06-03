import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Image from 'next/image';
import { Box, IconButton, TextField, Typography, useMediaQuery } from '@mui/material';
import { Close } from '@mui/icons-material';
import { COLORS } from '@/utils/app_constants';

export interface SignUpProps {
    open: boolean;
    onClose: () => void;
}

export default function SignUp(props: SignUpProps) {
    const { onClose, open } = props;
    const isMobileScreen = useMediaQuery('(max-width: 768px)');

    return (
        <Dialog
            onClose={onClose}
            open={open}
            fullScreen={isMobileScreen}
            sx={{
                zIndex: 99999,
                '.MuiDialog-paper': { padding: '29px 44px', position: 'relative' }
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
                sx={{
                    marginTop: '6px',
                    width: '294px'
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
                    width: '294px'
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
                sx={{
                    marginTop: '6px',
                    width: '294px'
                }}
                inputProps={{
                    style: {
                        height: '39px',
                        padding: '2px 10px'
                    },
                }}
            />
            <Button
                onClick={onClose}
                variant='contained'
                sx={{
                    marginTop: '16px',
                    height: '47px',
                    width: '294px',
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
                >
                    Login
                </Typography>
            </Box>
        </Dialog>
    );
}