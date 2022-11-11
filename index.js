const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((c) => c.id === id);
  res.send(selectedCourse);
});

app.listen(port, () => {
  console.log("Server is Running on Port ", port);
});
