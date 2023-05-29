import * as React from 'react';
import { IconButton, Box, useMediaQuery } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Image from 'next/image';
import { CloseOutlined } from '@mui/icons-material';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

interface DraggableDialogProps {
  src: string,
  open: boolean,
  setOpen: (value: boolean) => void
}

export default function ImagePreviewerDialog({ src, open, setOpen }: DraggableDialogProps) {

  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      fullWidth={isMobileScreen}
      onClose={handleClose}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogContent sx={{ position: 'relative', padding: 0, margin: 0 }}>
        <Box sx={{ position: 'absolute', zIndex: 9, display: isMobileScreen ? 'none' : 'flex', width: '100%', justifyContent: 'flex-end' }}>
          <IconButton autoFocus onClick={handleClose}>
            <CloseOutlined sx={{ color: '#FFFFFF' }} />
          </IconButton>
        </Box>
        <Box sx={{ position: 'relative', overflow: 'hidden', height: '500px', minWidth: '500px' }} >
          <Image
            fill
            src={src}
            alt='option'
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}