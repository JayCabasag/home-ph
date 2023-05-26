import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button,Box, Container, Typography } from '@mui/material'
import { COLORS, MD_NAVBAR_HEIGHT } from '@/utils/app_constants'
import Image from 'next/image'
import SectionWrapper from '@/components/wrappers/PageWrapper'

const inter = Inter({ subsets: ['latin'] })

const AboutUsPage = () => {
  return (
    <>
    <Head>
      <title>About us</title>
      <meta name="description" content="Your number one real estate Site in the Philippines" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SectionWrapper>
      <Box
        sx={{
          paddingTop: { xs: '30px', sm: '30px', md: '100px', lg: '100px' },
          width: { xs: '100%', md: '50%' },
          height: { xs: 'calc(100vh - 250px)', md: `calc(100vh - ${MD_NAVBAR_HEIGHT})`},
          display: 'flex',
          alignItems: 'center',
          justifyContent:'center',
        }}
       >
        <Box 
          sx={{
            width: { xs: '100%', md: '503px'},
            height: { xs: '100%', md: '607px'},
            position: 'relative', // Set the Box position to relative
            overflow: 'hidden' // Hide any overflow from the Image
          }}
        >
          <Image
            fill
            src='/assets/main2.png'
            alt='main'
          />
        </Box>

       </Box>
       <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          padding: '20px 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: { sm: '0px', md: '90px'},
        }}
       >
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: { xs: '40px', md: '60px' },
            lineHeight: { xs: '50px', md: '73px' },
            color: COLORS.BLACK,
          }}
        >
          We are Committed
          <br />
          to selling the best
          <br />
          building
        </Typography>

        <Typography
          sx={{
            width: { xs: 'auto', md: '70%' },
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: { xs: '14px', md: '17px' },
            lineHeight: '27px',
            marginTop: '31px',
            color: COLORS.GRAY
          }}
        >
          Our commitment to quality craftsmanship, energy efficiency,
          sustainability, transparency, and open communication ensures
          that our clients received exceptional service and seamless
          home-buying experience. We prioritize delivering high-quality
          homes that offer comfortable and luxurious living spaces,
          ensuring excellent value for our clients&apos; investments
        </Typography>
        <Button
          variant='contained'
          sx={{
            marginTop: '54px',
            textTransform: 'capitalize',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontSize: { sm: '16px', md: '17px' },
            fontWeight: 600,
            lineHeight: '25px',
            textAlign: 'left',
            width: { xs: '40px', sm: '40px', md: '95px', lg: '157px' },
            minWidth: 'max-content',
            height: { xs: '40px', sm: '40px', md: '45px' },
            borderRadius: '15px'
          }}
        >
          About Us
        </Button>
       </Box>
      </SectionWrapper>
  </>
  )
}

export default AboutUsPage