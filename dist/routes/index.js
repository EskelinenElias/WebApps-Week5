"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const add_1 = __importDefault(require("./add"));
const users_1 = __importDefault(require("./users"));
const todos_1 = __importDefault(require("./todos"));
// import deleteRoutes from "./delete"; 
const update_1 = __importDefault(require("./update"));
// Create router
const router = (0, express_1.Router)();
// Add routes
router.use('/add', add_1.default);
router.use('/todos', todos_1.default);
router.use('/users', users_1.default);
// router.use('/todos', todoRoutes);
// router.use('/delete', deleteRoutes); 
router.use('/update', update_1.default);
exports.default = router;
