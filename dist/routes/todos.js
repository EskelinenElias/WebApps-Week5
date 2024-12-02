"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const router = (0, express_1.Router)();
// GET route to get todos for user
router.get('/:id', async (req, res) => {
    // Parse the request
    const name = req.params.id;
    // Validate request
    if (!name) {
        res.status(500).json({ message: "Can't find todos without name." });
        return;
    }
    // Find the user
    const user = await User_1.User.findOne({ name: name });
    // Send the response
    if (!user) {
        // User not found
        res.status(400).json("User not found.");
        return;
    }
    // User found, respond with user's todos
    res.status(200).json({
        name: name,
        todos: user.todos
    });
});
exports.default = router;
