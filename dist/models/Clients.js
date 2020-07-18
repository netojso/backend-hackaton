"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var clientSchema = new mongoose_1.default.Schema({
    name: String,
    whatsapp: String,
    cep: Number,
    createdAt: Date,
});
exports.default = mongoose_1.default.model('clientes', clientSchema);
