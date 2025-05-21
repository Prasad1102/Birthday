import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom';

const balloonsCount = 23;
const colors = [
  '#FF5252',
  '#FF4081',
  '#E040FB',
  '#7C4DFF',
  '#536DFE',
  '#448AFF',
  '#40C4FF',
  '#18FFFF',
  '#64FFDA',
  '#69F0AE',
  '#B2FF59',
  '#EEFF41',
  '#FFFF00',
  '#FFD740',
  '#FFAB40',
  '#FF6E40',
  '#FF3D00',
  '#8D6E63',
  '#78909C',
  '#9E9E9E',
  '#7E57C2',
  '#EC407A',
  '#5C6BC0',
];

// Animations
const floatUp = keyframes`
  0% { transform: translateY(100vh) scale(0.1); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(0) scale(1); }
`;

const pop = keyframes`
  0% { transform: scale(1); opacity: 1; }
  20% { transform: scale(1.4); opacity: 0.8; }
  100% { transform: scale(0); opacity: 0; display: none; }
`;

const debris = keyframes`
  0% { transform: scale(1) translate(0, 0); opacity: 1; }
  100% { transform: scale(0) translate(var(--tx), var(--ty)); opacity: 0; }
`;

const twinkle = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

const moveStar = keyframes`
  from { transform: translateX(0) translateY(0); }
  to { transform: translateX(100px) translateY(50px); }
`;

const confettiFall = keyframes`
  0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const Home = () => {
  const [poppedBalloons, setPoppedBalloons] = useState([]);
  const [activeBalloon, setActiveBalloon] = useState(null);
  const [showBirthdayCard, setShowBirthdayCard] = useState(false);
  const [stars, setStars] = useState([]);
  const [confetti, setConfetti] = useState([]);

  // Create random stars for the background
  useEffect(() => {
    const newStars = Array.from({ length: 300 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 1}px`,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 5}s`,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setStars(newStars);

    // Create confetti
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      color: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'][
        Math.floor(Math.random() * 5)
      ],
      animationDuration: `${Math.random() * 3 + 2}s`,
    }));
    setConfetti(newConfetti);
  }, []);

  // Handle showing the next balloon
  useEffect(() => {
    if (activeBalloon === null && poppedBalloons.length < balloonsCount) {
      const nextBalloon = poppedBalloons.length;
      setActiveBalloon(nextBalloon);
    }
  }, [activeBalloon, poppedBalloons]);

  const handlePop = (index) => {
    if (activeBalloon === index && !poppedBalloons.includes(index)) {
      setPoppedBalloons((prev) => [...prev, index]);
      setActiveBalloon(null);

      if (poppedBalloons.length + 1 === balloonsCount) {
        setTimeout(() => {
          setShowBirthdayCard(true);
        }, 500);
      }
    }
  };

  // Generate random debris pieces
  const renderDebris = (color) => {
    return Array.from({ length: 8 }).map((_, i) => {
      const angle = i * 45 * (Math.PI / 180);
      const distance = 20 + Math.random() * 30;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      return (
        <Box
          key={i}
          sx={{
            'position': 'absolute',
            'top': '50%',
            'left': '50%',
            'width': '8px',
            'height': '8px',
            'backgroundColor': color,
            'borderRadius': '50%',
            'animation': `${debris} 0.8s forwards`,
            '--tx': `${tx}px`,
            '--ty': `${ty}px`,
          }}
        />
      );
    });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #0F2027, #203A43, #2C5364)',
        position: 'relative',
        overflow: 'hidden',
        p: 4,
        textAlign: 'center',
      }}
    >
      {/* Milky Way Galaxy Background with Stars */}
      {stars.map((star, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor:
              i % 4 === 0
                ? '#fff'
                : i % 4 === 1
                ? '#9E9E9E'
                : i % 4 === 2
                ? '#BBDEFB'
                : '#FFD700',
            borderRadius: '50%',
            animation: `${twinkle} ${star.duration} infinite ${star.delay}`,
            opacity: star.opacity,
            zIndex: 0,
          }}
        />
      ))}

      {/* Moving stars */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Box
          key={`moving-${i}`}
          sx={{
            position: 'absolute',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            backgroundColor: ['#fff', '#BBDEFB', '#FFD700'][i % 3],
            borderRadius: '50%',
            animation: `${moveStar} ${Math.random() * 20 + 10}s infinite ${
              i % 2 === 0 ? 'alternate' : 'alternate-reverse'
            }`,
            boxShadow: `0 0 ${Math.random() * 5 + 5}px ${
              Math.random() * 2 + 1
            }px`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Confetti */}
      {showBirthdayCard &&
        confetti.map((item) => (
          <Box
            key={item.id}
            sx={{
              position: 'absolute',
              width: 10,
              height: 10,
              backgroundColor: item.color,
              animation: `${confettiFall} ${item.animationDuration} linear forwards ${item.delay}`,
              left: item.left,
              top: -10,
              borderRadius: '50%',
              zIndex: 2,
            }}
          />
        ))}

      {!showBirthdayCard && (
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            color: 'white',
            position: 'relative',
            zIndex: 1,
            textShadow: '0 0 10px rgba(255,255,255,0.5)',
          }}
        >
          🎭😉 The show begins after {balloonsCount} pops! 🎪
        </Typography>
      )}

      {!showBirthdayCard && (
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{
            position: 'relative',
            zIndex: 1,
            minHeight: '300px',
          }}
        >
          {[...Array(balloonsCount)].map((_, i) => (
            <Grid item key={i}>
              {activeBalloon === i && !poppedBalloons.includes(i) && (
                <Box
                  onClick={() => handlePop(i)}
                  sx={{
                    'position': 'relative',
                    'cursor': 'pointer',
                    'animation': `${floatUp} 1s forwards`,
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      width: '1px',
                      height: '60px',
                      backgroundColor: 'rgba(255,255,255,0.7)',
                      transform: 'translateX(-50%)',
                      zIndex: -1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      'width': 60,
                      'height': 80,
                      'borderRadius': '50%',
                      'backgroundColor': colors[i],
                      'display': 'flex',
                      'alignItems': 'center',
                      'justifyContent': 'center',
                      'fontWeight': 'bold',
                      'fontSize': 20,
                      'color': 'white',
                      'position': 'relative',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                      '&:active': {
                        animation: `${pop} 0.5s forwards`,
                      },
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-5px',
                        left: '50%',
                        width: '10px',
                        height: '10px',
                        backgroundColor: colors[i],
                        borderRadius: '50%',
                        transform: 'translateX(-50%)',
                      },
                    }}
                  >
                    {i + 1}
                  </Box>
                  {/* Debris container */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: poppedBalloons.includes(i) ? 'block' : 'none',
                    }}
                  >
                    {renderDebris(colors[i])}
                  </Box>
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      )}

      {showBirthdayCard && (
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            mt: 6,
            maxWidth: 700,
            mx: 'auto',
            textAlign: 'center',
            animation: `${fadeIn} 1s forwards`,
            transform: 'translateY(20px)',
            opacity: 0,
          }}
        >
          <Box
            sx={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              p: 4,
              color: 'white',
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                textShadow: '0 0 10px rgba(255,255,255,0.5)',
              }}
            >
              🎉 Happy Birthday Pritee! 🥳
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                mb: 3,
                fontSize: '1.1rem',
              }}
            >
              Wishing you a birthday filled with love, laughter, and all your
              favorite things, my dear 🐣🦆🐥❤️!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontStyle: 'italic',
                mb: 3,
                color: '#BBDEFB',
              }}
            >
              May your life be filled with moments so beautiful, they become
              memories worth celebrating forever✨🎂
            </Typography>

            <Box
              mt={3}
              display="flex"
              justifyContent="space-around"
              flexWrap="wrap"
              gap={2}
            >
              <Button
                component={Link}
                to="/wishes"
                variant="contained"
                color="primary"
                sx={{
                  flex: '1 1 120px',
                  fontWeight: 'bold',
                }}
              >
                Wishes
              </Button>
              <Button
                component={Link}
                to="/memory"
                variant="contained"
                color="secondary"
                sx={{
                  flex: '1 1 120px',
                  fontWeight: 'bold',
                }}
              >
                Memory Lane
              </Button>
              <Button
                component={Link}
                to="/moments"
                variant="contained"
                color="success"
                sx={{
                  flex: '1 1 120px',
                  fontWeight: 'bold',
                }}
              >
                Moments
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Home;
