const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();

// Serve the Angular app from the 'dist' folder
app.use(express.static(path.join(__dirname, 'dist')));

// JSON-Server setup
const jsonServerRouter = jsonServer.router('db.json'); // Replace 'db.json' with your JSON data file
app.use('/api', jsonServerRouter);

// Handle Angular app routes (must be placed after API routes)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
