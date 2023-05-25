import React from 'react'
import { Inter } from 'next/font/google'
import { Container, useMediaQuery, Box, Typography } from '@mui/material'
import { COLORS } from '@/utils/app_constants'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

const socialIcons = ['/assets/instagram-icon.svg', '/assets/twitter-icon.svg', '/assets/youtube-icon.svg']

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
            paddingX: { xs: '0px', sm: '0px', md: '60px', lg: '115px'},
            paddingY: { xs: '20px', sm: '20px', md: '70px', lg: '70px' },
            }}>
          <Box>
            <Typography
                variant="h6"
                component="div"
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    fontSize: { xs: '18px', sm: '25px', md: '30px', lg: '30px' },
                    fontWeight: 900,
                    textAlign: 'left',
                    color: COLORS.BLACK
                }}
            >
                HOME.PH
            </Typography>
            <Typography sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '13px', sm: '13px', md: '17px', lg: '17px' },
                fontWeight: 600,
                lineHeight: { xs: '20px', sm: '20px', md: '27px', lg: '27px' },
                letterSpacing: '0em',
                textAlign: 'left',
                marginTop: '28px'        
            }}>
            We offer homes for every lifestyle, from cozy
            <br />
            apartments to spacious family homes.
            </Typography>
            <Box sx={{ display: 'flex', gap: '20px', marginTop: '28px' }}>
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
                <Box sx={{
                    display: 'flex',
                    gap: '5px',
                    marginTop:  { xs: '30px', sm: '30px', md: '70px', lg: '70px' },
                }}>
                    <Box sx={{ height:  { xs: '20px', sm: '20px', md: '27px', lg: '27px' }, width:  { xs: '20px', sm: '20px', md: '27px', lg: '27px' }, position: 'relative', overflow: 'hidden' }}>
                        <Image
                        fill
                        src='/assets/copyright.svg'
                        alt='icon'
                        />
                    </Box>
                    <Typography sx={{
                        fontFamily: 'Inter',
                        fontSize: { xs: '12px', sm: '12px', md: '17px', lg: '17px' },
                        fontWeight: 600,
                        lineHeight: '30px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        
                    }}>
                        HOME.ph, 2023 Allrights reserved
                    </Typography>
                </Box>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns:  { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr' }}}>
            <Box>
                    column 1
            </Box>
            <Box>
                    column 2
            </Box>
            <Box>
                    column 3
            </Box>
          </Box>
        </Box>
      </Container>
    )
}

export default Footer
