import express from "express";

const app = express();

const PORT = 3000;

// simple route
app.get("/", (req, res) => {
  res.send("Hellow Express da");
});

app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Welcome, ${username}!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
