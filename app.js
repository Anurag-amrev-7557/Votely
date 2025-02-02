const express = require('express');
const ejsMate = require("ejs-mate");
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));


app.get('/', (req, res) => {
    res.render("landing/landing.ejs"); 
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});