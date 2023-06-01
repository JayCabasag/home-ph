import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import Image from 'next/image';

interface Props {
  founder: any
}

export default function TeamCard({ founder }: Props) {
  return (
    <Card sx={{ width: '100%', height: '100%' }}>
      <CardActionArea sx={{ width: '100%', display: 'flex', flexDirection: 'column', paddingTop: '15px', height: '100%', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Box
          sx={{
            height: { xs: '200px', sm: '200px', md: '360px', lg: '360px' },
            width: { xs: '100%', sm: '100%', md: '320px', lg: '320px' },
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Image
            fill
            src={founder.image}
            alt={founder.name}
          />
        </Box>
        <CardContent sx={{ width: '100%' }}>
          <Typography gutterBottom sx={{ width: '100%', fontSize: { xs: '15px', sm: '15px', md: '17px', lg: '18px' }, fontWeight: 600 }}>
            {founder.name}
          </Typography>
          <Typography gutterBottom sx={{ width: '100%', fontSize: { xs: '13px', sm: '13px', md: '15px', lg: '17px' } }}>
            {founder.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ width: '100%', fontSize: { xs: '13px', sm: '13px', md: '15px', lg: '16px' } }}>
            {founder.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}