import { Alert, AlertColor, Box, Button, Divider, IconButton, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const overviewOptions = [{label: 'save', asset: '/assets/save-icon.svg'}, {label: 'Route', asset: '/assets/direction-icon.svg'}, {label: 'share', asset: '/assets/share-icon.svg'}]
const propertyMainInfoOptions = [{label: '123 Main St, New Lower Bicutan, Taguig 1632 Metro Manila, Philippines', asset: '/assets/location-icon-outline.svg'}, {label: 'Owner: John Doe', asset: '/assets/user-icon.svg' }, {label: 'Contact: 0912-456-7580', asset: '/assets/telephone-icon.svg'}, {label: 'Contact: 0943-456-7581', asset: '/assets/telephone-icon.svg'}]
const localConvenienceList = ["Near supermarket", "Easy LRT Station Access"]
const propertyDescription = ["Square footage or size of the property.", "Unique selling points such as a backyard, swimming pool, or stunning views."]
const ownerNotes = [{ type: 'error', label: 'No pets allowed' }, {type: 'warning', label: 'Be careful with dogs' }, { type: 'info', label: 'Requires two months advance' }, {type: 'success', label: 'Can transfer soon' }]

const OverviewTab = () => {
  return (
    <Box>
      <List disablePadding sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
          {overviewOptions.map((overviewOption, index) => {
              return (
                  <ListItem key={index} disableGutters sx={{
                      fontFamily: 'Inter',
                      fontSize: { xs: '12px', sm: '12px', md: '16px', lg: '16px' },
                      fontWeight: 400,
                      lineHeight: '23px',
                      letterSpacing: '0em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      cursor: 'pointer',
                      paddingY: '15px',
                      borderBottom:  'none'
                  }}>
                      <IconButton sx={{ display: 'flex', flexDirection: 'column' , gap: '2px'}}>
                          <Box sx={{ 
                            position: 'relative', 
                            overflow: 'hidden', 
                            height: {xs: '20px', sm: '20px',md: '26px', lg: '26px'}, 
                            width: {xs: '20px', sm: '20px',md: '26px', lg: '26px'}, 
                          }} key={index}>
                              <Image
                                  fill
                                  src={overviewOption.asset}
                                  alt='option'
                                  style={{ zIndex: 2 }}
                              />
                          </Box>
                          <Typography
                              sx={{
                                fontFamily: 'Inter',
                                fontSize: { xs: '14px', sm: '14px', md: '18px', lg: '18px' },
                                fontWeight: 400,
                                lineHeight: '23px',
                                letterSpacing: '0em',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                cursor: 'pointer',
                                textTransform: 'capitalize'
                              }} 
                          >
                              {overviewOption.label}
                          </Typography>
                      </IconButton>
                  </ListItem>
              )
          })}
      </List>
      <Divider />
      <Box sx={{
        display: 'flex',
        marginTop: '20px',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: '25px'
      }}>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '18px' },
            fontWeight: 500,
            lineHeight: '23px',
            letterSpacing: '0em',
            textAlign: 'left',
          }}
        >
          Interested?
        </Typography>
        <Button
          variant='contained'
          sx={{
            textTransform: 'capitalize',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontSize: { xs: '14px', sm: '14px', md: '15px', lg: '15px' },
            fontWeight: 500,
            lineHeight: '20px',
            textAlign: 'left',
            width: { xs: '40px', sm: '40px', md: '95px', lg: '157px' },
            height: { xs: '35px', sm: '35px', md: '40px', lg: '40px' },
            minWidth: 'max-content',
            borderRadius: '10px'
          }}
        >
          Request viewing
        </Button>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        paddingX: { xs: '10px', sm: '10px', md: '35px', lg: '35px' },
      }}>
        <List>
          {propertyMainInfoOptions.map((propertyMainInfoOption, index) => {
            return (
            <ListItem key={index} sx={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
              <Box sx={{ position: 'relative', overflow: 'hidden', minHeight: '26px', minWidth: '26px'}} >
                  <Image
                      fill
                      src={propertyMainInfoOption.asset}
                      alt='option'
                      style={{ zIndex: 2 }}
                  />
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' },
                }}
              >
                {propertyMainInfoOption.label}
              </Typography>
            </ListItem>
            )
          })}
        </List>
      </Box>
      <Box sx={{
        display: 'flex',
        marginTop: '15px',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: '25px'
      }}>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: { xs: '15px', sm: '15px', md: '17px', lg: '17px' },
            fontWeight: 500,
            lineHeight: '23px',
            letterSpacing: '0em',
            textAlign: 'left',
          }}
        >
        Owner notes:
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        paddingX: { xs: '10px', sm: '10px', md: '35px', lg: '35px' },
      }}>
        <List>
          {ownerNotes.map((ownerNote, index) => {
            const severityValue = (ownerNote?.type as AlertColor) ?? 'info'
            return (
            <ListItem key={index} sx={{ display: 'flex', gap: '15px' }}>
              <Alert severity={severityValue}>{ownerNote.label}</Alert>
            </ListItem>
            )
          })}
        </List>
      </Box>

      <Box sx={{
        display: 'flex',
        marginTop: '15px',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: '25px'
      }}>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: { xs: '15px', sm: '15px', md: '17px', lg: '17px' },
            fontWeight: 500,
            lineHeight: '23px',
            letterSpacing: '0em',
            textAlign: 'left',
          }}
        >
         Description:
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        paddingX: { xs: '10px', sm: '10px', md: '35px', lg: '35px' },
      }}>
        <List>
          {propertyDescription.map((localConvenience, index) => {
            return (
            <ListItem key={index} sx={{ display: 'flex', gap: '15px' }}>
              <RadioButtonUncheckedIcon sx={{ height: '12px', width: '12px' }}/>
              <Typography
                 sx={{
                  fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' },
                }}
              >
                {localConvenience}
              </Typography>
            </ListItem>
            )
          })}
        </List>
      </Box>

      <Box sx={{
        display: 'flex',
        marginTop: '15px',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingX: '25px'
      }}>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: { xs: '15px', sm: '15px', md: '17px', lg: '17px' },
            fontWeight: 500,
            lineHeight: '23px',
            letterSpacing: '0em',
            textAlign: 'left',
          }}
        >
         Local Convenience:
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        paddingX: { xs: '10px', sm: '10px', md: '35px', lg: '35px' },
      }}>
        <List>
          {localConvenienceList.map((localConvenience, index) => {
            return (
            <ListItem key={index} sx={{ display: 'flex', gap: '15px' }}>
              <RadioButtonUncheckedIcon sx={{ height: '12px', width: '12px' }}/>
              <Typography
                 sx={{
                  fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' },
                }}
              >
                {localConvenience}
              </Typography>
            </ListItem>
            )
          })}
        </List>
      </Box>

    </Box>
  )
}

export default OverviewTab




