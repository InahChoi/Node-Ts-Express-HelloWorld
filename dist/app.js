"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/", function (req, res, next) {
    res.send("HelloWorld!");
});
app.listen(3000, function () {
    console.log("🕹 Server go go! 🚀");
});
