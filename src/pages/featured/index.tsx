import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Container, Box, Typography, Button } from '@mui/material'
import { COLORS } from '@/utils/app_constants'
import SectionWrapper from '@/components/wrappers/PageWrapper'
import { properties } from '@/utils/tests'
import ResidentCard from '@/components/cards/ResidentCard'

const inter = Inter({ subsets: ['latin'] })

const FeaturedPage = () => {
  return (
    <>
    <Head>
      <title>Featured listings</title>
      <meta name="description" content="Your number one real estate Site in the Philippines" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <SectionWrapper heightAuto>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            padding: '20px 0',
            height: 'max-content',
            paddingLeft: { sm: '0px', md: '90px'},
            paddingRight: { sm: '0px', md: '90px'},
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: { xs: '30px', md: '50px' },
              lineHeight: { xs: '30px', md: '50px' },
              color: COLORS.BLACK,
            }}
          >
            Featured listing
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            padding: '20px 0',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
            paddingLeft: { sm: '0px', md: '90px'},
            paddingRight: { sm: '0px', md: '90px'},
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: '17px', sm: '17px', md: '27px', lg: '27px' },
          }}
        >
          {properties.concat(properties).concat(properties).concat(properties).map((property, index) => {
            return <ResidentCard property={property}  key={index} />
          })}
        </Box>
      </Box>
      </SectionWrapper>
      <SectionWrapper heightAuto>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            padding: '20px 0',
            height: 'max-content',
            paddingLeft: { sm: '0px', md: '90px'},
            paddingRight: { sm: '0px', md: '90px'},
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: { xs: '30px', md: '50px' },
              lineHeight: { xs: '30px', md: '50px' },
              color: COLORS.BLACK,
            }}
          >
            Featured apartments
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            padding: '20px 0',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
            paddingLeft: { sm: '0px', md: '90px'},
            paddingRight: { sm: '0px', md: '90px'},
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: '17px', sm: '17px', md: '27px', lg: '27px' },
          }}
        >
          {properties.concat(properties).concat(properties).concat(properties).map((property, index) => {
            return <ResidentCard property={property}  key={index} />
          })}
        </Box>
      </Box>
      </SectionWrapper>
  </>
  )
}

export default FeaturedPage