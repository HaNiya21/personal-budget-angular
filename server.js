console.log('Starting server...');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('Received request');
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}).on('error', (err) => {
    console.error('Error starting server:', err);
});
