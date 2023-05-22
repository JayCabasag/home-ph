import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { COLORS, MD_NAVBAR_HEIGHT } from '@/utils/app_constants'
import Image from 'next/image'
import SectionWrapper from '@/components/wrappers/PageWrapper'

const inter = Inter({ subsets: ['latin'] })
const partnership = ['/assets/traveloka.png', '/assets/pegipegi.png', '/assets/ticket-com.png']

export default function Home() {

  const isMobileScreen = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Head>
        <title>Home PH</title>
        <meta name="description" content="Your number one real estate Site in the Philippines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionWrapper>
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
            fontSize: { xs: '40px', md: '66px' },
            lineHeight: { xs: '50px', md: '80px' },
            color: COLORS.BLACK,
          }}
        >
          Let&apos;s start
          <br />
          the search for your
          <br />
          dream home!
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
        Your dream home awaits. This stunning property features all
        the amenities and comfort you desire.
        </Typography>

        <Typography
          sx={{
            marginTop: { xs: '50px', md: '117px' },
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: { xs: '14px', md: '18px' },
            lineHeight: '28px',
            color: '#43404B'
          }}
        >
          Our Partnership
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          {partnership.map((partnerImage: string, index: number) => {
            return (
              <Box key={index}>
                <Image
                  src={partnerImage}
                  alt={`partner-${partnerImage}`}
                  height={62}
                  width={150}
                />
              </Box>
            )
          })}
        </Box>
       </Box>
       <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: 'calc(100vh - 250px)', md: `calc(100vh - ${MD_NAVBAR_HEIGHT})`},
          position: 'relative', // Set the Box position to relative
          overflow: 'hidden' // Hide any overflow from the Image
        }}
       >
        <Image
          fill
          src='/assets/main.png'
          alt='main'
        />

       </Box>
      </SectionWrapper>
      <SectionWrapper>
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          height: { xs: 'calc(100vh - 250px)', md: `calc(100vh - ${MD_NAVBAR_HEIGHT})`},
          display: 'flex',
          alignItems: 'center',
          justifyContent:'center'
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
            width: { sm: '40px', md: '165px' },
            height: { sm: '20px', md: '45px' },
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
