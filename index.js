const express = require("express");

const app = express();

const PORT = 3000;

// simple route
app.get("/", (req, res) => {
  res.send("Hellow Express");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
