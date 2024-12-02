import mongoose, { Document, Types, Schema, ObjectId, model } from "mongoose";

interface ITodo extends Document {
  todo: string; 
}

let TodoSchema = new Schema<ITodo>({
  todo: { type: String, required: true }
})

const Todo = model<ITodo>("TUser", TodoSchema); 

interface IUser extends Document {
  name: string, 
  todos: ITodo[]
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  todos: [ TodoSchema ]
});

const User = model<IUser>("User", UserSchema);

export { User, Todo };
