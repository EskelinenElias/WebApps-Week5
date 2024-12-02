import { Document, Types, Schema, model } from "mongoose";
import { ITodo, TodoSchema } from "./todo";

interface IUser extends Document {
  name: string; 
  todos: Types.DocumentArray<ITodo>;
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  todos: { type: [TodoSchema], default: [] }
});

const User = model<IUser>("User", UserSchema);

export { User, IUser };
