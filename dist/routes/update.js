"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// PUT route to delete a user
// router.put('/', (req: Request, res: Response) => {
//   if (!req.body.name || !req.body.todo) {
//     console.error("Could not delete todo", req.body.name, req.body.todo)
//     res.status(400).json(`Could not delete todo.`);
//     return;
//   }
//   // Parse the request
//   const name: string = req.body.name;
//   const todo: string|number = req.body.todo; 
//   console.log(`Deleting todo ${todo} of user ${name}`); 
//   // Delete user
//   if (database.deleteTodo(name, todo)) {
//     // User deleted
//     res.json({ message: 'Todo deleted successfully.' });
//   } else {
//     // User not found
//     res.status(400).json({ message: `Could not delete todo ${todo} for user ${name}` });
//   }
// });
exports.default = router;
