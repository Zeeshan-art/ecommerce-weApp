const express = require('express');

const app = express();

app.use(express.json());



//Route Import
const product= require("./routes/productRoutes");



app.use('/api',product);


module.exports = app;