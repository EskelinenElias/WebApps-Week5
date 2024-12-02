import mongoose, { Document, Schema, model } from "mongoose";

interface ITodo {
  todo: string;
}

const TodoSchema = new Schema<ITodo>({
  todo: { type: String, required: true },
});

interface IUser extends Document {
  name: string;
  todos: ITodo[];
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  todos: [TodoSchema],
});

const Todo = model<ITodo>("Todo", TodoSchema);
const User = model<IUser>("User", UserSchema);

export { User, Todo };
