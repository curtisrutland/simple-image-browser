import { Box, Typography, Button, Container } from '@mui/material';
import { Link, useNavigate } from '@tanstack/react-router';
import ImageIcon from '@mui/icons-material/Image';

function HomePage() {
  const navigate = useNavigate();

  const handleBrowse = () => {
    navigate({ to: '/gallery' });
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <ImageIcon sx={{ fontSize: 80, mb: 3, color: 'primary.main' }} />
        <Typography variant="h3" gutterBottom>
          Simple Image Browser
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Browse and view your local images with ease
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={handleBrowse}
          sx={{ px: 4, py: 1.5 }}
        >
          Start Browsing
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;