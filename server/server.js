const express = require('express');
const path = require('path');
const fs = require('fs'); // Add this line
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors()); 



app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '..', 'old-code', 'index.html'));
})
// Serve the static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist','..', 'personal-budget')));

app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'dist', '..', 'old-code','personal-budget', 'index.html'));
});

app.get('/budget', (req, res) => {
    fs.readFile(path.join(__dirname, 'budget-data.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading budget data');
        }
        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
