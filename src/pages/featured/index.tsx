import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Container, Box, Typography, Button } from '@mui/material'
import { COLORS } from '@/utils/app_constants'
import SectionWrapper from '@/components/wrappers/PageWrapper'
import { properties } from '@/utils/tests'
import ResidentCard from '@/components/cards/ResidentCard'
import Searcher from '@/components/search/Searcher'
import FeaturedSwiper from '@/components/swiper/FeaturedSwiper'
import { galleryImagesData } from '@/utils/tests'

const FeaturedPage = () => {

  const featuredProperties = properties

  return (
    <>
      <Head>
        <title>Featured listings</title>
        <meta name="description" content="Your number one real estate Site in the Philippines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
            sx={{
              width: '100%',
              padding: { xs: '0', sm: '0', md: '20px 0', lg: '20px 0' },
              height: { xs: '250px', sm: '250px', md: '450px', lg: '500px' },
              paddingX: { xs: '0px', sm: '0px', md: '90px', lg: '90px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
        <FeaturedSwiper properties={featuredProperties}/>
      </Box>
      <SectionWrapper heightAuto>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              width: '100%',
              padding: '20px 0',
              height: 'max-content',
              paddingLeft: { sm: '0px', md: '90px' },
              paddingRight: { sm: '0px', md: '90px' },
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
              Featured listings
            </Typography>
          </Box>
          <Box sx={{
            height: 'auto',
            width: '100%',
            backgroundColor: COLORS.DIRTY_WHITE,
            paddingX: { xs: '0px', sm: '0px', md: '60px', lg: '115px' },
            zIndex: 1
          }}>
            <Searcher />
          </Box>
          <Box
            sx={{
              width: '100%',
              padding: '20px 0',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
              paddingLeft: { sm: '0px', md: '90px' },
              paddingRight: { sm: '0px', md: '90px' },
              alignItems: 'center',
              placeItems: 'center',
              gap: { xs: '17px', sm: '17px', md: '27px', lg: '27px' },
            }}
          >
            {properties.concat(properties).concat(properties).map((property, index) => {
              return <ResidentCard property={property} key={index} />
            })}
          </Box>
        </Box>
      </SectionWrapper>
    </>
  )
}

export default FeaturedPage