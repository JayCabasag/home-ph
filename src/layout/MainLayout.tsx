import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Fade } from '@mui/material'
import { MD_NAVBAR_HEIGHT, XS_NAVBAR_HEIGHT } from '@/utils/app_constants';
import Navbar from '@/containers/navbar/Navbar';

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <Fade in={true} timeout={300}>
    <Box sx={{ display: 'flex' }}>
      <Navbar  />
      <Box component="main" width={'100%'}>
        <Toolbar sx={{
            height: { xs: XS_NAVBAR_HEIGHT, md: MD_NAVBAR_HEIGHT},
        }}/>
        {props.children}
      </Box>
    </Box>
    </Fade>
  );
}