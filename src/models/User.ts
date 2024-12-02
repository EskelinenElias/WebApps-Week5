import { Document, Types, Schema, model } from "mongoose";
import { ITodo, TodoSchema } from "./Todo";

interface ITodo extends Document {
  todo: string; 
}

let TodoSchema = new Schema({
  todo: { type: String, required: true }
})

const Todo = model<ITodo>("TUser", TodoSchema); 

interface IUser extends Document {
  name: string; 
  todos: Types.DocumentArray<ITodo>;
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  todos: { type: [TodoSchema], default: [] }
});

const User = model<IUser>("User", UserSchema);

export { User };
