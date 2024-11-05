// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// cors
app.use(cors());

// middleware
app.use(express.json());

const routes = require("./src");
app.use("/api", routes); // prefixing routes with /api

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
