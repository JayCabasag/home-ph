import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import ImagePreviewerDialog from '@/components/dialogs/ImagePreviewerDialog';

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const INITIAL_LOAD_IMAGES = 5
interface GalleryTabProps {
  images: any[]
  totalImages: number
}

export default function GalleryTab({ images, totalImages }: GalleryTabProps) {

  const [totalPhotosToShow, setTotalPhotosToShow] = React.useState<number>(INITIAL_LOAD_IMAGES)
  const [showImagePreviewer, setShowImagePreviewer] = React.useState<boolean>(false)
  const [selectedImageToPreview, setSelectedImageToPreview] = React.useState<string>('')
  const galleryImages = images.slice(0, totalPhotosToShow)
  const isExceedsInitialImages = totalPhotosToShow < totalImages
  const handleLoadMoreImages = () => {
    if (totalPhotosToShow < totalImages) {
      setTotalPhotosToShow(prev => prev + INITIAL_LOAD_IMAGES)
    }
  }

  const handlePreviewImage = (src: string) => {
    setSelectedImageToPreview(src)
    setShowImagePreviewer(true)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <ImagePreviewerDialog src={selectedImageToPreview} open={showImagePreviewer} setOpen={setShowImagePreviewer} />
      <ImageList
        sx={{
          width: '100%',
          height: 'auto',
          transform: 'translateZ(0)',
        }}
        rowHeight={200}
        gap={1}
      >
        {galleryImages.map((item, index) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows} onClick={() => handlePreviewImage(item.img)}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position="top"
                actionPosition="left"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
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