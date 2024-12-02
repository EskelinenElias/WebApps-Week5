"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = exports.User = void 0;
const mongoose_1 = require("mongoose");
const TodoSchema = new mongoose_1.Schema({
    todo: { type: String, required: true },
});
const UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    todos: [TodoSchema],
});
const Todo = (0, mongoose_1.model)("Todo", TodoSchema);
exports.Todo = Todo;
const User = (0, mongoose_1.model)("User", UserSchema);
exports.User = User;
