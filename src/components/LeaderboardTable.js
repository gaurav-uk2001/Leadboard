// src/components/LeaderboardTable.js
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function LeaderboardTable() {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Fetch the leaderboard data from the JSON file located in the public directory
    fetch('/leaderboardData.json')
      .then((response) => response.json())
      .then((data) => setLeaderboardData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

  return (
    <TableContainer component={Paper} style={{ borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0,0,0,0.1)' }}>
      <Table>
        <TableHead style={{ backgroundColor: '#182848' }}>
          <TableRow>
            {["Rank", "Name", "Trading Style", "Streaks", "Alerts", "Trades", "Avg Gain", "XScore", "Trophies"].map((header, index) => (
              <TableCell key={index} style={{ color: '#fff', fontWeight: 600 }}>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {leaderboardData.map((trader) => (
            <TableRow key={trader.rank} style={{ backgroundColor: trader.rank % 2 === 0 ? '#f9f9f9' : '#fff' }}>
              <TableCell>{trader.rank}</TableCell>
              <TableCell>{trader.name}</TableCell>
              <TableCell>{trader.tradingStyle}</TableCell>
              <TableCell>{trader.streaks}</TableCell>
              <TableCell>{trader.alerts}</TableCell>
              <TableCell>{trader.trades}</TableCell>
              <TableCell>{trader.avgGain}</TableCell>
              <TableCell>{trader.xScore}</TableCell>
              <TableCell>{trader.trophies}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default LeaderboardTable;
