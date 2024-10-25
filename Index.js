const express = require("express");
const app = express();
const port = 3000;

app
  .get("/", (req, res) => {
    res.end("hello express");
  })
  .get("/about", (req, res) => {
    res.end("this is the about page");
  })
  .get("/contact", (req, res) => {
    res.end("this is the contact page");
  })
  .get("/service", (req, res) => {
    res.end("this is the service page");
  })
  .get("/team", (req, res) => {
    res.end("this is the team page");
  })
  .put("/", (req, res) => {
    res.end("hello express, this is the home page with PUT");
  })
  .delete("/", (req, res) => {
    res.end("this is the delete action on home page");
  })
  .listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
