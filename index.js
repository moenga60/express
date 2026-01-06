import express from "express";
import router from "./route.js";

const app = express();

const PORT = 3000;

// simple route
app.get("/", (req, res) => {
  res.send("Hellow Express da");
});

app.use("/user", router);

app.use(express.json());

//post

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `User ${name} with email ${email} created successfully`,
  });
});

//put method
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `User ${userId} updated to ${name}, ${email}`,
  });
});

//delete method
app.delete('/users/:id', (req, res)=>{
  const userId = req.params.id
  res.json({
    message:`user with id ${userId} deleted successfully`
  })
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
