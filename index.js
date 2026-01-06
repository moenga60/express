import express from "express";

const app = express();

const PORT = 3000;

// simple route
app.get("/", (req, res) => {
  res.send("Hellow Express da");
});

//multiple params
app.get("/things/:name/:id", (req, res) => {
  const { name, id } = req.params;
  res.json({
    id,
    name,
  });
});

//catch all invalid routes
app.get('*', (req, res) => {
  res.send(
    "Sorry, this is an invalid URL."
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
