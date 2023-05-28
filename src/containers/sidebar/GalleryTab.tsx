import * as React from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery, Typography, Button } from '@mui/material'
import Masonry from '@mui/lab/Masonry';
import Image from 'next/image';

const INITIAL_LOAD_IMAGES = 5
interface GalleryTabProps {
  images: any[]
  totalImages: number
}

export default function GalleryTab({ images, totalImages }: GalleryTabProps ) {
  const isMobileScreen = useMediaQuery('(max-width: 768px)');
  const [totalPhotosToShow, setTotalPhotosToShow] = React.useState<number>(INITIAL_LOAD_IMAGES)
  const galleryImages = images.slice(0, totalPhotosToShow)
  const isExceedsInitialImages = totalPhotosToShow < totalImages
  const handleLoadMoreImages = () => {
    if (totalPhotosToShow < totalImages) {
      setTotalPhotosToShow(prev => prev + INITIAL_LOAD_IMAGES)
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        paddingTop: { xs: '8px', sm: '8px', md: '15px', lg: '15px' }
      }}
    >
      <Masonry columns={2} spacing={isMobileScreen ? 1 : 2}>
        {galleryImages.map((item, index) => {
          return (
            <Box sx={{ position: 'relative', overflow: 'hidden', height: '150px', width: '100%'}} key={index}>
              <Image
                  fill
                  src={item.img}
                  alt='house'
              />
            </Box>
          )
        })}
      </Masonry>
      {galleryImages.length <= 0 && (
        <Typography
          sx={{
            marginTop: '50%',
            textTransform: 'tranlateY(-50%)',
            fontSize: { xs: '14px', sm: '15px', md: '17px', lg: '22px' },
          }}
        >Nothing here...</Typography>
      )}
      {isExceedsInitialImages && (
        <Button onClick={handleLoadMoreImages}>
          Load more
        </Button>
      )}
    </Box>
  );
}