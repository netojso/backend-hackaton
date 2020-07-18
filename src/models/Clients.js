"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var clientSchema = new mongoose_1["default"].Schema({
    name: String,
    whatsapp: String,
    cep: Number,
    createdAt: Date
});
exports["default"] = mongoose_1["default"].model('clientes', clientSchema);
