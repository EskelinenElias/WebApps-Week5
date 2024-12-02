"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// // GET route to get todos for user
// router.get('/:id', async (req: Request, res: Response) => {
//   // Parse the request
//   const id: string = req.params.id;
//   console.log(`Searching for user ${id}`);
//   // Get todos for the id
//   const todos = database.getTodos(id);
//   // Send the response
//   if (todos) {
//     res.json({ todos: todos });
//   } else {
//     res.json("User not found.");
//   }
// });
exports.default = router;
