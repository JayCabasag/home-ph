import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button, Box, Container, Typography } from '@mui/material'
import { COLORS, MD_NAVBAR_HEIGHT } from '@/utils/app_constants'
import Image from 'next/image'
import SectionWrapper from '@/components/wrappers/PageWrapper'
import { founders } from '@/utils/tests'
import TeamCard from '@/components/cards/TeamCard'

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
            width: { xs: '100%', sm: '100%', md: '75%', lg: '75%' },
            height: '100%',
            marginLeft: '-16px',
            position: 'absolute'
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              position: 'relative', // Set the Box position to relative
              overflow: 'hidden' // Hide any overflow from the Image
            }}
          >
            <Image
              fill
              src='/assets/about-us-image.jpg'
              alt='main'
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', sm: '100%', md: '75%', lg: '75%' },
            height: '100%',
            position: 'absolute',
            marginLeft: '-16px',
            backgroundColor: 'rgba(250, 250, 250, .7)',
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' }
          }}
        >
        </Box>
        <Box
          sx={{
            zIndex: 9,
            width: '100%',
            padding: '20px 0',
            paddingRight: { xs: '0px', sm: '0px', md: '60px', lg: '115px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingLeft: { sm: '0px', md: '90px' },
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
              width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
              textAlign: 'left',
            }}
          >
            Who we are ?
          </Typography>

          <Typography
            sx={{
              width: { xs: '100%', sm: '100%', md: '75%', lg: '50%' },
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: { xs: '14px', md: '17px' },
              lineHeight: '27px',
              marginTop: '31px',
              textAlign: 'left',
              color: COLORS.BLACK,
            }}
          >
            Collaboration, innovation, and a shared commitment to excellence are the driving forces behind our team at HomePH.
            Together, we work tirelessly to provide an exceptional real estate platform that simplifies the process of buying, selling, renting,
            and leasing properties, making it a seamless and rewarding experience for our users.
          </Typography>
        </Box>
      </SectionWrapper>
      <SectionWrapper heightAuto>
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            paddingX: { xs: '0px', sm: '0px', md: '60px', lg: '115px' },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            sx={{
              marginTop: '50px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: { xs: '40px', md: '60px' },
              lineHeight: { xs: '50px', md: '73px' },
              color: COLORS.BLACK
            }}
          >
            Meat our teams
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
              color: COLORS.GRAY,
              textAlign: 'center'
            }}
          >
            At HomePH, our success is driven by our dedicated and talented team of professionals who are passionate about real estate and technology.
            We have assembled a diverse group of experts with extensive knowledge and experience in the industry,
            ensuring that we provide top-notch service to our users. Here is a simple summary of our teams:
          </Typography>
          <Box
            sx={{
              marginTop: '50px',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr' },
              gap: { xs: '15px', sm: '15px', md: '20px', lg: '30px' },
              width: '100%',
              placeItems: 'center',
              height: 'auto',
              paddingBottom: '15px'
            }}
          >
            {founders.map((founder, index) => {
              return <TeamCard key={index} founder={founder} />
            })}
          </Box>
        </Box>
      </SectionWrapper>
    </>
  )
}

export default AboutUsPage