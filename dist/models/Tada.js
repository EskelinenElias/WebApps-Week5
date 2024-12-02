"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoSchema = exports.Todo = void 0;
const mongoose_1 = require("mongoose");
let TodoSchema = new mongoose_1.Schema({
    todo: { type: String, required: true }
});
exports.TodoSchema = TodoSchema;
const Todo = (0, mongoose_1.model)("TUser", TodoSchema);
exports.Todo = Todo;
