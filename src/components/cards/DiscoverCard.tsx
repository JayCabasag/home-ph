import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { COLORS } from '@/utils/app_constants';

interface DiscoverCardProps {
  total: string,
  message: string
}

export default function DiscoverCard({ total, message }: DiscoverCardProps) {
  return (
    <Card
      sx={{
        height: { xs: '110px', md: '145px' },
        backgroundColor: 'transparent',
        boxShadow: 'none',
        fontWeight: 700
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: { xs: '32px', sm: '35px', md: '40px', lg: '55px' },
            fontWeight: 700,
            lineHeight: '34px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: COLORS.BROWN
          }}
          gutterBottom
        >
          {total}
        </Typography>
        <Typography
          sx={{
            maxWidth: '190px',
            fontFamily: 'Inter',
            fontSize: { xs: '14px', sm: '14px', md: '14px', lg: '17px' },
            fontWeight: 500,
            lineHeight: '25px',
            letterSpacing: '0em',
            textAlign: 'left',
          }}
          color="text.secondary"
          gutterBottom
        >
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
}