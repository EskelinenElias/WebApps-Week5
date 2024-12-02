"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
// import database from "./config/database"; 
const mongoose_1 = __importDefault(require("mongoose"));
// Create app
const app = (0, express_1.default)();
// Add middleware
app.use(express_1.default.json());
app.use((0, morgan_1.default)("dev"));
// Add routes
app.use('/', routes_1.default);
// Serve static files
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
const address = "mongodb://127.0.0.1:27017/testdb";
mongoose_1.default.connect(address).then(() => {
    console.log("Connected to database.");
}).catch((error) => {
    console.error("Could not connect to database", error);
});
mongoose_1.default.Promise = Promise;
const database = mongoose_1.default.connection;
database.on("error", console.error.bind(console, "Database connection error."));
exports.default = app;
