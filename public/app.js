const express = require('express');

const app = express();

app.use(express.static('public'));

app.get("/Home", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/Home.html");
  });
  
  app.get("/About", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/About.html");
  });
  
  app.get("/Works", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/Works.html");
  });
  
  app.listen(3000);