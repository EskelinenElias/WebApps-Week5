"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const router = (0, express_1.Router)();
// PUT route to delete a user
router.put('/', async (req, res) => {
    // Parse request
    const name = req.body.name;
    const todo = req.body.todo;
    // Validate request
    if (!name || !todo) {
        res.status(500).json({ message: "Invalid request; Can't delete todo" });
        return;
    }
    // Find the user
    const user = await User_1.User.findOne({ name: name });
    // Check if user was found
    if (!user) {
        // User not found
        res.status(400).json("User not found.");
        return;
    }
    // User found, respond with user's todos
    const index = user.todos.findIndex(item => item.todo === todo);
    // Check if todo was found
    if (index < 0) {
        // Todo not found
        res.status(400).json("Todo not found.");
        return;
    }
    // Delete todo
    user.todos.splice(index, 1);
    await user.save();
    res.status(200).json("Todo deleted.");
});
exports.default = router;
