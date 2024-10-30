const express = require("express");
const app = express();
const chalk = require("chalk");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 8080;

mongoose.connect(process.env.URL)
    .then(() => { console.log(chalk.green("Connected to MongoDB")); })
    .catch((err) => { console.log(chalk.red(err)); });

const product=require("./router/crud.route");
app.use("/product",product);

app.listen(port, (err) => {
    if (err) { console.log(chalk.red("Error starting server")); }
    else { console.log(chalk.green("Server started on port " + port)); }
})