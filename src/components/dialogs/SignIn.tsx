import * as React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

export interface SignInProps {
    open: boolean;
    onClose: () => void;
}

export default function SignIn(props: SignInProps) {
    const { onClose, open } = props;

    return (
        <Dialog onClose={onClose} open={open} sx={{ zIndex: 99999 }}>
            <DialogTitle>Sign in Dialog</DialogTitle>
            <List sx={{ pt: 0 }}>
                <Button onClick={onClose}>
                    Close dialog
                </Button>
            </List>
        </Dialog>
    );
}