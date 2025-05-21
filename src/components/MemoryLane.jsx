import * as React from 'react';
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  useMediaQuery,
  IconButton,
  Modal,
  Button,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// Media component to handle both images and videos
const MediaItem = ({ item, onClick }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        width: '100%',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {item.type === 'video' ? (
        <>
          <video
            src={item.mediaUrl}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
            muted
            loop
            playsInline
          />
          <IconButton
            sx={{
              'position': 'absolute',
              'top': '50%',
              'left': '50%',
              'transform': 'translate(-50%, -50%)',
              'color': 'white',
              'backgroundColor': 'rgba(0,0,0,0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <PlayCircleOutlineIcon fontSize="large" />
          </IconButton>
        </>
      ) : (
        <img
          src={item.mediaUrl}
          alt={item.title}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      )}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 1.5,
          background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {item.type === 'video' && (
          <PlayCircleOutlineIcon
            sx={{ color: 'white', mr: 1 }}
            fontSize="small"
          />
        )}
        <Typography
          variant="subtitle2"
          color="white"
          sx={{
            fontWeight: 'medium',
            textShadow: '0 1px 3px rgba(0,0,0,0.6)',
          }}
        >
          {item.title}
        </Typography>
      </Box>
    </Box>
  );
};

const FullscreenMedia = ({ item, onClose, onNext, onPrev }) => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        position: 'relative',
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          'position': 'absolute',
          'top': 16,
          'right': 16,
          'color': 'white',
          'backgroundColor': 'rgba(0,0,0,0.5)',
          'zIndex': 2,
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)',
          },
        }}
      >
        <CloseIcon />
      </IconButton>

      {item.type === 'video' ? (
        <video
          src={item.mediaUrl}
          autoPlay
          controls
          style={{
            maxWidth: '100%',
            maxHeight: '90vh',
            objectFit: 'contain',
          }}
        />
      ) : (
        <img
          src={item.mediaUrl}
          alt={item.title}
          style={{
            maxWidth: '100%',
            maxHeight: '90vh',
            objectFit: 'contain',
          }}
        />
      )}

      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Button
          onClick={onPrev}
          variant="contained"
          startIcon={<NavigateBeforeIcon />}
          sx={{
            'backgroundColor': 'rgba(0,0,0,0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
          }}
        >
          Previous
        </Button>
        <Button
          onClick={onNext}
          variant="contained"
          endIcon={<NavigateNextIcon />}
          sx={{
            'backgroundColor': 'rgba(0,0,0,0.5)',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.7)',
            },
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

const MemoryLane = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');
  const [openModal, setOpenModal] = React.useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = React.useState(0);

  const handleOpenModal = (index) => {
    setCurrentMediaIndex(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleNext = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === mediaData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? mediaData.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 5,
        px: isMobile ? 2 : 0,
        backgroundColor: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          mb: 6,
          fontWeight: 'bold',
          color: '#d23a7b',
          textAlign: 'center',
          fontSize: isMobile ? '2rem' : '3rem',
        }}
      >
        Our Memory Lane
      </Typography>

      <Box
        sx={{
          width: '90%',
          maxWidth: 1200,
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: 3,
          backgroundColor: 'white',
          p: 2,
        }}
      >
        <ImageList
          variant="quilted"
          cols={isMobile ? 2 : isTablet ? 3 : 4}
          rowHeight={isMobile ? 100 : isTablet ? 150 : 200}
          gap={8}
        >
          {mediaData.map((item, index) => (
            <ImageListItem
              key={item.id}
              cols={item.cols || 1}
              rows={item.rows || 1}
              sx={{
                'borderRadius': 2,
                'overflow': 'hidden',
                'transition': 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  zIndex: 1,
                },
              }}
            >
              <MediaItem item={item} onClick={() => handleOpenModal(index)} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="media-modal"
        aria-describedby="media-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(8px)',
        }}
      >
        <Box
          sx={{
            width: '90%',
            height: '90%',
            maxWidth: '1200px',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            outline: 'none',
            position: 'relative',
            backgroundColor: 'black',
          }}
        >
          <FullscreenMedia
            item={mediaData[currentMediaIndex]}
            onClose={handleCloseModal}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </Box>
      </Modal>
    </Box>
  );
};

// Updated media data with both images and videos
const mediaData = [
  {
    id: 1,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img1.jpeg',
    cols: 1,
    rows: 3,
  },
  {
    id: 2,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img2.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 3,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img3.jpeg',
    cols: 1,
    rows: 3,
  },
  {
    id: 4,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img4.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 5,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img5.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 6,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img6.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 7,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img7.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 8,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img8.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 9,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img9.jpeg',
    cols: 2,
    rows: 2,
  },
  {
    id: 10,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img10.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 11,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img11.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 12,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img12.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 13,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img13.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 14,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img14.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 15,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img15.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 16,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img16.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 17,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img17.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 18,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img18.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 19,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img19.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 20,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img20.jpeg',
    cols: 2,
    rows: 3,
  },
  {
    id: 21,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img21.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 22,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img22.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 23,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img23.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 24,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img24.jpeg',
    cols: 1,
    rows: 3,
  },
  {
    id: 25,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img25.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 26,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img26.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 27,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img27.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 28,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img28.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 29,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img29.jpeg',
    cols: 2,
    rows: 2,
  },
  {
    id: 30,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img30.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 31,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img31.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 32,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img32.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 33,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img33.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 34,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img34.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 35,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img35.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 36,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img36.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 37,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img37.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 38,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img38.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 39,
    type: 'video',
    mediaUrl: '/images/MemoryLane/vid39.mp4',
    cols: 1,
    rows: 2,
  },
  {
    id: 40,
    type: 'video',
    mediaUrl: '/images/MemoryLane/vid40.mp4',
    cols: 1,
    rows: 2,
  },
  {
    id: 41,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img41.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 42,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img42.jpeg',
    cols: 2,
    rows: 2,
  },
  {
    id: 43,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img43.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 44,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img44.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 45,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img45.jpeg',
    cols: 2,
    rows: 2,
  },
  {
    id: 46,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img46.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 47,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img47.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 48,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img48.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 49,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img49.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 50,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img50.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 51,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img51.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 52,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img52.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 53,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img53.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 54,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img54.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 55,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img55.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 56,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img56.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 57,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img57.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 58,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img58.jpeg',
    cols: 2,
    rows: 2,
  },
  {
    id: 59,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img59.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 60,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img60.jpeg',
    cols: 1,
    rows: 3,
  },
  {
    id: 61,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img61.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 62,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img62.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 63,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img63.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 64,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img64.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 65,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img65.jpeg',
    cols: 2,
    rows: 2,
  },
  {
    id: 66,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img66.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 67,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img67.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 68,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img68.jpeg',
    cols: 2,
    rows: 2,
  },
  {
    id: 69,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img69.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 70,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img70.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 71,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img71.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 72,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img72.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 73,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img73.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 74,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img74.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 75,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img75.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 76,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img76.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 77,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img77.jpeg',
    cols: 1,
    rows: 1,
  },
  {
    id: 78,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img78.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 79,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img79.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 80,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img80.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 81,
    type: 'video',
    mediaUrl: '/images/MemoryLane/vid81.mp4',
    cols: 1,
    rows: 2,
  },
  {
    id: 82,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img82.jpeg',
    cols: 2,
    rows: 2,
  },
  {
    id: 83,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img84.png',
    cols: 1,
    rows: 2,
  },
  {
    id: 84,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img85.png',
    cols: 1,
    rows: 2,
  },
  {
    id: 85,
    type: 'image',
    mediaUrl: '/images/MemoryLane/ghibliimg.png',
    cols: 1,
    rows: 2,
  },
  {
    id: 86,
    type: 'image',
    mediaUrl: '/images/Moments/freshers2.png',
    cols: 1,
    rows: 2,
  },
  {
    id: 87,
    type: 'image',
    mediaUrl: '/images/Moments/ramdara.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 88,
    type: 'image',
    mediaUrl: '/images/Moments/puLaGarden.jpeg',
    cols: 1,
    rows: 2,
  },
  {
    id: 89,
    type: 'video',
    mediaUrl: '/images/MemoryLane/vid1.mp4',
    cols: 1,
    rows: 2,
  },
  {
    id: 90,
    type: 'video',
    mediaUrl: '/images/MemoryLane/vid2.mp4',
    cols: 1,
    rows: 2,
  },
  {
    id: 91,
    type: 'video',
    mediaUrl: '/images/MemoryLane/vid3.mp4',
    cols: 1,
    rows: 2,
  },
  {
    id: 92,
    type: 'video',
    mediaUrl: '/images/MemoryLane/vid4.mp4',
    cols: 1,
    rows: 2,
  },
  {
    id: 93,
    type: 'video',
    mediaUrl: '/images/MemoryLane/vid5.mp4',
    cols: 1,
    rows: 2,
  },
  {
    id: 94,
    type: 'image',
    mediaUrl: '/images/Moments/lehLaddakh.png',
    cols: 1,
    rows: 2,
  },
  {
    id: 95,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img87.png',
    cols: 1,
    rows: 2,
  },
  {
    id: 96,
    type: 'image',
    mediaUrl: '/images/MemoryLane/img88.png',
    cols: 1,
    rows: 2,
  },
];

export default MemoryLane;
