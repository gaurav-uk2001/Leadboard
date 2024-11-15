// src/App.js
import React from 'react';
import { Container, Typography, createTheme, ThemeProvider } from '@mui/material';
import TopTraders from './components/TopTraders';
import Metrics from './components/Metrics';
import LeaderboardTable from './components/LeaderboardTable';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B6CB7', // Blueish primary color
    },
    secondary: {
      main: '#182848', // Dark blue secondary color
    },
    background: {
      default: '#f5f7fa', // Background color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      color: '#333',
    },
  },
  spacing: 8, // Default spacing
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ padding: '2rem 0' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Leaderboard
        </Typography>
        
        <TopTraders />
        <Metrics />
        <LeaderboardTable />
      </Container>
    </ThemeProvider>
  );
}

export default App;
