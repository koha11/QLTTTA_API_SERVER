const express = require('express');
const route = require('./routes');
const cors = require('cors');

//const port = '1000';
const port = process.env.PORT || 4000;
//khoi tao server
const app = express();

//xu li du lieu tu form (dua vao middleware duoc xay dung san cua express js)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
// Init route
route(app);

app.listen(port, () => console.log(`Listening ${port}`));
