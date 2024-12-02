"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const add_1 = __importDefault(require("./add"));
// import todoRoutes from "./todos"; 
// import deleteRoutes from "./delete"; 
// import updateRoutes from "./update"; 
// Create router
const router = (0, express_1.Router)();
// Add routes
router.use('/add', add_1.default);
// router.use('/todos', todoRoutes);
// router.use('/delete', deleteRoutes); 
// router.use('/update', updateRoutes); 
exports.default = router;
