import Head from 'next/head'
import { Box, Button, Input, TextField, Typography, useMediaQuery } from '@mui/material'
import { COLORS, MD_NAVBAR_HEIGHT } from '@/utils/app_constants'
import Image from 'next/image'
import SectionWrapper from '@/components/wrappers/PageWrapper'
import DiscoverCard from '@/components/cards/DiscoverCard'
import { properties, testimonials } from '@/utils/tests'
import ResidentCard from '@/components/cards/ResidentCard'
import TestimonialCard from '@/components/cards/TestimonialCard'
import Searcher from '@/components/search/Searcher'

const partnership = ['/assets/traveloka.png', '/assets/pegipegi.png', '/assets/ticket-com.png']
const discoveries = [
  { total: '15K+', message: 'Happy customer with our service' },
  { total: '185K+', message: 'The best property we provide' },
  { total: '367K+', message: 'Companies affiliated with us' },
  { total: '567K+', message: 'Project completed' }
]

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
      <SectionWrapper heightAuto={!isMobileScreen}>
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            padding: '20px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: { sm: '0px', md: '90px' },
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
              fontWeight: 400,
              fontSize: { xs: '14px', md: '17px' },
              lineHeight: '27px',
              marginTop: '31px',
              color: COLORS.GRAY
            }}
          >
            Whether you&apos;re a first-time buyer, a seasoned investor, or simply looking to explore the market, our web application is here to simplify your journey. Join us today and experience the innovative fusion of social media and real estate, brought to you by one dedicated developer and the power of open-source.
          </Typography>

          <Typography
            sx={{
              marginTop: { xs: '50px', sm: '50px', md: '80px', lg: '100px' },
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: { xs: '14px', md: '18px' },
              lineHeight: '28px',
              color: '#43404B'
            }}
          >
            Our Partners
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
                    height={60}
                    width={130}
                  />
                </Box>
              )
            })}
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            height: { xs: 'calc(100vh - 200px)', sm: 'calc(100vh - 200px)', md: `calc(100vh - ${MD_NAVBAR_HEIGHT})`, lg: `calc(100vh - ${MD_NAVBAR_HEIGHT})` },
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
      <SectionWrapper heightAuto={!isMobileScreen}>
        <Box sx={{
          position: 'absolute',
          width: { xs: 'calc(100% - 32px)', sm: '100%', md: '100%', lg: '100%' },
          backgroundColor: { xs: `${COLORS.DIRTY_WHITE}`, sm: `${COLORS.DIRTY_WHITE}`, md: 'transparent', lg: 'transparent' },
          paddingX: { xs: '0px', sm: '0px', md: '60px', lg: '115px' },
          paddingY: { xs: '15px', sm: '15px', md: '0px', lg: '0px' },
          zIndex: 1,
          transform: 'translateY(-50%)'
        }}>
          <Searcher />
        </Box>
        <Box
          sx={{
            paddingTop: { xs: '30px', sm: '30px', md: '100px', lg: '100px' },
            width: { xs: '100%', md: '50%' },
            height: { xs: 'calc(100vh - 250px)', md: `calc(100vh - ${MD_NAVBAR_HEIGHT})` },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '100%', md: '503px', lg: '607px' },
              height: { xs: 'calc(100% - 100px)', sm: 'calc(100% - 100px)', md: '607px', lg: '607px' },
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
              fontWeight: 400,
              fontSize: { xs: '14px', md: '17px' },
              lineHeight: '27px',
              marginTop: '31px',
              color: COLORS.GRAY
            }}
          >
            <strong>Our mission is simple</strong>: to provide an intuitive and user-friendly platform for individuals seeking to sell or purchase houses, condos, and various properties. By leveraging the power of social media, we&apos;ve created a vibrant community that connects sellers with potential buyers, making property transactions seamless and efficient.
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
      <SectionWrapper heightAuto={!isMobileScreen}>
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            padding: '20px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: { sm: '0px', md: '90px' },
            paddingTop: { xs: '30px', sm: '30px', md: '100px', lg: '100px' },
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
            Discover your
            <br />
            dream home with us
          </Typography>

          <Typography
            sx={{
              width: { xs: 'auto', md: '70%' },
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: { xs: '14px', sm: '14px', md: '17px', lg: '17px' },
              lineHeight: '27px',
              marginTop: '31px',
              color: COLORS.GRAY
            }}
          >
            At our core, we believe in providing a user-friendly experience for individuals looking to buy or sell houses, condos, or any type of property. Our platform connects sellers with potential buyers, streamlining the process and ensuring maximum exposure for your listings.
          </Typography>
          <Box
            sx={{
              marginTop: { xs: '16px', sm: '16px', md: '16px', lg: '62px' },
              display: { xs: 'flex', md: 'grid' },
              flexDirection: 'column',
              gridTemplateColumns: '1fr 1fr', // Two columns with equal width
              width: 'max-content',
              columnGap: { xs: '0px', sm: '0px', md: '0px', lg: '120px' }
            }}
          >
            {discoveries.map((discover, index) => {
              return <DiscoverCard key={index} total={discover.total} message={discover.message} />
            })}
          </Box>
          <Button
            variant='contained'
            sx={{
              textTransform: 'capitalize',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontSize: { sm: '16px', md: '17px' },
              fontWeight: 600,
              lineHeight: '25px',
              textAlign: 'left',
              width: { xs: '40px', sm: '40px', md: '95px', lg: '157px' },
              height: { xs: '40px', sm: '40px', md: '45px' },
              minWidth: 'max-content',
              borderRadius: '15px'
            }}
          >
            See more
          </Button>
        </Box>
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            height: { xs: 'calc(100vh - 250px)', md: `calc(100vh - ${MD_NAVBAR_HEIGHT})` },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '603px' },
              height: { xs: '100%', md: '707px' },
              position: 'relative', // Set the Box position to relative
              overflow: 'hidden' // Hide any overflow from the Image
            }}
          >
            <Image
              fill
              src='/assets/main3.png'
              alt='main'
            />
          </Box>
        </Box>
      </SectionWrapper>
      <SectionWrapper heightAuto={!isMobileScreen}>
        <Box sx={{ width: '100%', paddingTop: { xs: '30px', sm: '30px', md: '100px', lg: '100px' }, }}>
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
                fontSize: { xs: '40px', md: '60px' },
                lineHeight: { xs: '50px', md: '73px' },
                color: COLORS.BLACK,
              }}
            >
              Popular Residents
            </Typography>
            <Button
              variant='contained'
              sx={{
                textTransform: 'capitalize',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontSize: { sm: '16px', md: '17px' },
                fontWeight: 600,
                lineHeight: '25px',
                textAlign: 'left',
                width: { xs: '40px', sm: '40px', md: '95px', lg: '157px' },
                height: { xs: '40px', sm: '40px', md: '45px' },
                minWidth: 'max-content',
                borderRadius: '15px'
              }}
            >
              See more
            </Button>
          </Box>
          <Box
            sx={{
              width: '100%',
              padding: '20px 0',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
              paddingLeft: { xs: '0px', sm: '0px', md: '90px', lg: '90px' },
              paddingRight: { xs: '0px', sm: '0px', md: '90px', lg: '90px' },
              alignItems: 'center',
              justifyContent: 'space-between',
              placeItems: 'center',
              gap: { xs: '17px', sm: '17px', md: '27px', lg: '27px' },
            }}
          >
            {properties.map((property, index) => {
              return <ResidentCard property={property} key={index} />
            })}
          </Box>
        </Box>
      </SectionWrapper>
      <SectionWrapper heightAuto>
        <Box sx={{ width: '100%', padding: { xs: '30px 0', sm: '30px 0', md: '100px 0', lg: '100px 0' } }}>
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
                fontSize: { xs: '40px', md: '60px' },
                lineHeight: { xs: '50px', md: '73px' },
                color: COLORS.BLACK,
              }}
            >
              Our Customer Testimonials
            </Typography>
            <Button
              variant='contained'
              sx={{
                textTransform: 'capitalize',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontSize: { sm: '16px', md: '17px' },
                fontWeight: 600,
                lineHeight: '25px',
                textAlign: 'left',
                width: { xs: '40px', sm: '40px', md: '95px', lg: '157px' },
                height: { xs: '40px', sm: '40px', md: '45px' },
                minWidth: 'max-content',
                borderRadius: '15px'
              }}
            >
              See more
            </Button>
          </Box>
          <Box
            sx={{
              width: '100%',
              padding: '20px 0',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr' },
              paddingLeft: { sm: '0px', md: '90px' },
              paddingRight: { sm: '0px', md: '90px' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: '17px', sm: '17px', md: '27px', lg: '27px' },
            }}
          >
            {testimonials.map((testimonial, index) => {
              return <TestimonialCard testimonial={testimonial} key={index} />
            })}
          </Box>
        </Box>
      </SectionWrapper>
      <Box
        sx={{
          height: { xs: '180px', sm: '180px', md: '60vh', lg: '60vh' },
          width: '100%',
          position: 'relative', // Set the Box position to relative
          overflow: 'hidden' // Hide any overflow from the Image
        }}
      >
        <Image
          fill
          src='/assets/bottom-main.png'
          alt='bottom-main'
        />
        <Box sx={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <Typography
            variant='h1'
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '20px', sm: '30px', md: '60px', xl: '60px' },
              textAlign: 'center'
            }}
          >
            Get our special prices & latest
            <br />
            info Promos
          </Typography>
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              height: { xs: '45px', sm: '45px', md: '75px', xl: '75px' },
              width: 'calc(100% - 20px)',
              maxWidth: '1030px',
              borderRadius: '15px',
              marginTop: { xs: '15px', sm: '15px', md: '90px', xl: '90px' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                paddingX: { xs: '15px', sm: '15px', md: '30px', xl: '35px' },
                gap: '15px',
              }}
            >
              <Input
                fullWidth
                disableUnderline
                placeholder='Drop your email address here...'
                sx={{
                  outline: 'none',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontSize: { xs: '12px', sm: '12px', md: '17px', xl: '17px' },
                  fontWeight: 600,
                  border: 'none',
                  outlineStyle: 'none',
                  borderRight: { xs: `1px solid ${COLORS.BROWN}`, sm: `1px solid ${COLORS.BROWN}`, md: `2px solid ${COLORS.BROWN}`, xl: `2px solid ${COLORS.BROWN}` }
                }}
              />
              <Button
                variant='contained'
                sx={{
                  textTransform: 'capitalize',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontSize: { xs: '12px', sm: '12px', md: '17px', xl: '17px' },
                  fontWeight: 600,
                  lineHeight: '25px',
                  textAlign: 'left',
                  width: { xs: '40px', sm: '40px', md: '95px', lg: '157px' },
                  height: { xs: '37px', sm: '37px', md: '45px', lg: '45px' },
                  minWidth: 'max-content',
                  borderRadius: '15px',
                  backgroundColor: '#1C1827',
                  ':hover': {
                    backgroundColor: '#1C1827',
                  }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
