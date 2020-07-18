"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var sellerSchema = new mongoose_1["default"].Schema({
    name: String,
    cep: Number,
    whatsapp: Number,
    category: Object,
    createdAt: String
});
exports["default"] = mongoose_1["default"].model('sellers', sellerSchema);
