const express = require("express");
const mongoose = require("mongoose");
const { add } = require("nodemon/lib/rules");

const stuffRoutes = require("./Routes/stuff");
const userRoutes = require("./Routes/user");
const app = express();

mongoose
  .connect(
    "mongodb+srv://sulac:Lucas294602@cluster0.pjnfb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connection à MongoDB réussie!"))
  .catch(() => console.log("Connection à MongoDB Echouée"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);
module.exports = app;
