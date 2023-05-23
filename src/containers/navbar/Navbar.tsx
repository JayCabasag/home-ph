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
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { COLORS, MD_NAVBAR_HEIGHT, XS_NAVBAR_HEIGHT } from '@/utils/app_constants';
import { useRouter } from 'next/router';
import Link from 'next/link';


interface NavbarProps {
    window?: () => Window;
}


const drawerWidth = 240;
const navItems = [{ name: 'Home', path: '/' }, { name: 'Featured', path: '/featured' }, { name: 'Properties', path: '/properties' }, { name: 'About us', path: '/about-us' }];

function Navbar( props : NavbarProps) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const router = useRouter()
  const activePath = router.asPath

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{ 
            my: 2,
            fontSize: { sm: '25px', md: '43px' },
            fontWeight: 700,
            color: COLORS.BLACK
        }}
      >
        HOME.PH
      </Typography>
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
                        fontSize: { sm: '16px', md: '18px' },
                        fontWeight: 600,
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
      <AppBar
        component="nav"
        sx={{
            backgroundColor: COLORS.WHITE,
            boxShadow: 'none',
            paddingLeft: { xs: '0px', sm: '0px', md: '60px', lg: '115px'},
            paddingRight: { xs: '0px', sm: '0px', md: '60px', lg: '115px'},
            height: { xs: XS_NAVBAR_HEIGHT, md: MD_NAVBAR_HEIGHT},
            display: 'flex',
            justifyContent: 'center'
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
          <Typography
            variant="h6"
            component="div"
            sx={{
                flexGrow: 1,
                display: 'flex',
                fontSize: { xs: '18px', sm: '25px', md: '30px' },
                fontWeight: 900,
                textAlign: 'left',
                color: COLORS.BLACK
            }}
          >
            HOME.PH
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }}}>
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
                        fontSize: { sm: '16px', md: '17px' },
                        fontWeight: 600,
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
                fontSize: { sm: '16px', md: '17px' },
                fontWeight: 600,
                lineHeight: '25px',
                textAlign: 'left',
                minWidth: { xs: 'max-content', sm: '40px', md: '157px' },
                height: { xs: '40px',sm: '40px', md: '45px' },
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
                fontSize: { sm: '16px', md: '17px' },
                fontWeight: 600,
                lineHeight: '25px',
                textAlign: 'left',
                minWidth: { xs: 'max-content', sm: '40px', md: '157px' },
                height: { xs: '40px', sm: '40px', md: '45px' },
                borderRadius: '15px'
              }}
            >
                Sign in
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

export default Navbar