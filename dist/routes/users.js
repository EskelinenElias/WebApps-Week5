"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("../models/User");
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    try {
        const users = await User_1.User.find();
        res.status(200).json({ users });
    }
    catch (error) {
        console.error("Error getting users.");
        res.status(500).json({ error: "Error getting users." });
    }
});
exports.default = router;
