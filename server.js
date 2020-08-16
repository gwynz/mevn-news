require('dotenv').config();
const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const serveStatic = require('serve-static');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', (error) => console.error('error', error));
db.once('open', () => console.log('Connected to database!'));

server.use(bodyParser.json()); // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

server.use(cors());
server.use(serveStatic(__dirname + '/client/dist'));

const router = require('./characters');
server.use('/characters', router);

const router_news = require('./news');
server.use('/news', router_news);

const router_content = require('./contents');
server.use('/contents', router_content);


const port = process.env.PORT || 3100
server.listen(port, () => console.log("Server started!"));