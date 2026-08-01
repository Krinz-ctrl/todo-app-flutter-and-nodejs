const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/user.router");



const app = express();
app.use(bodyParser.json());

app.use("/app", userRoutes);
module.exports = app;