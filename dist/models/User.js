"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
let TodoSchema = new mongoose_1.Schema({
    todo: { type: String, required: true }
});
const Todo = (0, mongoose_1.model)("TUser", TodoSchema);
const UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    todos: { type: [TodoSchema], default: [] }
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.User = User;
