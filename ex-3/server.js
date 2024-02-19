const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 8080;

require("dotenv").config();

let dbConnect = require("./dbConnect");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

//external api
const countryRouter = require("./routes/countryRoutes");
app.use("/api/country", countryRouter);

//internal api

let userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

let postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
