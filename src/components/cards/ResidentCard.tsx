import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import { Button, CardActionArea, CardActions, useMediaQuery, Box } from '@mui/material';
import Image from 'next/image';
import Sidebar from '@/containers/sidebar/Sidebar';
import { COLORS, PropertyCategory } from '@/utils/app_constants';

interface ResidentCardProps {
    property: any
}

export default function ResidentCard({ property }: ResidentCardProps) {
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const propertyCategory = property.category
  const isForRent = propertyCategory === PropertyCategory.FOR_RENT
  const isForSale = propertyCategory === PropertyCategory.FOR_SALE
  const handleToggleSidebar = () => {
    setShowSidebar(prevState => !prevState)
  }
  
  return (
    <Card sx={{ maxWidth: 420, height: '100%', display: 'flex', flexDirection: 'column'}}>
      <Sidebar property={property} open={showSidebar} handleToggleSidebar={handleToggleSidebar}/>
      <CardActionArea sx={{flex: 1, position: 'relative'}} onClick={handleToggleSidebar}>
        <Box
          sx={{
          position: 'absolute',
          backgroundColor: '#FFFFFF',
          padding: { xs: '5px',sm: '5px', md: '13px', lg: '15px' }
          }}
          
        >
          {isForRent && `Php ${Number(property.price.amount).toLocaleString()}/${property.price.type}`}
          {isForSale && `Php ${Number(property.price.amount).toLocaleString()}`}
        </Box>
        <CardMedia
          component="img"
          height={isMobileScreen ? '180px' : '300px'}
          width={isMobileScreen ? '200px' : '345px'}
          image={property.mainImage}
          alt="house"
        />
        <CardContent sx={{height: '100%' }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '5px'
            }}
          >
            <Typography
              gutterBottom
              component="div"
              sx={{
                  fontFamily: 'Inter',
                  fontSize: { xs: '14px', sm: '15px', md: '17px', lg: '22px' },
                  fontWeight: 700,
                  lineHeight: { xs: '16px', sm: '17px', md: '19px', lg: '24px' },
                  letterSpacing: '0em',
                  textAlign: 'left',
                }}
            >
              {property.name}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '10px', sm: '10px', md: '14px', lg: '14px' },
                backgroundColor: isForSale ? 'green'  : COLORS.BROWN,
                minWidth: 'max-content',
                color: COLORS.WHITE,
                padding: { xs: '2px 5px', sm: '2px 5px', md: '5px 15px', lg: '5px 15px' },
                borderRadius: '5px',
                textTransform: 'capitalize'
              }}
            >
              {isForRent && 'For rent'}
              {isForSale && 'For sale'}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: {xs: '5px', sm: '5px', md: '15px', lg: '15px'}, flexWrap: 'wrap', marginTop: {xs: '5px', sm: '5px', md: '10px', lg: '10px'},}}>
           {property.type.map((type: string, index: number) => {
                return (
                    <Typography
                        key={index}
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            fontFamily: 'Inter',
                            fontSize: { xs: '13px', sm: '13px', md: '15px', lg: '17px' },
                            fontWeight: 600,
                            lineHeight:  { xs: '14px', sm: '14px', md: '16px', lg: '18px' },
                            letterSpacing: '0em',
                            textAlign: 'left',
                          }}
                    >
                        {type}
                    </Typography>
                )
            })}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: { xs: '12px', sm: '12px', md: '15px', lg: '15px' },

        }}
      >
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>
            <Image
                src='/assets/location-icon.svg'
                alt='location-icon'
                height={18}
                width={18}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontFamily: 'Inter',
                fontSize:  { xs: '13px', sm: '14px', md: '18px', lg: '20px' },
                fontWeight: 400,
                lineHeight:  { xs: '13px', sm: '14px', md: '18px', lg: '20px' },
                textAlign: 'left',
                
            }}>
                {property.address}
            </Typography>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px'}}>
            <Image
                src='/assets/star-icon.svg'
                alt='star-icon'
                height={18}
                width={18}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontFamily: 'Inter',
                fontSize:  { xs: '13px', sm: '14px', md: '18px', lg: '20px' },
                fontWeight: 600,
                lineHeight: { xs: '13px', sm: '14px', md: '18px', lg: '20px' },
                letterSpacing: '0em',
                textAlign: 'left',
              }}
            >
                {property.rating}
            </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}