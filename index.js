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
const port = process.env.PORT || 5000; //process.env.PORT uses port given from the host. In this case, process.env = Heroku (host's environment); and PORT is the port # that Heroku gives us.
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));