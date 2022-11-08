
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const flash = require("connect-flash");
const MONGODB_URI = 'mongodb+srv://NewEggHome:a@cluster0.ysadg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001;
const router = express.Router();
const session = require("express-session");

app.use(express.static("build"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(flash());
app.use(
    session({
        secret: "my secret",
        resave: false,
        saveUninitialized: false,
    })
);

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});

const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('Client connected');

    socket.on('new-name', function () {
        socket.broadcast.emit('update-list');
    });
});