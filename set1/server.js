const express = require("express");
// const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});
app.get("/users", (req, res) => {
  res.json([
    {
      name: "jayanth",
      age: 25,
    },
  ]);
});

app.listen(5500, () => {
  console.log("Server is up and running");
});
