const express = require('express');
const db = require('./Controller/StudentController');
const route = require('./routes');

//khoi tao server
const app = express();

// Init route
route(app);

app.listen(1000, () => console.log('Listening localhost:1000'));
