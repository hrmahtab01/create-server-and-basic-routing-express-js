const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

app.get("/", (req, res) => {
  res.send("this is home route ");
});
app.post("/", (req, res) => {
  res.send(req.body);
});
app.get("/user", (req, res) => {
  let data = [
    {
      name: "mahtab",
      email: "withgaming50@gmail.com",
    },
    {
      name: "mahtab",
      email: "withgaming50@gmail.com",
    },
    {
      name: "mahtab",
      email: "withgaming50@gmail.com",
    },
    {
      name: "mahtab",
      email: "withgaming50@gmail.com",
    },
    {
      name: "mahtab",
      email: "withgaming50@gmail.com",
    },
  ];
  res.status(200).send(data);
});
