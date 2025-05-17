import { Box, Typography, Grid, Paper, Avatar, Divider, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { keyframes } from '@mui/system';

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

  const memories = [
    {
      id: 1,
      date: "First Meeting",
      title: "The Meet in JSPM Auditorium",
      description: "The first spark of a beautiful friendship 💫 happened in the JSPM auditorium 🎭 — you, me, and Nagesh sitting like strangers 👀... and then you asked me my name and birthdate 📝🎂 — our first ever interaction, short but unforgettable 😄❤️",
      emoji: "💫",
      media: "/images/Moments/firstMeet.png",
      mediaType: "image",
    },
    {
      id: 2,
      date: "Fresher's Party",
      title: "Fresher's Party, Forever Friends 🎉",
      description: "After that… you vanished like a ghost 👻 — no sign of you in college for days! 😅 Then suddenly, we met again at your sister's home 🏠 just before the fresher’s party 🎉. And guess what? That party wasn’t just for freshers — it was the real beginning of our friendship 😄💃🕺💖",
      emoji: "🎉",
      media: "/images/Moments/freshers2.png",
      mediaType: "image",
    },
    {
      id: 3,
      date: "Wedding Day",
      title: "My Sister's Wedding",
      description: "Then came the big day — my sister’s wedding 💍🎊 and you visited my home 🏡. But poor you 😅… all the aunties were scanning you like a future daughter-in-law 👀🤣. You looked so uncomfortable but still managed to have fun, click tons of photos 📸✨, and turn the wedding into a mini photoshoot 📷😂",
      emoji: "💍",
      media: "/images/Moments/didWedding.jpeg",
      mediaType: "image",
    },
    {
      id: 4,
      date: "Dinosaur Garden",
      title: "Moonlight Memories",
      description: "I don’t remember whether it was before or after didi’s wedding 🤔… but we went to Dinosaur Garden in Pimple Gurav 🌳. Honestly, I was bored out of my mind 😪 because no one was actually enjoying 😅… but I stayed silent 🤐 — didn’t want to spoil your mood. And then you met your favorite person — the moon 🌕✨ — and clicked one of your all-time favorite pics 📸❤️. That moment made it all worth it.",
      emoji: "🌕",
      media: "/images/Moments/dianasourPritu.jpeg",
      mediaType: "image",
    },
    {
      id: 5,
      date: "Ramdara Temple",
      title: "The 'येडभोक' Moment",
      description: "And then came our short but sweet trip to Ramdara Temple 🚗🌿🛕 — one of my favorites 💚. We spent peaceful time together, talked about random things 🗣️✨… and for the first time, you called me 'येडभोक' 😭😂. Funny? Totally. A trip I’ll never forget — simple, real, and ours 💫",
      emoji: "🛕",
      media: "/images/Moments/ramdara.jpeg",
      mediaType: "image",
    },
    {
      id: 6,
      date: "Scooty Lessons",
      title: "12km of Pride",
      description: "And then came the day I became your scooty teacher 🛵😎 — we rode all the way to meet Ms. Neha in Pimpri 📍. You rode more than 12 km that day and your smile said it all 😄💨! You were so happy, so proud, like you just won a race 🏁❤️. After that, we chilled at a café ☕, had coffee, and rode back to college. Simple day, but a golden memory ✨",
      emoji: "🛵",
      media: "/images/Moments/firstRide.png",
      mediaType: "image",
    },
    {
      id: 7,
      date: "The Fall",
      title: "Strength Revealed",
      description: "Now comes the real memory — unforgettable and raw 💔. Again, I was teaching you scooty 🛵, we were riding through Akurdi… and then it happened — we fell on the road 🛣️😣. A small accident, yes, but a big memory. No regrets. Because for the first time, I saw how strong you really are 💪💖. Injuries on your knee and arms, but not a single tear in your eyes 😢💫… and all you said was — ‘Because of me, that couple got injured’. That day, I saw not just strength, but the kindness of your heart 🥺❤️.",
      emoji: "💪",
      media: "/images/Moments/accident.png",
      mediaType: "image",
    },
    {
      id: 8,
      date: "Latest Chapter",
      title: "Pu. L. Deshpande Garden",
      description: "And the latest chapter of our story 📖✨ — we met at the peaceful Pu. L. Deshpande Garden 🌸, spent some time together, and then went out for dinner 🍽️. Nothing much, just calm vibes and shared smiles 😊. But yeah… I totally forgot to give you your cheesecake 🍰🙈. I will definitely give it to you — that’s a promise 💕❤️😄",
      emoji: "🌸",
      media: "/images/Moments/puLaGarden.jpeg",
      mediaType: "image",
    },
    {
      id: 9,
      date: "Future Dreams",
      title: "Leh-Ladakh Adventures",
      description: "And hey Priteee, I have one big request for you — please learn scooty first, then bike 🛵🏍️! Just imagine, yaar — us cruising all the way to Leh-Ladakh 🏔️❄️, then heading down to South India 🌴☀️, visiting all those lush green places 🌿 and meeting so many different people along the way 🌏✨. So many memories, just us traveling on our favorite bike, laughing, exploring, living our happiest days — pure joy and happiness all around! Let’s make these dreams come true, one ride at a time! 🚀❤️",
      emoji: "🏔️",
      media: "/images/Moments/lehLaddakh.png",
      mediaType: "image",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        py: 8,
        px: isMobile ? 2 : 0,
      }}>
        <Grid container justifyContent="center">
          <Grid item size={{xs:12, md:10, lg:8}}>
            <Paper elevation={6} sx={{
              p: 4,
              borderRadius: 4,
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(10px)',
            }}>
              <Box textAlign="center" mb={6}>
                <Typography variant="h3" component="h1" sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  mb: 2,
                  animation: `${fadeIn} 0.8s ease-out`,
                }}>
                  Our Journey Together
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ animation: `${fadeIn} 0.8s ease-out 0.2s` }}>
                  From the first spark to countless memories and future dreams
                </Typography>
              </Box>

              <Divider sx={{ my: 4, borderColor: 'rgba(0, 0, 0, 0.08)' }} />

              {memories.map((memory, index) => (
                <Box key={memory.id} sx={{
                  mb: 8,
                  animation: `${fadeIn} 0.8s ease-out ${index * 0.1 + 0.3}s both`,
                }}>
                  <Grid container spacing={4} alignItems="center" direction={isMobile ? 'column-reverse' : index % 2 === 0 ? 'row' : 'row-reverse'}>
                    <Grid item size={{xs:12, md:6}}>
                      <Box sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        p: isMobile ? 0 : 3,
                      }}>
                        <Typography variant="overline" color="primary" sx={{ fontWeight: 600 }}>
                          {memory.date}
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{
                          fontWeight: 700,
                          mt: 1,
                          mb: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}>
                          {memory.title} {memory.emoji}
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                          {memory.description}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item size={{xs:12, md:6}}>
                    <Paper elevation={3} sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      height: isMobile ? '250px' : '350px',
                      width: '100%',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        transition: 'transform 0.3s ease',
                      },
                    }}>
                      <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgba(0,0,0,0.05)'
                      }}>
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
                <Typography variant="h6" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                  "Let's make these dreams come true, one ride at a time!"
                </Typography>
                <Avatar sx={{
                  width: 80,
                  height: 80,
                  mt: 4,
                  mx: 'auto',
                  bgcolor: 'primary.main',
                  fontSize: '2rem',
                }}>
                  🚀
                </Avatar>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Moments;