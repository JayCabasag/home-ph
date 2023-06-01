import { COLORS } from '@/utils/app_constants'
import { Button, ListItem } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface MobileNavLinkProps {
    path: string
    isActive: boolean,
    children: React.ReactNode
}


const drawerWidth = 260;

const MobileNavLink = ({path, isActive, children }: MobileNavLinkProps) => {  
  return (
    <ListItem disablePadding>
        <Link href={path}>
        <Button
            variant='text'
            disableRipple
            sx={{
            textTransform: 'capitalize',
            fontFamily: 'Inter',
            color: isActive ? COLORS.BLACK : COLORS.INACTIVE_GRAY,
            fontSize: { xs: '15px', sm: '15px', md: '17px', lg: '17px' },
            fontWeight: 500,
            lineHeight: '25px',
            textAlign: 'left',
            width: drawerWidth,
            height: '57px',
            ':hover': {
                backgroundColor: 'unset'
            },
            }}
        >
            {children}
        </Button>
        </Link>
    </ListItem>
  )
}

export default MobileNavLink