const express = require('express');
const route = require('./routes');

const port = '1000' || process.env.PORT || 3030;

//khoi tao server
const app = express();

// Init route
route(app);

app.listen(port, () => console.log(`Listening ${port}`));
