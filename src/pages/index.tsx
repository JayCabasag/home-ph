import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import { COLORS, MD_NAVBAR_HEIGHT } from '@/utils/app_constants'
import Image from 'next/image'
import SectionWrapper from '@/components/wrappers/PageWrapper'
import DiscoverCard from '@/components/cards/DiscoverCard'
import { properties, testimonials } from '@/utils/tests'
import ResidentCard from '@/components/cards/ResidentCard'
import TestimonialCard from '@/components/cards/TestimonialCard'

const partnership = ['/assets/traveloka.png', '/assets/pegipegi.png', '/assets/ticket-com.png']
const discoveries = [
  { total: '15K+', message: 'Happy customer with our service' },
  { total: '185K+', message: 'The best property we provide' },
  { total: '367K+', message: 'Companies affiliated with us' },
  { total: '567K+', message: 'Project completed' }
]

export default function Home() {

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
      <SectionWrapper>
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          padding: '20px 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: { sm: '0px', md: '90px'},
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
            fontWeight: 500,
            fontSize: { xs: '14px', md: '17px' },
            lineHeight: '27px',
            marginTop: '31px',
            color: COLORS.GRAY
          }}
        >
          We are please to offer house listing services and provide various options and packages to assist you in finding your dream home.
        </Typography>
        <Box
          sx={{
            marginTop:  { xs: '34px', md: '82px' },
            display: { xs: 'flex', md: 'grid'},
            flexDirection: 'column',
            gridTemplateColumns: '1fr 1fr', // Two columns with equal width
            width: 'max-content',
            columnGap: '134px'
          }}
        >
          {discoveries.map((discover, index) => {
            return <DiscoverCard key={index} total={discover.total} message={discover.message}/>
          })}
        </Box>
        <Button
          variant='contained'
          sx={{
            marginTop: { xs: '34px', md: '54px' },
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
          height: { xs: 'calc(100vh - 250px)', md: `calc(100vh - ${MD_NAVBAR_HEIGHT})`},
          display: 'flex',
          alignItems: 'center',
          justifyContent:'center'
        }}
       >
        <Box 
          sx={{
            width: { xs: '100%', md: '603px'},
            height: { xs: '100%', md: '707px'},
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
      <SectionWrapper heightAuto>
      <Box sx={{ width: '100%', paddingTop: { xs: '30px', sm: '30px', md: '100px', lg: '100px' }, }}>
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
            gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
            paddingLeft: { sm: '0px', md: '90px'},
            paddingRight: { sm: '0px', md: '90px'},
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: '17px', sm: '17px', md: '27px', lg: '27px' },
          }}
        >
          {properties.map((property, index) => {
            return <ResidentCard property={property}  key={index} />
          })}
        </Box>
      </Box>
      </SectionWrapper>
      <SectionWrapper heightAuto>
      <Box sx={{ width: '100%', padding: { xs: '30px 0', sm: '30px 0', md: '100px 0', lg: '100px 0' }}}>
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
            paddingLeft: { sm: '0px', md: '90px'},
            paddingRight: { sm: '0px', md: '90px'},
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: '17px', sm: '17px', md: '27px', lg: '27px' },
          }}
        >
          {testimonials.map((testimonial, index) => {
            return <TestimonialCard testimonial={testimonial}  key={index} />
          })}
        </Box>
      </Box>
      </SectionWrapper>
      <Box
        sx={{ 
          height:  { xs: '180px', sm: '180px', md: '60vh', lg: '60vh' },
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
      </Box>
      <SectionWrapper heightAuto>
      <Box sx={{ width: '100%', paddingTop: { xs: '30px 0', sm: '30px 0', md: '100px 0', lg: '100px 0' }, }}>
        Comming soon...
      </Box>
      </SectionWrapper>
    </>
  )
}
