const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Skin Cancer Server');
});

app.listen(port, () => {
  console.log(`Skin Cancer Server is running at http://localhost:${port}`);
});

