const express = require('express');

const app = express();

const product= require("./routes/productRoutes");
app.use(express.json());

//Route Import

app.use('/api',product);

module.exports = app;