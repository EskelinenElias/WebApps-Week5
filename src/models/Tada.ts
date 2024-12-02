import { Document, Schema, model} from "mongoose";

interface ITodo extends Document {
  todo: string; 
}

let TodoSchema = new Schema({
  todo: { type: String, required: true }
})

const Todo = model<ITodo>("TUser", TodoSchema); 

export { Todo, TodoSchema, ITodo };  