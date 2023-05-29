import React from 'react'
import { Inter } from 'next/font/google'
import { Container, useMediaQuery, Box, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { COLORS, MD_NAVBAR_HEIGHT, XS_NAVBAR_HEIGHT } from '@/utils/app_constants'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

const socialIcons = ['/assets/instagram-icon.svg', '/assets/twitter-icon.svg', '/assets/youtube-icon.svg']
const companiesLists = [{ label: 'home', url: '/featured' }, { label: 'featured', url: '/featured' }, { label: 'properties', url: '/properties' }, { label: 'About us', url: '/about-us' }, { label: 'sign up', url: '/sign-up' }]

const Footer = () => {
    const isMobileScreen = useMediaQuery('(max-width: 768px)');

    return (
        <Container
            className={inter.className}
            sx={{
                backgroundColor: COLORS.DIRTY_WHITE,
                width: '100%',
                height: { xs: 'auto', md: 'auto' },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }
            }}
            maxWidth={false}
            disableGutters={!isMobileScreen}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 2fr', lg: '1fr 2fr' },
                    justifyContent: 'space-between',
                    paddingX: { xs: '0px', sm: '0px', md: '60px', lg: '115px' },
                    paddingY: { xs: '20px', sm: '20px', md: '70px', lg: '70px' },
                }}>
                <Box>
                    <Box sx={{ paddingY: '10px', width: '100%', display: 'flex' }}>
                        <Box
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                height: {
                                    xs: `calc(${XS_NAVBAR_HEIGHT} - 20px)`,
                                    sm: `calc(${XS_NAVBAR_HEIGHT} - 20px)`,
                                    md: `calc(${MD_NAVBAR_HEIGHT} - 20px)`,
                                    lg: `calc(${MD_NAVBAR_HEIGHT} - 20px)`
                                },
                                minWidth: {
                                    xs: '130px',
                                    sm: '130px',
                                    md: '180px',
                                    lg: '180px'
                                }
                            }}
                        >
                            <Image
                                fill
                                src='/assets/logo-with-slogan.svg'
                                alt='house'
                            />
                        </Box>
                    </Box>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: { xs: '13px', sm: '13px', md: '17px', lg: '17px' },
                        fontWeight: 400,
                        lineHeight: { xs: '20px', sm: '20px', md: '27px', lg: '27px' },
                        letterSpacing: '0em',
                        textAlign: 'left',
                        marginTop: '28px'
                    }}>
                        We offer homes for every lifestyle, from cozy
                        <br />
                        apartments to spacious family homes.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '20px', marginTop: '28px', marginBottom: '28px' }}>
                        {socialIcons.map((iconUrl, index) => {
                            return (<Box
                                key={index}
                                sx={{
                                    height: { xs: '20px', sm: '20px', md: '27px', lg: '27px' },
                                    width: { xs: '20px', sm: '20px', md: '27px', lg: '27px' },
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                            >
                                <Image
                                    fill
                                    src={iconUrl}
                                    alt='icon'
                                />
                            </Box>)
                        })}
                    </Box>

                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr' } }}>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontSize: { xs: '15px', sm: '15px', md: '19px', lg: '19px' },
                            fontWeight: 600,
                            lineHeight: '30px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                        }}>
                            Company
                        </Typography>
                        <List>
                            {companiesLists.map((companyList, index) => {
                                return (
                                    <ListItem disablePadding sx={{ ':hover': { backgroundColor: 'tranparent' } }} key={index}>
                                        <ListItemButton component="a" href={`${companyList.url}`} disableRipple>
                                            <Typography sx={{
                                                fontFamily: 'Inter',
                                                fontSize: { xs: '13px', sm: '13px', md: '17px', lg: '17px' },
                                                fontWeight: 400,
                                                lineHeight: '30px',
                                                letterSpacing: '0em',
                                                textAlign: 'left',
                                                textTransform: 'capitalize'
                                            }}>
                                                {companyList.label}
                                            </Typography>
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontSize: { xs: '15px', sm: '15px', md: '19px', lg: '19px' },
                            fontWeight: 600,
                            lineHeight: '30px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                        }}>
                            Support
                        </Typography>
                        {companiesLists.map((companyList, index) => {
                            return (
                                <ListItem disablePadding sx={{ ':hover': { backgroundColor: 'tranparent' } }} key={index}>
                                    <ListItemButton component="a" href={`${companyList.url}`} disableRipple>
                                        <Typography sx={{
                                            fontFamily: 'Inter',
                                            fontSize: { xs: '13px', sm: '13px', md: '17px', lg: '17px' },
                                            fontWeight: 400,
                                            lineHeight: '30px',
                                            letterSpacing: '0em',
                                            textAlign: 'left',
                                            textTransform: 'capitalize'
                                        }}>
                                            {companyList.label}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </Box>
                    <Box>
                        <Typography sx={{
                            fontFamily: 'Inter',
                            fontSize: { xs: '15px', sm: '15px', md: '19px', lg: '19px' },
                            fontWeight: 600,
                            lineHeight: '30px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                        }}>
                            More
                        </Typography>
                        {companiesLists.map((companyList, index) => {
                            return (
                                <ListItem disablePadding sx={{ ':hover': { backgroundColor: 'tranparent' } }} key={index}>
                                    <ListItemButton component="a" href={`${companyList.url}`} disableRipple>
                                        <Typography sx={{
                                            fontFamily: 'Inter',
                                            fontSize: { xs: '13px', sm: '13px', md: '17px', lg: '17px' },
                                            fontWeight: 400,
                                            lineHeight: '30px',
                                            letterSpacing: '0em',
                                            textAlign: 'left',
                                            textTransform: 'capitalize'
                                        }}>
                                            {companyList.label}
                                        </Typography>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </Box>
                </Box>
                <Box sx={{
                    display: 'flex',
                    gap: '5px',
                    marginTop: { xs: '30px', sm: '30px', md: '70px', lg: '70px' },
                }}>
                    <Box sx={{ height: { xs: '20px', sm: '20px', md: '27px', lg: '27px' }, width: { xs: '20px', sm: '20px', md: '27px', lg: '27px' }, position: 'relative', overflow: 'hidden' }}>
                        <Image
                            fill
                            src='/assets/copyright.svg'
                            alt='icon'
                        />
                    </Box>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: { xs: '12px', sm: '12px', md: '17px', lg: '17px' },
                        fontWeight: 400,
                        lineHeight: '30px',
                        letterSpacing: '0em',
                        textAlign: 'left',

                    }}>
                        HOME.ph, 2023 All rights reserved
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer
