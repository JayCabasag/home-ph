import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';

interface ReviewCardProps {
    comment: any
}

const MAX_TOTAL_COMMENT = 180

export default function ReviewCard({comment}: ReviewCardProps) {

    const message = comment.reviews.message
    const images = comment.reviews.images ?? []
    const isMessageLong = message.split('').length >= MAX_TOTAL_COMMENT
    const [isShowLongMessage, setIsShowLongMessage] = useState(false)
    const [totalStarRatings, setTotalStarRatings] = useState<number[]>([])

    const generateStars = (ratingValue: number) => {
        let rating = ratingValue
        let initialRatingArray = []
        while (rating > 0) {
            initialRatingArray.push(rating)
            rating--
        }
        setTotalStarRatings(initialRatingArray)
    }

    useEffect(() => {
        if (!comment.reviews.rating) return
        generateStars(comment.reviews.rating)
    }, [comment.reviews.rating])

  return (
    <Card sx={{ width: '100%' }}>
      <CardContent>
        <Typography
          sx={{
            mb: 1,
            fontSize: { xs: '14px', sm: '14px', md: '17px', lg: '17px' },
            fontWeight: 600
         }}
        >
          {comment.user.name}
        </Typography>
        <Typography
              sx={{
                fontSize: { xs: '13px', sm: '13px', md: '15px', lg: '15px' },
                fontWeight: 500,
                color: '#A89797'
              }}
            >
                {comment.user.residences}
            </Typography>
        <Box sx={{ display: 'flex', gap: '2px', alignItems: 'center'  }}>
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
            <Typography
              sx={{
                marginLeft: '15px',
                fontSize: { xs: '13px', sm: '13px', md: '15px', lg: '15px' },
                fontWeight: 600
              }}
            >
                {comment.reviews.remarks}
            </Typography>
        </Box>
        <Box
          sx={{
            marginTop: '15px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px'
          }}
        >
            {images.length > 0 && images.map((image: string, index: number) => {
            return (
                <Box sx={{ cursor: 'pointer', position: 'relative', overflow: 'hidden', height: '120px', width: '100%'}} key={index}>
                    <Image
                        fill
                        src={image}
                        alt='rating-star'
                    />
                </Box>)
            })}
        </Box>
        <Typography
          variant="body2"
          sx={{
            marginTop: '15px',
            fontSize: { xs: '14px', sm: '14px', md: '15px', lg: '15px' },
          }}
        >
          {!isMessageLong && message}
          {isMessageLong && isShowLongMessage && message}
          {isMessageLong && !isShowLongMessage && `${message.substring(0, MAX_TOTAL_COMMENT)}...`}
          {isMessageLong && !isShowLongMessage && (
            <Typography variant="body2" component='span' role='button' sx={{ cursor: 'pointer' }} onClick={() => setIsShowLongMessage(true)}>
                {' '}<strong>More</strong>
            </Typography>
          )}
          {isMessageLong && isShowLongMessage && (
            <Typography variant="body2" component='span' role='button' sx={{ cursor: 'pointer' }} onClick={() => setIsShowLongMessage(false)}>
                {' '}<strong>Show less</strong>
            </Typography>
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{new Date(comment.createdAt).toLocaleDateString()}</Button>
      </CardActions>
    </Card>
  );
}