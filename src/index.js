const express = require('express');
const db = require('./Controller/StudentController');
const route = require('./routes');

const port = process.env.PORT || 3030

//khoi tao server
const app = express();

// Init route
route(app);

app.listen(port, () => console.log(`Listening ${port}`));
