import { getTodoList, updateTodo, deleteTodo, createTodo } from "./controller/todoapp";

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3004;

app.use(cors());
app.use(express.json());

app.get("/todo-list", getTodoList);
app.post("/create-todo", createTodo);
app.post("/update-todo", updateTodo);
app.delete("/delete-todo", deleteTodo);

app.listen(PORT, async () => {
  console.log(`🚀 Server running on port: ${PORT}`);
});
