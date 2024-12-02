"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const todo_1 = require("./todo");
const UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    todos: { type: [todo_1.TodoSchema], default: [] }
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.User = User;