import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("About section");
});
app.get("/dashboard", (req, res) => {
  res.send("Dashboard section");
});

app.listen(port, () => {
  console.log(`Server is staring on port ${port}`);
});
