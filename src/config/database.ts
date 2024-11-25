import mongoose, { Connection } from 'mongoose'; 

const address = "mongodb://127.0.0.1:27017/db"
mongoose.connect(address); 
mongoose.Promise = Promise; 
const database = mongoose.connection; 

export default database; 