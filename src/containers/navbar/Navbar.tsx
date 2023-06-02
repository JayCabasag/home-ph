import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { COLORS, MD_NAVBAR_HEIGHT, XS_NAVBAR_HEIGHT } from '@/utils/app_constants';
import { useRouter } from 'next/router';
import Image from 'next/image';
import NavLink from '@/components/navbar/NavLink';
import MobileNavLink from '@/components/navbar/MobileNavLink';
import { UserContext } from '@/auth/FirebaseAuthProvider';
import SignIn from '@/components/dialogs/SignIn';
import SignUp from '@/components/dialogs/SignUp';

interface NavbarProps {
  window?: () => Window;
}


const drawerWidth = 260;

function Navbar(props: NavbarProps) {
  const auth = React.useContext(UserContext)

  const [showSignInDialog, setShowSignInDialog] = React.useState<boolean>(false)
  const [showSignUpDialog, setShowSignUpDialog] = React.useState<boolean>(false)

  const handleCloseSignInDialog = () => {
    setShowSignInDialog(false)
  }

  const handleCloseSignUpDialog = () => {
    setShowSignUpDialog(false)
  }

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter()
  const activePath = router.pathname
  const onHomePage = activePath === '/' || activePath === ''
  const onFeaturedPage = activePath === '/featured' || activePath === '/featured/[id]'
  const onPropertiesPage = activePath === '/properties'
  const onAboutPage = activePath === '/about-us'

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
        <MobileNavLink path='/' isActive={onHomePage}>Home</MobileNavLink>
        <MobileNavLink path='/featured' isActive={onFeaturedPage}>Featured</MobileNavLink>
        <MobileNavLink path='/properties' isActive={onPropertiesPage}>Properties</MobileNavLink>
        <MobileNavLink path='/about-us' isActive={onAboutPage}>About us</MobileNavLink>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <SignIn open={showSignInDialog} onClose={handleCloseSignInDialog} />
      <SignUp open={showSignUpDialog} onClose={handleCloseSignUpDialog} />
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
                  xs: '150px',
                  sm: '150px',
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
              <NavLink path='/' isActive={onHomePage}>Home</NavLink>
              <NavLink path='/featured' isActive={onFeaturedPage}>Featured</NavLink>
              <NavLink path='/properties' isActive={onPropertiesPage}>Properties</NavLink>
              <NavLink path='/about-us' isActive={onAboutPage}>About us</NavLink>
            </List>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Button
              variant='text'
              disableRipple
              onClick={() => setShowSignUpDialog(true)}
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
              onClick={() => setShowSignInDialog(true)}
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