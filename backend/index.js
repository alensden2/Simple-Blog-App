const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { user, password } = require("./db-config");
const env = require("dotenv").config();
// Importing routes
const authRoute = require("./routes/auth");
const posts = require("./routes/posts");
const cors = require("cors");

// MongoDB Connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.error("Error connectiong to DB", error);
  });

// enabling Cors
app.use(cors());

// Middleware
app.use(express.json());

// Route middleware
app.use("/api/user", authRoute);
app.use("/jwtToken/verify", posts);

app.listen(8080, () => {
  console.log("server running");
});
