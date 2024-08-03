const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '10mb' }));

app.post('/api/capturePhoto', (req, res) => {
    const imageData = req.body.image;
    const base64Data = imageData.replace(/^data:image\/png;base64,/, '');
    fs.writeFile('photo.png', base64Data, 'base64', (err) => {
        if (err) {
            console.error('Error saving photo:', err);
            return res.json({ success: false });
        }
        console.log('Photo saved.');
        res.json({ success: true });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
