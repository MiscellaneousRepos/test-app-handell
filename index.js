const express = require('express');
const server = express();
server.use(express.json());
server.get('/', (req, res) => {
    const songs = [
        {
            id: 1,
            name: "Final Countdown"
        }
    ];
    res.status(200).json(songs);
});
//make port dynamic
const port = process.env.PORT || 5000; //process.env.PORT for Heroku: process.env = Heroku; and PORT is Heroku's port.
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));