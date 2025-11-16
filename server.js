require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Helli from express server");
});

app.listen(port, () => {
    console.log("example app listening on port", port);
});