import express from "express";
import router from "./route.js";

const app = express();

const PORT = 3000;

// simple route
app.get("/", (req, res) => {
  res.send("Hellow Express da");
});

app.use("/user", router);

//post

app.post("/users", express.json(), (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `User ${name} with email ${email} created successfully`,
  });
});

//put method
app.put("/users/:id", express.json(), (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `User ${userId} updated to ${name}, ${email}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
