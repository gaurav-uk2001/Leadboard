import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

function Metrics() {
  const [metricsData, setMetricsData] = useState([]);

  useEffect(() => {
    // Fetch metrics data from the JSON file located in the public directory
    fetch('/metricsData.json')
      .then((response) => response.json())
      .then((data) => setMetricsData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Grid container spacing={4} style={{ marginBottom: '2rem' }}>
      {metricsData.map((metric, index) => (
        <Grid item xs={12} sm={3} key={index}>
          <Card style={{ padding: '1rem', backgroundColor: '#4B6CB7', color: '#fff', borderRadius: '12px' }}>
            <CardContent style={{ textAlign: 'center' }}>
              <Typography variant="h6" style={{ fontFamily: 'Poppins, sans-serif' }}>{metric.label}</Typography>
              <Typography variant="h4" style={{ fontWeight: 600 }}>{metric.value}</Typography>
              <Typography variant="body2">{metric.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Metrics;
