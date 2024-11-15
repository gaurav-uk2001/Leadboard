import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';

function TopTraders() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch the leaderboard data from the JSON file located in the public directory
    fetch('/leaderboardData.json')
      .then((response) => response.json())
      .then((data) => setLeaderboardData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Grid container spacing={4} style={{ marginBottom: '2rem' }}>
      {leaderboardData.slice(0, 3).map((trader, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card style={{ padding: '1.5rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0px 4px 12px rgba(0,0,0,0.1)' }}>
            <CardContent>
              <Avatar src={trader.avatar} alt={trader.name} style={{ width: '60px', height: '60px', margin: 'auto', marginBottom: '0.5rem' }} />
              <Typography variant="h6" style={{ fontFamily: 'Poppins, sans-serif', color: '#4B6CB7' }}>{trader.name}</Typography>
              <Typography variant="body2" style={{ color: '#777' }}>{trader.tradingStyle}</Typography>
              <Typography variant="body1" style={{ fontWeight: 600, marginTop: '0.5rem' }}>XScore: {trader.xScore}</Typography>
              <Typography variant="body1" style={{ fontWeight: 600 }}>Avg Gain: {trader.avgGain}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default TopTraders;
