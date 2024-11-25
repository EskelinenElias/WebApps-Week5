import express, { Express, Request, Response } from "express"; 
import path from "path"; 
import morgan from "morgan";
import router from "./routes"; 
import database from "./config/database"; 

// Create app
const app: Express = express()

// Add middleware
app.use(express.json())
app.use(morgan("dev"))

// Add routes
app.use('/', router)

// Serve static files
app.use(express.static(path.join(__dirname, '../public')))

export default app; 
