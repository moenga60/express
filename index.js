import express from "express";
import { userLogin, userSignup } from "./controller.js";

const app = express();

const PORT = 3000;

// simple route
app.get("/", (req, res) => {
  res.send("Hellow Express da");
});

app.get("/user/login", userLogin);
app.get("/user/signup", userSignup);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
