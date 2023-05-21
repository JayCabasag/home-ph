import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Button,Box, Container, Typography } from '@mui/material'
import { COLORS } from '@/utils/app_constants'
import Image from 'next/image'

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
      About us
    </Container>
  </>
  )
}

export default AboutUsPage