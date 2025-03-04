const express = require('express');
require("dotenv").config();

const db = require('./config')
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
})