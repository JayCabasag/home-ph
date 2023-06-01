import SectionWrapper from '@/components/wrappers/PageWrapper'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { COLORS } from '@/utils/app_constants'
import { GetStaticPropsContext } from 'next'
import { featuredLists } from '@/utils/tests'
import Image from 'next/image'

interface PropertyDetailsPageProps {
  featured: any
}

const PropertyDetailsPage = ({ featured }: PropertyDetailsPageProps) => {
  useEffect(() => {
    if (featured) {
      document.title = `Property details - ${featured.name}`
    }
  }, [featured])

  const color = featured?.mainColor ?? COLORS.DIRTY_WHITE

  return (
    <>
      <Head>
        <meta name="description" content="Your number one real estate Site in the Philippines" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SectionWrapper heightAuto disabledGutters>
        <Box
          sx={{
            padding: { xs: '0', sm: '0', md: '20px 0', lg: '20px 0' },
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingX: { xs: '0px', sm: '0px', md: '60px', lg: '115px' },
            position: 'relative',
            backgroundColor: COLORS.WHITE
          }}>
          <Box
            sx={{
              width: '100%',
              height: { xs: '250px', sm: '250px', md: '450px', lg: '500px' },
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Image
              src={featured.coverImage}
              fill
              alt={featured.name}
            />
          </Box>

          <Box
            sx={{
              paddingX: { xs: '15px', sm: '15px', md: '0px', lg: '0px' },
            }}
          >
            <Box sx={{ marginTop: '33px', gap: '15px', display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  minWidth: { xs: '40px', sm: '40px', md: '60px', lg: '70px' },
                  height: { xs: '40px', sm: '40px', md: '60px', lg: '70px' },
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <Image
                  src={featured.logo}
                  fill
                  alt={featured.name}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography sx={{
                  color: color,
                  fontFamily: 'Inter',
                  fontSize: { xs: '15px', sm: '15px', md: '20px', lg: '20px' },
                  fontWeight: 600,
                  lineHeight: '24px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  textTransform: 'uppercase'
                }}>
                  {featured.title} At {featured.location}
                </Typography>
                <Typography
                  sx={{
                    color: color,
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '17px',
                    textAlign: 'left',
                    marginTop: '5px',
                  }}>
                  {featured.subTitle}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: '33px'
              }}
            >

            </Box>
          </Box>
        </Box>

      </SectionWrapper>
    </>
  )
}

export default PropertyDetailsPage

export async function getStaticPaths() {

  const featuredPaths = featuredLists.map((featuredData) => {
    return { params: { id: featuredData.id.toString() } }
  })

  return {
    paths: featuredPaths,
    fallback: false
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context
  const id = params?.id as string

  const featuredData = featuredLists.find((featuredData) => id === featuredData.id)

  if (!featuredData) {
    return {
      redirect: {
        destination: '/featured'
      }
    }
  }
  return {
    props: {
      featured: featuredData
    },

    revalidate: 10
  }
}