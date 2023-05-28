import { Box, Button, Divider, List, ListItem, Typography } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import { COLORS } from '@/utils/app_constants';
import { comments, ratingGraph } from '@/utils/tests';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ReviewCard from '@/components/cards/ReviewCard';

interface ReviewsTabProps {
  property: any,
  totalStarRatings: number[]
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  [theme.breakpoints.up('xs')]: { width: 170 },
  [theme.breakpoints.up('sm')]: { width: 170 },
  [theme.breakpoints.up('md')]: { width: 220 },
  [theme.breakpoints.up('lg')]: { width: 220 },
  borderRadius: 12,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 12,
    backgroundColor: COLORS.YELLOW,
  },
}));

const ReviewsTab = ({ property, totalStarRatings } : ReviewsTabProps ) => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          paddingX: { xs: '6px', sm: '6px', md: '26px', lg: '26px' },
          paddingY: '15px',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: '12px', sm: '16px', md: '26px', lg: '26px' }
        }}
      >
        <Box>
          <List>
            {ratingGraph.map((rating, index) => {
              return (
                <ListItem key={index} sx={{ display: 'flex', gap: '25px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Inter',
                    fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' },
                    fontWeight: 400,
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                  }}
                >{rating.star}</Typography>
                <BorderLinearProgress variant="determinate" value={rating.value} />
              </ListItem>
              )
            })}
          </List>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px'
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontSize: { xs: '32px', sm: '32px', md: '50px', lg: '50px' },
              fontWeight: 400,
              lineHeight: { xs: '32px', sm: '32px', md: '50px', lg: '50px' },
              letterSpacing: '0em',
              textAlign: 'center',
            }}
          >
            {property.rating}
          </Typography>
          <Box sx={{ display: 'flex', gap: '4px' }}>
                {totalStarRatings.map((totalStarRating, index) => {
                  if (totalStarRating >= 1) {
                    return (
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: '15px', width: '15px'}} key={index}>
                        <Image
                            fill
                            src='/assets/yellow-star.svg'
                            alt='rating-star'
                        />
                    </Box>)
                  }
                  return (
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: '15px', width: '15px'}} key={index}>
                        <Box sx={{ height: '15px', width: '15px',backgroundColor: '#FFFFFF', position: 'absolute', zIndex: 3, marginLeft: '7px'}}></Box>
                        <Box sx={{ position: 'relative', overflow: 'hidden', height: '15px', width: '15px'}} key={index}>
                            <Image
                                fill
                                src='/assets/yellow-star.svg'
                                alt='rating-star'
                                style={{ zIndex: 2 }}
                            />
                        </Box>
                    </Box>
                    )
                })}
            </Box>
            <Typography
              sx={{
                fontSize: { xs: '14px', sm: '14px', md: '16px', lg: '16px' },
              }}
            >
            ({property.totalRated})
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingY:  { xs: '20px', sm: '20px', md: '25px', lg: '25px' }
        }}
      >
        <Button
          variant='outlined'
          startIcon={<ChatOutlinedIcon />}
        >
          write a review
        </Button>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingX: { xs: '10px', sm: '10px', md: '26px', lg: '26px' },
          gap: { xs: '10px', sm: '10px', md: '15px', lg: '15px' },
          paddingBottom: { xs: '10px', sm: '10px', md: '26px', lg: '26px' }
        }}
      >
        {comments.map((comment, index) => {
          return <ReviewCard comment={comment} key={index}/>
        })}
      </Box>
    </Box>
  )
}

export default ReviewsTab




