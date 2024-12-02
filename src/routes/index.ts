import { Router, Request, Response } from 'express';
import addRoutes from "./add";
import userRoutes from "./users";
import todoRoutes from "./todos"; 
// import deleteRoutes from "./delete"; 
// import updateRoutes from "./update"; 

// Create router
const router = Router();

// Add routes
router.use('/add', addRoutes); 
router.use('/todos', todoRoutes); 
router.use('/users', userRoutes); 
// router.use('/todos', todoRoutes);
// router.use('/delete', deleteRoutes); 
// router.use('/update', updateRoutes); 

export default router; 
