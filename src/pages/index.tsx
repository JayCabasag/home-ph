import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button,Box, Container, Typography } from '@mui/material'
import { COLORS } from '@/utils/app_constants'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const partnership = ['/assets/traveloka.png', '/assets/pegipegi.png', '/assets/ticket-com.png']

export default function Home() {
  return (
    <>
      <Head>
        <title>Home PH</title>
        <meta name="description" content="Your number one real estate Site in the Philippines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        className={inter.className}
        sx={{
          backgroundColor: COLORS.DIRTY_WHITE,
          width: '100%',
          height: { xs: 'auto', md: 'calc(100vh - 98px)'},
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }
        }}
        maxWidth={false}
      >
       <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          padding: '20px 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: { sm: '0px', md: '115px'},
        }}
       >
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: { xs: '50px', md: '85px' },
            lineHeight: { xs: '50px', md: '103px' },
            color: COLORS.BLACK,
          }}
        >
          Let&apos;s start
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: { xs: '50px', md: '85px' },
            lineHeight: { xs: '50px', md: '103px' },
            color: COLORS.BLACK,
          }}
        >
          the search for your
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: { xs: '50px', md: '85px' },
            lineHeight: { xs: '50px', md: '103px' },
            color: COLORS.BLACK,
          }}
        >
          dream home!
        </Typography>

        <Typography
          sx={{
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: { xs: '17', md: '22px' },
            lineHeight: '27px',
            marginTop: '31px',
            color: COLORS.GRAY
          }}
        >
        Your dream home awaits. This stunning property
        <br />
        features all the amenities and comfort you desire.
        </Typography>

        <Typography
          sx={{
            marginTop: { xs: '60px', md: '117px' },
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '23px',
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
          height: { xs: 'calc(100vh - 250px)', md: 'calc(100vh - 98px)'},
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
      </Container>
    </>
  )
}
