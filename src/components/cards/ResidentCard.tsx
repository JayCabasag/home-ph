import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, useMediaQuery, Box } from '@mui/material';
import Image from 'next/image';

interface ResidentCardProps {
    property: any
}

export default function ResidentCard({ property }: ResidentCardProps) {
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  
  return (
    <Card sx={{ maxWidth: 380, height: '100%', display: 'flex', flexDirection: 'column'}}>
      <CardActionArea sx={{flex: 1}}>
        <CardMedia
          component="img"
          height={isMobileScreen ? '200px' : '345px'}
          width={isMobileScreen ? '200px' : '345px'}
          image={property.mainImage}
          alt="green iguana"
        />
        <CardContent sx={{height: '100%' }}>
          <Typography
            gutterBottom
            component="div"
            sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '14px', sm: '15px', md: '17px', lg: '22px' },
                fontWeight: 700,
                lineHeight: { xs: '14px', sm: '15px', md: '17px', lg: '22px' },
                letterSpacing: '0em',
                textAlign: 'left',
              }}
          >
            {property.name}
          </Typography>
          <Box>
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