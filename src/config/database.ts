import mongoose, { Connection } from 'mongoose'; 

console.log("Connecting to database...")
const address = "mongodb://127.0.0.1:27017/testdb"
mongoose.connect(address).then(() => {
  console.log("Connected to database.")
}).catch((error) => {
  console.error("Could not connect to database", error)
}); 
mongoose.Promise = Promise; 
const database = mongoose.connection; 

database.on("error", console.error.bind(console, "Database connection error."))

export default database; 