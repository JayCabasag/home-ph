import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, useMediaQuery, Box } from '@mui/material';
import Image from 'next/image';

interface TestimonialCardProps {
    testimonial: any
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  
    const isMobileScreen = useMediaQuery('(max-width: 768px)');
  
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '5px' }}>
      <CardActionArea sx={{flex: 1}}>
        <CardContent sx={{ height: '100%', padding: '28px'}}>
          <Box sx={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center'
          }}>
          <Box>
            <Image
                src={testimonial.user.profileImage}
                height={isMobileScreen ? 60 :85}
                width={isMobileScreen ? 60 :85}
                alt='user'
                style={{
                    borderRadius: '50%',
                  }}
            />
            </Box>
            <Box sx={{ width: '100%' }}>
            <Typography
                gutterBottom
                component="div"
                sx={{
                    fontFamily: 'Inter',
                    fontSize: { xs: '16px', sm: '16px', md: '24px', lg: '24px' },
                    fontWeight: 700,
                    lineHeight: { xs: '18px', sm: '18px', md: '28px', lg: '28px' },
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color: '#302C39'
                }}
            >
                {testimonial.user.name}
            </Typography>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <Typography
                    gutterBottom
                    component="div"
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: { xs: '13px', sm: '13px', md: '17px', lg: '17px' },
                        fontWeight: 500,
                        lineHeight: { xs: '17px', sm: '17px', md: '38px', lg: '38px' },
                        letterSpacing: '0em',
                        textAlign: 'left',
                        color: '#87858C'
                    }}
                >
                    {testimonial.user.residences}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px'}}>
                    <Image
                        src='/assets/star-icon.svg'
                        alt='star-icon'
                        height={18}
                        width={18}
                    />
                <Typography
                    gutterBottom
                    component="div"
                    sx={{
                        fontFamily: 'Inter',
                        fontSize: { xs: '13px', sm: '14px', md: '18px', lg: '18px' },
                        fontWeight: 700,
                        lineHeight: { xs: '13px', sm: '14px', md: '18px', lg: '18px' },
                        textAlign: 'left',
                        color: '#1B1925',
                        marginTop: '6px'
                    }}
                >
                    {testimonial.rating}
                </Typography>
                </Box>
            </Box>
            </Box>
          </Box>
          <Typography
                gutterBottom
                component="div"
                sx={{
                    fontFamily: 'Inter',
                    fontSize: { xs: '14px', sm: '14px', md: '20px', lg: '20px' },
                    fontWeight: 700,
                    lineHeight: { xs: '18px', sm: '18px', md: '28px', lg: '28px' },
                    letterSpacing: '0em',
                    textAlign: 'left',
                    color: '#302C39',
                    marginTop: '32px'
                }}
            >
                {testimonial.ratingCategory[0]}
            </Typography>
          <Typography
            gutterBottom
            component="div"
            sx={{
                fontFamily: 'Inter',
                fontSize: { xs: '13px', sm: '14px', md: '17px', lg: '17px' },
                fontWeight: 500,
                lineHeight: { xs: '17px', sm: '17px', md: '38px', lg: '38px' },
                letterSpacing: '0em',
                textAlign: 'left',
                color: '#87858C'
              }}
          >
            " {testimonial.ratingMessage} "
          </Typography>
          <Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}