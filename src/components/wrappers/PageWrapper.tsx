import React from 'react'
import { Inter } from 'next/font/google'
import { Container, useMediaQuery } from '@mui/material'
import { COLORS, MD_NAVBAR_HEIGHT } from '@/utils/app_constants'

const inter = Inter({ subsets: ['latin'] })

interface SectionWrapperProps {
  children: React.ReactNode,
  heightAuto?: boolean,
  disabledGutters?: boolean
}

const SectionWrapper = ({ children, heightAuto = false, disabledGutters = false }: SectionWrapperProps) => {

  const isMobileScreen = useMediaQuery('(max-width: 768px)');

  return (
    <Container
      className={inter.className}
      sx={{
        backgroundColor: COLORS.DIRTY_WHITE,
        width: '100%',
        height: { xs: 'auto', md: heightAuto ? 'auto' : `calc(100vh - ${MD_NAVBAR_HEIGHT})` },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        position: 'relative'
      }}
      maxWidth={false}
      disableGutters={!isMobileScreen || disabledGutters}
    >
      {children}
    </Container>
  )
}

export default SectionWrapper