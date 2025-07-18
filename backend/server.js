const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Placeholder routes
app.get('/', (req, res) => {
  res.send('Address on Adderley Backend');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
