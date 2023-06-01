import { Box, List, ListItem } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { useState, useEffect } from 'react'
import { Close } from '@mui/icons-material';
import { COLORS, MD_NAVBAR_HEIGHT, PropertyCategory, XS_NAVBAR_HEIGHT } from '@/utils/app_constants';
import { IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import OverviewTab from './OverviewTabs';
import ReviewsTab from './ReviewsTab';
import GalleryTab from './GalleryTab';
import { galleryImagesData } from '@/utils/tests';


const sidebarTab = ['overview', 'reviews', 'gallery']

interface SidebarProps {
    property: any
    open: boolean
    handleToggleSidebar: () => void
}

export default function Sidebar({ property, open, handleToggleSidebar }: SidebarProps) {

    const [totalStarRatings, setTotalStarRatings] = useState<number[]>([])
    const [selectedTab, setSelectedTab] = useState('overview')
    const propertyCategory = property.category
    const isForRent = propertyCategory === PropertyCategory.FOR_RENT
    const isForSale = propertyCategory === PropertyCategory.FOR_SALE
    const galleryImages = galleryImagesData.images
    const totalGalleryImages = galleryImagesData.totalPhotos

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
                        paddingTop: { xs: XS_NAVBAR_HEIGHT, sm: XS_NAVBAR_HEIGHT, md: MD_NAVBAR_HEIGHT, lg: MD_NAVBAR_HEIGHT },
                        width: { xs: '100vw', sm: '100vw', md: '480px', lg: '480px' }
                    }}
                    role="presentation"
                >
                    <Box sx={{ width: '100%', position: 'absolute', zIndex: 2 }}>
                        <IconButton onClick={handleToggleSidebar}>
                            <Close sx={{ color: '#FFFFFF' }} />
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
                    <Box sx={{ width: '100%', position: 'absolute', zIndex: 2, transform: 'translate(-100%, -100%)', marginLeft: '100%', marginTop: '-15px', backgroundColor: '#FFFFFF', maxWidth: 'max-content' }}>
                        <Typography sx={{
                            paddingX: '15px'
                        }}>
                            {isForRent && `Php ${Number(property.price.amount).toLocaleString()}/${property.price.type}`}
                            {isForSale && `Php ${Number(property.price.amount).toLocaleString()}`}
                        </Typography>
                    </Box>
                    <Box sx={{ paddingLeft: '19px' }}>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                gap: '5px'
                            }}
                        >
                            <Typography sx={{
                                fontFamily: 'Inter',
                                fontSize: { xs: '20px', sm: '20px', md: '22px', lg: '22px' },
                                fontWeight: 600,
                                lineHeight: '23px',
                                letterDpacing: '0em',
                                textAlign: 'left',
                                marginTop: '16px',
                            }}>{property.name}</Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '12px', sm: '12px', md: '14px', lg: '14px' },
                                    backgroundColor: isForSale ? 'green' : COLORS.BROWN,
                                    minWidth: 'max-content',
                                    color: COLORS.WHITE,
                                    padding: { xs: '2px 6px', sm: '2px 6px', md: '5px 15px', lg: '5px 15px' },
                                    borderRadius: '5px',
                                    textTransform: 'capitalize',
                                    marginTop: '16px',
                                    marginRight: '19px'
                                }}
                            >
                                {isForRent && 'For rent'}
                                {isForSale && 'For sale'}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', marginTop: { xs: '8px', sm: '8px', md: '13px', lg: '13px' }, alignItems: 'center', gap: '7px' }}>
                            <Typography sx={{
                                fontFamily: 'Inter',
                                fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' },
                                fontWeight: 400,
                                lineHeight: '23px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                            }}>{property.rating}</Typography>
                            <Box sx={{ display: 'flex', gap: '4px' }}>
                                {totalStarRatings.map((totalStarRating, index) => {
                                    if (totalStarRating >= 1) {
                                        return (
                                            <Box sx={{ position: 'relative', overflow: 'hidden', height: '15px', width: '15px' }} key={index}>
                                                <Image
                                                    fill
                                                    src='/assets/yellow-star.svg'
                                                    alt='rating-star'
                                                />
                                            </Box>)
                                    }
                                    return (
                                        <Box sx={{ position: 'relative', overflow: 'hidden', height: '15px', width: '15px' }} key={index}>
                                            <Box sx={{ height: '15px', width: '15px', backgroundColor: '#FFFFFF', position: 'absolute', zIndex: 3, marginLeft: '7px' }}></Box>
                                            <Box sx={{ position: 'relative', overflow: 'hidden', height: '15px', width: '15px' }} key={index}>
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
                                fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' },
                                fontWeight: 400,
                                lineHeight: '23px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                            }}>({property.totalRated})</Typography>
                        </Box>
                        <Box sx={{
                            marginTop: { xs: '6px', sm: '6px', md: '13px', lg: '13px' },
                            display: 'flex',
                            gap: { xs: '5px', sm: '5px', md: '15px', lg: '15px' },
                            flexWrap: 'wrap'
                        }}>
                            {property.type.map((type: string, index: number) => {
                                return (
                                    <Typography
                                        key={index}
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontFamily: 'Inter',
                                            fontSize: { xs: '15px', sm: '15px', md: '18px', lg: '18px' },
                                            fontWeight: 400,
                                            lineHeight: '23px',
                                            letterSpacing: '0em',
                                            textAlign: 'left',
                                        }}
                                    >
                                        {type}
                                    </Typography>
                                )
                            })}
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: { xs: '10px', sm: '10px', md: '18px', lg: '18px' }, borderBottom: '1px solid gray' }}>
                        <List disablePadding sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            {sidebarTab.map((tab: string, index: number) => {
                                const isActiveTab = tab === selectedTab
                                return <ListItem onClick={() => setSelectedTab(tab)} disableGutters key={index} sx={{
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
                                    borderBottom: isActiveTab ? `2px solid ${COLORS.BLACK}` : 'none',
                                    textTransform: 'capitalize'
                                }}>{tab}</ListItem>
                            })}
                        </List>
                    </Box>
                    {selectedTab === 'overview' && <OverviewTab key={selectedTab} />}
                    {selectedTab === 'reviews' && <ReviewsTab key={selectedTab} property={property} totalStarRatings={totalStarRatings} />}
                    {selectedTab === 'gallery' && <GalleryTab key={selectedTab} totalImages={totalGalleryImages} images={galleryImages} />}
                </Box>
            </Drawer>
        </Box>
    );
}