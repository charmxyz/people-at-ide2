const express = require('express');
const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve the index.html file when the root is accessed
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
