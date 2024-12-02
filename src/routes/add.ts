import { Router, Request, Response } from 'express';
import { User } from '../models/User';

const router = Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, todo } = req.body;
    // Validate input
    if (!name || !todo) {
      res.status(400).json({ error: "User name and todo are required." }); 
      return; 
    }
    // Find the user by name
    let user = await User.findOne({ name: name });
    if (!user) {
      // User not found; create new user
      user = new User({
        name: name,
        todos: [{ todo }],
      });
    } else {
      // User found; add new todo to the todos array
      user.todos.push({ todo: todo }); 
    }
    // Save changes
    await user.save();
    // Send success response
    res.status(200).json({ message: `Todo "${todo}" added successfully for user "${name}".` });
  } catch (error: any) {
    // Log error and send failure response
    console.error("An error occurred while adding todo:", error.message);
    res.status(500).json({ error: "An error occurred while adding todo." });
  }
});

export default router;
