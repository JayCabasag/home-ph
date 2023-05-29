import { COLORS } from '@/utils/app_constants'
import { Button, ListItem } from '@mui/material'
import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
    path: string
    isActive: boolean,
    children: React.ReactNode
}

const NavLink = ({path, isActive, children }: NavLinkProps) => {  
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
            fontSize: { xs: '15px', sm: '15px', md: '16px', lg: '16px' },
            fontWeight: 500,
            lineHeight: '25px',
            textAlign: 'left',
            width: { xs: '40px', sm: '40px', md: '95px', lg: '157px' },
            height: 'auto',
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

export default NavLink