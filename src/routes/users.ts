import { Router, Request, Response } from 'express';
import { User } from '../models/User';

const router = Router();
 
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find(); 
    res.status(200).json({ users }); 
  } catch(error) {
    console.error("Error getting users."); 
    res.status(500).json({ error: "Error getting users." }); 
  }
}); 

export default router;
