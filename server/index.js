'use strict';

const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

//Enables extra debug messages
const VERBOSE_DEBUG = false;

app.use(express.json({limit: '16mb'}));

//FILES
app.use(express.static(path.join(__dirname,'..',String.raw`portfoliosite_frontend\dist\portfoliosite_frontend`)));

//HTTP
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'..',String.raw`portfoliosite_frontend\dist\portfoliosite_frontend\index.html`));
});