const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// API calls
// app.get("/api/hello", (req, res) => {
//   res.send({ express: "Hello From Express" });
// });

// app.post("/api/world", (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`
//   );
// });

// production
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}

// console.log(__dirname); // C:\Users\dj532\VSCODE\myBoilerPlate\server
app.listen(port, () => console.log(`Listening on port ${port}`));
