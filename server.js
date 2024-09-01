const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Example data for "Attack on Titan"
const shows = [
  {
    id: 1,
    title: 'Attack on Titan',
    description: 'A show about humanity fighting against giant creatures.',
    episodes: [
      { title: 'Episode 1', videoUrl: '/videos/attack-on-titan-episode1.mp4' },
      // Add more episodes here
    ],
  },
];

// API to get show details
app.get('/api/shows/:id', (req, res) => {
  const showId = parseInt(req.params.id, 10);
  const show = shows.find(s => s.id === showId);
  res.json(show || {});
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});