const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require("./routes/user.router");

const app = express();

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

app.use("/app", userRoutes);

module.exports = app;