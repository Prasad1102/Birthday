import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
  { name: 'Wishes', path: '/wishes' },
  { name: 'Moments', path: '/moments' },
  { name: 'Memory Lane', path: '/memory' },
];

function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background:
          'linear-gradient(90deg, #0F2027 0%, #203A43 50%, #2C5364 100%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Toolbar disableGutters sx={{ px: 3 }}>
        {/* Desktop Avatar (left) */}
        <Avatar
          alt="Profile"
          src="/images/MemoryLane/img14.jpeg"
          component={Link}
          to="/"
          sx={{
            width: 40,
            height: 40,
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        />

        {/* Mobile Menu Button (left - replaces avatar) */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            mr: 2,
          }}
        >
          <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              '& .MuiPaper-root': {
                background: 'linear-gradient(135deg, #0F2027 0%, #203A43 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Typography
                  component={Link}
                  to={page.path}
                  sx={{
                    textDecoration: 'none',
                    color: 'white',
                    width: '100%',
                  }}
                >
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Title (centered on mobile, normal on desktop) */}
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to="/"
          sx={{
            flexGrow: { xs: 1, md: 0 }, // Takes space on mobile only
            mr: { xs: 0, md: 2 },
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.2rem',
            color: 'white',
            textDecoration: 'none',
            textShadow: '0 0 10px rgba(255,255,255,0.3)',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          PREET
        </Typography>

        {/* Desktop Navigation Links (hidden on mobile) */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            ml: 3,
            gap: 1,
          }}
        >
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              sx={{
                'color': 'white',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        {/* Profile Avatar (right - always visible) */}
        <Avatar
          alt="Profile"
          src="/images/DP.jpeg"
          sx={{
            width: 40,
            height: 40,
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;