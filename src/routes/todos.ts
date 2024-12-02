import { Router, Request, Response } from 'express';
import { User } from '../models/User';

const router = Router();

// GET route to get todos for user
router.get('/:id', async (req: Request, res: Response) => {
  // Parse the request
  const name: string = req.params.id;
  // Validate request
  if (!name) {
    res.status(500).json({ message: "Can't find todos without name." });
    return;
  }
  // Find the user
  const user = await User.findOne({ name: name });
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

export default router; 
