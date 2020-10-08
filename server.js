const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const Pusher = require('pusher');
const cors = require('cors');

const pusher = new Pusher({
    appId: '1080375',
    key: '628357a9fcd4596f2b07',
    secret: '816137f0370ab84c4a19',
    cluster: 'mt1',
    useTLS: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/message/send', (req, res) => {
    pusher.trigger( 'private-chat', 'messages', {
        message: req.body.message,
        username: req.body.username
    });
    res.sendStatus(200);
});

app.post('/pusher/auth', (req, res) => {
    // console.log('POST to /pusher/auth');
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    res.send(auth);
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
