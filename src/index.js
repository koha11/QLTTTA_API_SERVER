const express = require('express');
const route = require('./routes');

const port = '1000' || process.env.PORT || 3030;

//khoi tao server
const app = express();

//xu li du lieu tu form (dua vao middleware duoc xay dung san cua express js)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Init route
route(app);

app.listen(port, () => console.log(`Listening ${port}`));
