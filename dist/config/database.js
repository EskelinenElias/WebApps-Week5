"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const address = "mongodb://127.0.0.1:27017/db";
mongoose_1.default.connect(address);
mongoose_1.default.Promise = Promise;
const database = mongoose_1.default.connection;
exports.default = database;
