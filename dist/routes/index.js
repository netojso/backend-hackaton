"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SellerController_1 = __importDefault(require("../controllers/SellerController"));
var ClientController_1 = __importDefault(require("../controllers/ClientController"));
var sellers = new SellerController_1.default();
var clients = new ClientController_1.default();
var routes = express_1.Router();
routes.get('/sellers', sellers.getAll);
routes.get('/products/:item', clients.getItem);
routes.post('/seller', sellers.newSeller);
routes.post('/client', clients.newClient);
exports.default = routes;
