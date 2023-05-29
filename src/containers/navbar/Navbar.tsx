import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { COLORS, MD_NAVBAR_HEIGHT, XS_NAVBAR_HEIGHT } from '@/utils/app_constants';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';


interface NavbarProps {
  window?: () => Window;
}


const drawerWidth = 240;
const navItems = [{ name: 'Home', path: '/' }, { name: 'Featured', path: '/featured' }, { name: 'Properties', path: '/properties' }, { name: 'About us', path: '/about-us' }];

function Navbar(props: NavbarProps) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter()
  const activePath = router.asPath

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', zIndex: 99999 }}>
      <Box sx={{ paddingY: '10px' }}>
        <Box sx={{ position: 'relative', overflow: 'hidden', height: `calc(${XS_NAVBAR_HEIGHT} - 20px)`, width: '100%' }}>
          <Image
            fill
            src='/assets/logo-with-slogan.svg'
            alt='house'
          />
        </Box>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => {
          const isActive = item.path === activePath
          return (
            <ListItem key={index} disablePadding>
              <Link href={item.path}>
                <Button
                  variant='text'
                  disableRipple
                  sx={{
                    textTransform: 'capitalize',
                    fontFamily: 'Inter',
                    color: isActive ? COLORS.BLACK : COLORS.INACTIVE_GRAY,
                    fontSize: { xs: '15px', sm: '15px', md: '17px', lg: '17px' },
                    fontWeight: 500,
                    lineHeight: '25px',
                    textAlign: 'left',
                    width: drawerWidth,
                    height: '57px',
                    ':hover': {
                      backgroundColor: 'unset'
                    },
                  }}
                >
                  {item.name}
                </Button>
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Box component="nav" zIndex={9999}>
        <Drawer
          disablePortal
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            zIndex: 999999,
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: COLORS.WHITE,
          boxShadow: 'none',
          paddingX: { xs: '0px', sm: '0px', md: '60px', lg: '115px' },
          height: { xs: XS_NAVBAR_HEIGHT, md: MD_NAVBAR_HEIGHT },
          display: 'flex',
          justifyContent: 'center',
          zIndex: 99999
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2, display: { xs: 'flex', sm: 'flex', md: 'none' },
              color: COLORS.BROWN
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ paddingY: '10px', width: '100%', display: 'flex' }}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                height: {
                  xs: `calc(${XS_NAVBAR_HEIGHT} - 20px)`,
                  sm: `calc(${XS_NAVBAR_HEIGHT} - 20px)`,
                  md: `calc(${MD_NAVBAR_HEIGHT} - 20px)`,
                  lg: `calc(${MD_NAVBAR_HEIGHT} - 20px)`
                },
                minWidth: {
                  xs: '130px',
                  sm: '130px',
                  md: '180px',
                  lg: '180px'
                }
              }}
            >
              <Image
                fill
                src='/assets/logo-with-slogan.svg'
                alt='house'
              />
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <List sx={{
              display: 'flex',
              color: COLORS.BLACK
            }}>
              {navItems.map((item, index) => {
                const isActive = item.path === activePath
                return (
                  <ListItem key={index} disablePadding>
                    <Link href={item.path}>
                      <Button
                        variant='text'
                        disableRipple
                        sx={{
                          textTransform: 'capitalize',
                          fontFamily: 'Inter',
                          color: isActive ? COLORS.BLACK : COLORS.INACTIVE_GRAY,
                          fontSize: { xs: '15px', sm: '15px', md: '16px', lg: '16px' },
                          fontWeight: 500,
                          lineHeight: '25px',
                          textAlign: 'left',
                          width: { xs: '40px', sm: '40px', md: '95px', lg: '157px' },
                          height: 'auto',
                          ':hover': {
                            backgroundColor: 'unset'
                          },
                        }}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  </ListItem>
                )
              })}
            </List>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Button
              variant='text'
              disableRipple
              sx={{
                textTransform: 'capitalize',
                fontFamily: 'Inter',
                color: COLORS.BLACK,
                fontSize: { xs: '15px', sm: '15px', md: '16px', lg: '16px' },
                fontWeight: 500,
                lineHeight: '22px',
                textAlign: 'left',
                minWidth: { xs: 'max-content', sm: 'max-content', md: '157px', lg: '157px' },
                height: { xs: '40px', sm: '40px', md: '45px' },
                ':hover': {
                  backgroundColor: 'unset'
                },
              }}
            >
              Sign up
            </Button>
            <Button
              variant='contained'
              sx={{
                textTransform: 'capitalize',
                fontFamily: 'Inter',
                fontSize: { xs: '15px', sm: '15px', md: '16px', lg: '16px' },
                fontWeight: 500,
                lineHeight: '22px',
                textAlign: 'left',
                minWidth: { xs: 'max-content', sm: 'max-content', md: '157px', lg: '157px' },
                height: { xs: '40px', sm: '40px', md: '45px' },
                borderRadius: '15px'
              }}
            >
              Sign in
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar