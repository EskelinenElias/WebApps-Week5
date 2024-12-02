"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
console.log("Connecting to database...");
const address = "mongodb://127.0.0.1:27017/testdb";
mongoose_1.default.connect(address).then(() => {
    console.log("Connected to database.");
}).catch((error) => {
    console.error("Could not connect to database", error);
});
mongoose_1.default.Promise = Promise;
const database = mongoose_1.default.connection;
database.on("error", console.error.bind(console, "Database connection error."));
exports.default = database;
