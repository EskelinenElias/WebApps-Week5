"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const router = (0, express_1.Router)();
router.post('/', async (req, res) => {
    try {
        const name = req.body.name || null;
        const todo = req.body.todo || null;
        // Validate input
        if (!name) {
            res.status(400).json({ error: "User name and todo are required." });
            return;
        }
        // Find the user by name
        let user = await User_1.User.findOne({ name: name });
        if (!user) {
            // User not found; create new user
            user = new User_1.User({
                name: name,
                todos: [new User_1.Todo({ todo: todo })],
            });
        }
        else {
            // User found; add new todo to the todos array
            user.todos.push(new User_1.Todo({ todo: todo }));
        }
        // Save changes
        await user.save();
        // Send success response
        res.status(200).json(`Todo added successfully for user ${name}.`);
    }
    catch (error) {
        // Log error and send failure response
        console.error("An error occurred while adding todo:", error.message);
        res.status(500).json({ error: "An error occurred while adding todo." });
    }
});
exports.default = router;
