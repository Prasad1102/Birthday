import { Box, Typography, ImageList, ImageListItem, useMediaQuery } from "@mui/material";

const MemoryLane = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:900px)');

  return (
    <Box sx={{
      p: 4,
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
    }}>
      <Typography variant="h3" component="h1" sx={{
        mb: 4,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'primary.main',
      }}>
        Our Memory Lane
      </Typography>

      <ImageList 
        variant="masonry"
        cols={isMobile ? 1 : isTablet ? 2 : 3}
        gap={16}
        sx={{
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          p: 2,
          backgroundColor: 'white',
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <Box sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: 2,
              '&:hover img': {
                transform: 'scale(1.05)',
              }
            }}>
              <img
                src={`${item.img}?w=400&auto=format`}
                srcSet={`${item.img}?w=400&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s ease',
                  objectFit: 'cover',
                }}
              />
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                p: 1.5,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
              }}>
                <Typography 
                  variant="subtitle1" 
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
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

// Your existing itemData array
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

export default MemoryLane;