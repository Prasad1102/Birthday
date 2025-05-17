import * as React from 'react';
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  useMediaQuery,
  IconButton,
} from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

// Media component to handle both images and videos
const MediaItem = ({ item }) => {
  return item.type === 'video' ? (
    <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
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
    </Box>
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
  );
};

const MemoryLane = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');

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
          color: 'primary.main',
          textAlign: 'center',
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
          {mediaData.map((item) => (
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
              <MediaItem item={item} />
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
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

// Updated media data with both images and videos
const mediaData = [
  {
    id: 1,
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'First Meeting',
    rows: 2,
    cols: 2,
  },
  {
    id: 2,
    type: 'video',
    mediaUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4',
    title: 'Freshers Party',
    cols: 1,
    rows: 1,
  },
  {
    id: 3,
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Wedding Day',
    cols: 1,
    rows: 1,
  },
  {
    id: 4,
    type: 'video',
    mediaUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-young-woman-walking-on-a-country-road-1174-large.mp4',
    title: 'Dinosaur Garden',
    cols: 2,
    rows: 1,
  },
  {
    id: 5,
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Ramdara Temple',
    cols: 2,
    rows: 1,
  },
  {
    id: 6,
    type: 'video',
    mediaUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-down-a-mountain-41576-large.mp4',
    title: 'Scooty Lessons',
    rows: 2,
    cols: 2,
  },
  {
    id: 7,
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'The Fall',
    cols: 1,
    rows: 1,
  },
  {
    id: 8,
    type: 'video',
    mediaUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-a-path-in-a-forest-3442-large.mp4',
    title: 'Garden Meet',
    cols: 1,
    rows: 1,
  },
  {
    id: 9,
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Future Dreams',
    rows: 2,
    cols: 2,
  },
  {
    id: 10,
    type: 'video',
    mediaUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-two-people-sitting-on-a-bench-talking-1175-large.mp4',
    title: 'Coffee Date',
    cols: 1,
    rows: 1,
  },
  {
    id: 11,
    type: 'image',
    mediaUrl: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Random Outing',
    cols: 1,
    rows: 1,
  },
  {
    id: 12,
    type: 'video',
    mediaUrl: '/images/MemoryLane/firstlesson.mp4',
    title: 'Birthday Surprise',
    cols: 2,
    rows: 4,
  },
];

export default MemoryLane;
