import { Router, Request, Response } from 'express';
import { User } from '../models/User';

const router = Router();

// PUT route to delete a user
router.put('/', async (req: Request, res: Response) => {
  // Parse request
  const name: string = req.body.name;
  const todo: string = req.body.todo; 
  const checked: boolean = req.body.checked; 
  // Validate request
  if (!name || !todo) {
    res.status(500).json({ message: "Invalid request; Can't update todo" });
    return;
  }
  // Find the user
  const user = await User.findOne({ name: name });
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
  user.todos[index].checked = checked; 
  console.log(user.todos[index])
  await user.save();
  res.status(200).json("Todo updated.");
});

export default router; 
