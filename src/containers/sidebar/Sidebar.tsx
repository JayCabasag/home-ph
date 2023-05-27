import { Box, List, ListItem } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useState, useEffect } from 'react'
import { Close } from '@mui/icons-material';
import { COLORS, MD_NAVBAR_HEIGHT, XS_NAVBAR_HEIGHT } from '@/utils/app_constants';
import { IconButton, Typography } from '@mui/material';
import Image from 'next/image';


const sidebarTab = ['overview', 'reviews', 'gallery']

interface SidebarProps {
    property: any
    open: boolean
    handleToggleSidebar: () => void
}

export default function Sidebar({ property, open, handleToggleSidebar }: SidebarProps) {

    const [totalStarRatings, setTotalStarRatings] = useState<number[]>([])
    const [selectedTab, setSelectedTab] = useState('overview')

    const generateStars = (ratingValue: number) => {
        let rating = ratingValue
        let initialRatingArray = []
        while (rating > 0) {
            initialRatingArray.push(rating)
            rating--
        }
        setTotalStarRatings(initialRatingArray)
    }

    useEffect(() => {
        if (!property.rating) return
        generateStars(property.rating)
    }, [property.rating])
    
    return (
        <Box>
            <Drawer
                anchor='right'
                open={open}
                onClose={handleToggleSidebar}
            >
                <Box
                    sx={{
                        paddingTop:{ xs: XS_NAVBAR_HEIGHT, sm: XS_NAVBAR_HEIGHT, md: MD_NAVBAR_HEIGHT, lg: MD_NAVBAR_HEIGHT},
                        width: { xs: '100vw', sm: '100vw', md: '480px', lg: '480px'}
                    }}
                    role="presentation"
                >
                <Box sx={{ width: '100%', position: 'absolute', zIndex: 2 }}>
                    <IconButton onClick={handleToggleSidebar}>
                        <Close sx={{ color: '#FFFFFF' }}/>
                    </IconButton>
                </Box>
                <Box
                    sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    height: '236px'
                    }}
                >
                    <Image
                        src={property.mainImage}
                        fill
                        alt={property.name}
                    />
                </Box>
                <Box sx={{ paddingLeft: '19px' }}>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontSize: {xs: '20px', sm: '20px',md: '22px', lg: '22px'},
                            fontWeight: 600,
                            lineHeight: '23px',
                            letterDpacing: '0em',
                            textAlign: 'left',
                            marginTop: '16px',         
                        }}>{property.name}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex',marginTop: {xs: '8px', sm: '8px',md: '13px', lg: '13px'}, alignItems: 'center', gap: '7px'   }}>
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontSize: {xs: '14px', sm: '14px',md: '16px', lg: '16px'},
                            fontWeight: 400,
                            lineHeight: '23px',
                            letterSpacing: '0em',
                            textAlign: 'left',                  
                        }}>{property.rating}</Typography>
                        <Box sx={{ display: 'flex', gap: '4px' }}>
                            {totalStarRatings.map((totalStarRating, index) => {
                              if (totalStarRating >= 1) {
                                return (
                                <Box sx={{ position: 'relative', overflow: 'hidden', height: '15px', width: '15px'}} key={index}>
                                    <Image
                                        fill
                                        src='/assets/yellow-star.svg'
                                        alt='rating-star'
                                    />
                                </Box>)
                              }
                              return (
                                <Box sx={{ position: 'relative', overflow: 'hidden', height: '15px', width: '15px'}} key={index}>
                                    <Box sx={{ height: '15px', width: '15px',backgroundColor: '#FFFFFF', position: 'absolute', zIndex: 3, marginLeft: '7px'}}></Box>
                                    <Box sx={{ position: 'relative', overflow: 'hidden', height: '15px', width: '15px'}} key={index}>
                                        <Image
                                            fill
                                            src='/assets/yellow-star.svg'
                                            alt='rating-star'
                                            style={{ zIndex: 2 }}
                                        />
                                    </Box>
                                </Box>
                               )
                            })}
                        </Box>
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontSize: {xs: '14px', sm: '14px',md: '16px', lg: '16px'},
                            fontWeight: 400,
                            lineHeight: '23px',
                            letterSpacing: '0em',
                            textAlign: 'left',                  
                        }}>({10})</Typography>
                    </Box>
                    <Box sx={{
                        marginTop: {xs: '6px', sm: '6px',md: '13px', lg: '13px'},
                    }}>
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontSize: {xs: '15px', sm: '15px',md: '18px', lg: '18px'},
                            fontWeight: 400,
                            lineHeight: '23px',
                            letterSpacing: '0em',
                            textAlign: 'left',                  
                        }}>{property.type[0]}</Typography>
                    </Box>
                    </Box>
                    <Box sx={{ marginTop: { xs: '10px', sm: '10px', md: '18px', lg: '18px' }, borderBottom: '1px solid gray'}}>
                        <List disablePadding sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            {sidebarTab.map((tab: string, index: number) => {
                                const isActiveTab = tab === selectedTab
                                return  <ListItem onClick={() => setSelectedTab(tab)} disableGutters key={index} sx={{
                                    fontFamily: 'Inter',
                                    fontSize: { xs: '14px', sm: '14px', md: '18px', lg: '18px' },
                                    fontWeight: isActiveTab ? 500 : 400,
                                    lineHeight: '23px',
                                    letterSpacing: '0em',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    cursor: 'pointer',
                                    paddingY: '15px',
                                    borderBottom:  isActiveTab ? `2px solid ${COLORS.BLACK}` : 'none',
                                    textTransform: 'capitalize'
                                     }}>{tab}</ListItem>
                            })}
                        </List>
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
}