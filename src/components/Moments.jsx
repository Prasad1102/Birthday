import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Divider,
  useMediaQuery,
  Button,
  Modal,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { useState } from 'react';
// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#d23a7b',
    },
    secondary: {
      main: '#3a7bd2',
    },
    background: {
      default: '#f5f5f5',
    },
    success: {
      main: '#4caf50',
    },
    error: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Moments = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (response) => {
    setModalContent(response);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const memories = [
    {
      id: 1,
      date: 'First Meeting',
      title: 'The Meet in JSPM Auditorium',
      description:
        'The first spark of a beautiful friendship 💫 happened in the JSPM auditorium 🎭 — you, me, and Nagesh sitting like strangers 👀... and then you asked me my name and birthdate 📝🎂 — our first ever interaction, short but unforgettable 😄❤️',
      emoji: '💫',
      media: '/images/Moments/firstMeet.png',
      mediaType: 'image',
    },
    {
      id: 2,
      date: "Fresher's Party",
      title: "Fresher's Party, Forever Friends 🎉",
      description:
        "After that… you vanished like a ghost 👻 — no sign of you in college for days! 😅 Then suddenly, we met again at your sister's home 🏠 just before the fresher’s party 🎉. And guess what? That party wasn’t just for freshers — it was the real beginning of our friendship 😄💃🕺💖",
      emoji: '🎉',
      media: '/images/Moments/freshers2.png',
      mediaType: 'image',
    },
    {
      id: 3,
      date: 'Wedding Day',
      title: "My Sister's Wedding",
      description:
        "Then came the big day — my sister’s wedding 💍🎊 and you visited my home 🏡. But poor you 😅… all the aunties were scanning you like a future daughter-in-law 👀🤣. You came with my jiju and didn’t even look at me at first 😤. As soon as you entered, the aunties went into full investigation mode 😆 — no wonder you looked so uncomfortable. Sorry for that, but ....Okayyyyy? 😅. Still, you guy's made beautiful memories and enjoyed the wedding — and honestly, I loved every bit of it!❤️🥰💖",
      emoji: '💍',
      media: '/images/Moments/didWedding.jpeg',
      mediaType: 'image',
    },
    {
      id: 4,
      date: 'Dinosaur Garden',
      title: 'Moonlight Memories',
      description:
        'I don’t remember whether it was before or after didi’s wedding 🤔… but we went to Dinosaur Garden in Pimple Gurav 🌳, This was our first short and sweet little trip within Pune — not too long, but memorable and nice.....😊❤️🤜. But, you met your favorite person — the moon 🌕✨ — and clicked one of your all-time favorite pics 📸❤️.',
      emoji: '🌕',
      media: '/images/Moments/dianasourPritu.jpeg',
      mediaType: 'image',
    },
    {
      id: 5,
      date: 'Ramdara Temple',
      title: "The 'येडभोक' Moment",
      description:
        "And then came our short but sweet trip to Ramdara Temple 🚗🌿🛕 — one of my favorites 💚. We spent peaceful time together, talked about random things 🗣️✨… and for the first time, you called me 'येडभोक' 😭😂. Funny? Totally. A trip I’ll never forget — simple, real, and ours 💫",
      emoji: '🛕',
      media: '/images/Moments/ramdara.jpeg',
      mediaType: 'image',
    },
    {
      id: 6,
      date: 'Scooty Lessons',
      title: '12km of Pride',
      description:
        'And then came the day I became your scooty teacher 🛵😎 — we rode all the way to meet Ms. Neha in Pimpri 📍. You ride the scooty 🛵 for more than 12 km that day, and your smile said it all 😄💨! You were so happy, so proud, like you just won a race 🏁❤️. After that, we chilled at a café ☕, had coffee 🧋, and rode 🛣️ back to college 🏫. A simple day, but a golden memory ✨❤️💖',
      emoji: '🛵',
      media: '/images/Moments/firstRide.png',
      mediaType: 'image',
    },
    {
      id: 7,
      date: 'The Fall',
      title: 'Strength Revealed',
      description:
        'Now comes the real memory😅 — unforgettable and raw 💔. Again, I was teaching you scooty 🛵, we were riding through Akurdi… and then it happened — we fell on the road 🛣️😣. A small accident, yes, but a big memory. No regrets. Because for the first time, I saw how strong you really are 💪💖. Injuries on your knee and arms, but not a single tear in your eyes 💫… and all you said was —..................................................... ‘Because of me, that couple got injured’. That day, I saw not just strength, but the kindness of your heart 🥺❤️. I really liked it… how good and kind you are, Prituu 🫶.',
      emoji: '💪',
      media: '/images/Moments/accident.png',
      mediaType: 'image',
    },
    {
      id: 8,
      date: 'Latest Chapter',
      title: 'Pu. L. Deshpande Garden',
      description:
        'And the latest chapter of our story 📖✨ — we met at the peaceful Pu. L. Deshpande Garden 🌸, spent some time together, and then went out for dinner 🍽️. Nothing much, just calm vibes and shared smiles 😊. But yeah… I totally forgot to give you your cheesecake 🍰🙈. I will definitely give it to you — that’s a promise 💕❤️😄',
      emoji: '🌸',
      media: '/images/Moments/puLaGarden.jpeg',
      mediaType: 'image',
    },
    {
      id: 9,
      date: 'Future Dreams',
      title: 'Small request to you',
      description:
        'Hey Priteee, I have one big request for you — please learn scooty first, then bike 🛵🏍️! Just imagine, यार — us cruising all the way to Leh-Ladakh 🏔️❄️, then heading down to South India 🌴☀️, visiting all those lush green places 🌿 and meeting so many different people along the way 🌏✨. So many memories, just us traveling on our favorite bike, laughing, exploring, living our happiest days — pure joy and happiness all around! Let’s make these dreams come true, Pleaseeeeeeeeee! 👏❤️🤜',
      emoji: '🤝',
      media: '/images/Moments/lehLaddakh.png',
      mediaType: 'image',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          py: 8,
          px: isMobile ? 2 : 0,
        }}
      >
        <Grid container justifyContent="center">
          <Grid item size={{ xs: 12, md: 10, lg: 8 }}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 4,
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <Box textAlign="center" mb={6}>
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    mb: 2,
                    animation: `${fadeIn} 0.8s ease-out`,
                  }}
                >
                  Our Journey Together
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ animation: `${fadeIn} 0.8s ease-out 0.2s` }}
                >
                  From the first spark to countless memories and future dreams
                </Typography>
              </Box>

              <Divider sx={{ my: 4, borderColor: 'rgba(0, 0, 0, 0.08)' }} />

              {memories.map((memory, index) => (
                <Box
                  key={memory.id}
                  sx={{
                    mb: 8,
                    animation: `${fadeIn} 0.8s ease-out ${
                      index * 0.1 + 0.3
                    }s both`,
                  }}
                >
                  <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    direction={
                      isMobile
                        ? 'column-reverse'
                        : index % 2 === 0
                        ? 'row'
                        : 'row-reverse'
                    }
                  >
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Box
                        sx={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          p: isMobile ? 0 : 3,
                        }}
                      >
                        <Typography
                          variant="overline"
                          color="primary"
                          sx={{ fontWeight: 600 }}
                        >
                          {memory.date}
                        </Typography>
                        <Typography
                          variant="h4"
                          component="h2"
                          sx={{
                            fontWeight: 700,
                            mt: 1,
                            mb: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                          }}
                        >
                          {memory.title} {memory.emoji}
                        </Typography>
                        <Typography
                          variant="body1"
                          paragraph
                          sx={{ color: 'text.secondary', mb: 3 }}
                        >
                          {memory.description}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Paper
                        elevation={3}
                        sx={{
                          'borderRadius': 3,
                          'overflow': 'hidden',
                          'height': isMobile ? '250px' : '350px',
                          'width': '100%',
                          'position': 'relative',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            transition: 'transform 0.3s ease',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(0,0,0,0.05)',
                          }}
                        >
                          <img
                            src={memory.media}
                            alt={memory.title}
                            style={{
                              maxWidth: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain',
                              width: 'auto',
                              height: 'auto',
                            }}
                          />
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 4, borderColor: 'rgba(0, 0, 0, 0.08)' }} />
                </Box>
              ))}

              <Box textAlign="center" mt={8}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Do you like it?
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 3,
                    mb: 4,
                  }}
                >
                  <Button
                    variant="contained"
                    color="success"
                    size="large"
                    onClick={() => handleOpenModal('yes')}
                    sx={{
                      'px': 4,
                      'py': 1.5,
                      'borderRadius': 2,
                      'fontWeight': 600,
                      'textTransform': 'none',
                      'fontSize': '1.1rem',
                      'boxShadow': '0 4px 8px rgba(76, 175, 80, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 12px rgba(76, 175, 80, 0.4)',
                      },
                      'transition': 'all 0.3s ease',
                    }}
                  >
                    Yes I Like It!
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="large"
                    onClick={() => handleOpenModal('no')}
                    sx={{
                      'px': 4,
                      'py': 1.5,
                      'borderRadius': 2,
                      'fontWeight': 600,
                      'textTransform': 'none',
                      'fontSize': '1.1rem',
                      'boxShadow': '0 4px 8px rgba(244, 67, 54, 0.3)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 12px rgba(244, 67, 54, 0.4)',
                      },
                      'transition': 'all 0.3s ease',
                    }}
                  >
                    Not Really
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="response-modal"
          aria-describedby="response-modal-description"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Box
            sx={{
              width: isMobile ? '90%' : '60%',
              maxWidth: '500px',
              bgcolor: 'background.paper',
              borderRadius: 4,
              boxShadow: 24,
              p: 4,
              outline: 'none',
              position: 'relative',
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              {modalContent === 'yes' ? (
                <>
                  <Typography
                    variant="h4"
                    color="success.main"
                    sx={{ mb: 3, fontWeight: 700 }}
                  >
                    WOOHUUUU! 🎊💃🕺❤️💖
                  </Typography>
                  <Box
                    sx={{
                      position: 'relative',
                      paddingBottom: '56.25%', // 16:9 aspect ratio
                      height: 0,
                      overflow: 'hidden',
                      borderRadius: 2,
                      mt: 2,
                      mb: 4,
                    }}
                  >
                    <video
                      autoPlay
                      controls
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                    >
                      <source
                        src="/images/Moments/happy.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </Box>
                </>
              ) : (
                <>
                  <Typography
                    variant="h4"
                    color="error.main"
                    sx={{ mb: 3, fontWeight: 700 }}
                  >
                    Excuse me?! 😠
                  </Typography>
                  <Box
                    sx={{
                      position: 'relative',
                      paddingBottom: '56.25%', // 16:9 aspect ratio
                      height: 0,
                      overflow: 'hidden',
                      borderRadius: 2,
                      mt: 2,
                      mb: 4,
                    }}
                  >
                    <video
                      autoPlay
                      controls
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                      }}
                    >
                      <source
                        src="/images/Moments/DontLike.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </Box>
                </>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleCloseModal}
                sx={{
                  mt: 2,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: 600,
                }}
              >
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
};

export default Moments;
