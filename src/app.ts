import express, { Express, Request, Response } from "express"; 
import path from "path"; 
import morgan from "morgan";
import router from "./routes"; 
// import database from "./config/database"; 
import mongoose from 'mongoose'; 

// Create app
const app: Express = express()

// Add middleware
app.use(express.json())
app.use(morgan("dev"))

// Add routes
app.use('/', router)

// Serve static files
app.use(express.static(path.join(__dirname, '../public')))

const address = "mongodb://127.0.0.1:27017/testdb"
mongoose.connect(address).then(() => {
  console.log("Connected to database.")
}).catch((error) => {
  console.error("Could not connect to database", error)
}); 
mongoose.Promise = Promise; 
const database = mongoose.connection; 

database.on("error", console.error.bind(console, "Database connection error."))

export default app; 
