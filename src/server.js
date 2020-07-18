"use strict";
exports.__esModule = true;
/* eslint-disable import/no-extraneous-dependencies */
var express_1 = require("express");
var cors_1 = require("cors");
var mongoose_1 = require("mongoose");
var dotenv_1 = require("dotenv");
var routes_1 = require("./routes");
dotenv_1["default"].config();
mongoose_1["default"].connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose_1["default"].connection.once('open', function () {
    console.log('Banco carregado');
});
var app = express_1["default"]();
app.use(cors_1["default"]());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use(routes_1["default"]);
app.listen(process.env.APP_URL || 3333);
