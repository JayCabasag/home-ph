import SectionWrapper from '@/components/wrappers/PageWrapper'
import Head from 'next/head'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { COLORS } from '@/utils/app_constants'

const PropertyDetailsPage = () => {
  return (
    <>
      <Head>
        <title>Property details</title>
        <meta name="description" content="Your number one real estate Site in the Philippines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              Property name
            </Typography>
          </Box>
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
                fontSize: { xs: '20px', md: '30px' },
                lineHeight: { xs: '20px', md: '30px' },
                color: COLORS.BLACK,
              }}
            >
              Comming soon...
            </Typography>
          </Box>
        </Box>
      </SectionWrapper>
    </>
  )
}

export default PropertyDetailsPage
