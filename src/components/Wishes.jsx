import Grid from '@mui/material/Grid';
import { Box, Typography, keyframes } from '@mui/material';
import { GlobalStyles } from '@mui/material';

// Galaxy Animation
const galaxyFlow = keyframes`
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(-100px) translateY(50px); }
`;

// Moon Animations
const moonPulse = keyframes`
  0% { filter: brightness(1); }
  50% { filter: brightness(1.1); }
  100% { filter: brightness(1); }
`;

// Existing Animations
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const fallingStar = keyframes`
  0% { transform: translateY(-100px) translateX(0); opacity: 1; }
  70% { opacity: 1; }
  100% { transform: translateY(100vh) translateX(100px); opacity: 0; }
`;

// Font styles
const fontStyles = (
  <GlobalStyles
    styles={`
      @font-face {
        font-family: 'Ancizar Serif';
        src: url('/fonts/AncizarSerif-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @keyframes confetti {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
      }
    `}
  />
);

const Wishes = () => {
  // Create confetti elements
  const confetti = Array(20).fill(0).map((_, i) => (
    <Box
      key={i}
      sx={{
        position: 'absolute',
        width: 10,
        height: 10,
        backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'][Math.floor(Math.random() * 5)],
        animation: `confetti ${Math.random() * 3 + 2}s linear forwards`,
        left: `${Math.random() * 100}%`,
        top: -10,
        borderRadius: '50%',
      }}
    />
  ));

  // Create Milky Way stars
  const milkyWayStars = Array(300).fill(0).map((_, i) => {
    const size = Math.random() * 0.3 + 0.1;
    const opacity = Math.random() * 0.8 + 0.2;
    return (
      <Box
        key={`mw-star-${i}`}
        sx={{
          position: 'absolute',
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: 'white',
          borderRadius: '50%',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: opacity,
          animation: `${galaxyFlow} ${Math.random() * 200 + 100}s linear infinite`,
          animationDelay: `${Math.random() * 20}s`
        }}
      />
    );
  });

  // Moon crater positions
  const moonCraters = [
    { top: '15%', left: '25%', size: '12px', depth: '0.3' },
    { top: '30%', left: '60%', size: '18px', depth: '0.4' },
    { top: '45%', left: '20%', size: '10px', depth: '0.2' },
    { top: '65%', left: '50%', size: '15px', depth: '0.35' },
    { top: '75%', left: '30%', size: '8px', depth: '0.25' },
    { top: '25%', left: '40%', size: '6px', depth: '0.15' },
    { top: '55%', left: '70%', size: '9px', depth: '0.2' },
  ];

  return (
    <>
      {fontStyles}
      <Box
        sx={{
          width: '100%',
          margin: '0 auto',
          padding: 0,
          backgroundColor: '#0a0a1a',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
        }}
      >
        {/* Milky Way Background */}
        <Box
          sx={{
            position: 'absolute',
            width: '200%',
            height: '200%',
            background:
              'radial-gradient(ellipse at center, rgba(12,20,69,0.3) 0%, rgba(0,0,0,0) 70%)',
            animation: `${galaxyFlow} 500s linear infinite`,
            zIndex: 0,
          }}
        >
          {milkyWayStars}
        </Box>

        {/* Falling Stars */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          {Array(15)
            .fill(0)
            .map((_, i) => (
              <Box
                key={`star-${i}`}
                sx={{
                  'position': 'absolute',
                  'width': 2,
                  'height': 2,
                  'backgroundColor': 'white',
                  'borderRadius': '50%',
                  'left': `${Math.random() * 100}%`,
                  'top': -10,
                  'animation': `${fallingStar} ${
                    Math.random() * 3 + 2
                  }s linear infinite`,
                  'animationDelay': `${Math.random() * 5}s`,
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    width: '100px',
                    height: '1px',
                    background:
                      'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
                    transformOrigin: 'left center',
                    transform: 'rotate(-45deg)',
                    left: 0,
                    top: '50%',
                  },
                }}
              />
            ))}
        </Box>

        {/* Realistic Moon */}
        <Box
          sx={{
            'position': 'absolute',
            'top': { xs: '30px', md: '50px' },
            'right': { xs: '30px', md: '50px' },
            'width': { xs: '100px', md: '150px' },
            'height': { xs: '100px', md: '150px' },
            'borderRadius': '50%',
            'background': 'linear-gradient(145deg, #e6e6e6 0%, #b8b8b8 100%)',
            'boxShadow': '0 0 30px rgba(255, 255, 210, 0.4)',
            'animation': `${moonPulse} 8s ease-in-out infinite`,
            'zIndex': 1,
            'overflow': 'hidden',
            '&:before': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '100%',
              background:
                'radial-gradient(circle at 30% 30%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.3) 100%)',
              borderRadius: '50%',
            },
          }}
        >
          {/* Moon Craters */}
          {moonCraters.map((crater, index) => (
            <Box
              key={`crater-${index}`}
              sx={{
                'position': 'absolute',
                'width': crater.size,
                'height': crater.size,
                'borderRadius': '50%',
                'background': `radial-gradient(circle, #a0a0a0 0%, #${Math.floor(
                  128 - 128 * crater.depth
                )
                  .toString(16)
                  .padStart(2, '0')}${Math.floor(128 - 128 * crater.depth)
                  .toString(16)
                  .padStart(2, '0')}${Math.floor(128 - 128 * crater.depth)
                  .toString(16)
                  .padStart(2, '0')} 100%)`,
                'boxShadow': `inset ${crater.depth * 2}px ${
                  crater.depth * 2
                }px ${crater.depth * 4}px rgba(0,0,0,0.5)`,
                'top': crater.top,
                'left': crater.left,
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '30%',
                  height: '30%',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.2)',
                  top: '20%',
                  left: '20%',
                },
              }}
            />
          ))}
        </Box>

        {/* Confetti */}
        <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
          {confetti}
        </Box>

        {/* Your Content */}
        <Box
          sx={{
            width: '80%',
            margin: '0 auto',
            padding: '40px 0',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Grid container spacing={4} sx={{ margin: 0 }}>
            <Grid
              item
              size={{ xs: 12, md: 6 }}
              sx={{
                padding: '0 !important',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                animation: `${fadeIn} 1s ease-out`,
              }}
            >
              <Box
                sx={{
                  'width': '100%',
                  'display': 'flex',
                  'justifyContent': 'center',
                  'backgroundColor': '#f0f0f0',
                  'padding': 2,
                  'boxSizing': 'border-box',
                  'borderRadius': '8px',
                  'boxShadow': '0 4px 20px rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                <img
                  src="/images/ghibli1.jpeg"
                  alt="Birthday"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '4px',
                    animation: `${floatAnimation} 3s ease-in-out infinite`,
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              size={{ xs: 12, md: 6 }}
              sx={{
                padding: '0 !important',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  padding: 4,
                  height: '100%',
                  backgroundColor: 'rgba(248,248,248,0.9)',
                  boxSizing: 'border-box',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  animation: `${fadeIn} 0.8s ease-out 0.2s both`,
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontFamily: '"Ancizar Serif", serif',
                    fontWeight: 700,
                    fontSize: '2.5rem',
                    color: '#d23a7b',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    letterSpacing: '0.5px',
                    marginBottom: '1.5rem',
                    animation: `${pulse} 2s infinite`,
                    textAlign: 'center',
                  }}
                >
                  Happy Birthday Pritoo! 🎉💖
                </Typography>

                {[
                  'This year, may you complete everything on your bucket list—if not all, at least 50%! 😉',
                  "May you achieve all your goals with lots of fun, laughter, and excitement. Let this be the year—the one that makes you say, 'Yes, this is the best year of my life!'",
                  'May you forget what sadness and tears even feel like, because happiness is all around you now. 💫',
                  "That's my special wish for you—straight from the heart. Enjoy your day, Pritoo! 🥳🌸💐",
                  'Again...... Wish You Many Many Happy Returns Of The Day.🎂❤️💖',
                ].map((text, index) => (
                  <Typography
                    key={index}
                    paragraph
                    sx={{
                      fontFamily: '"Roboto", sans-serif',
                      fontWeight: index === 2 ? 500 : 400,
                      fontStyle: index === 1 ? 'italic' : 'normal',
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      color: '#333',
                      animation: `${fadeIn} 0.5s ease-out ${
                        index * 0.2 + 0.5
                      }s both`,
                      marginBottom: '1rem',
                    }}
                  >
                    {text}
                  </Typography>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Wishes;