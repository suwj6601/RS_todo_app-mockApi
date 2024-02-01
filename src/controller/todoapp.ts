const fs = require("fs");

const getTodoList = (req: any, res: any) => {
  // read file json and return it
  fs.readFile("data.json", "utf8", (err: any, data: any) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    const todoList = JSON.parse(data);
    res.json({
      todoList,
    });
  });
};

const createTodo = (req: any, res: any) => {
  // read file json and return it
  fs.readFile("data.json", "utf8", (err: any, data: any) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    let todoList = JSON.parse(data).todoApp;
    const newTodo = req.body;

    todoList.push(newTodo);

    fs.writeFile(
      "data.json",
      JSON.stringify({ todoApp: todoList }),
      (err: any) => {
        if (err) {
          console.error("Error writing JSON file:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json({
          todoList,
        });
      }
    );
  });
};

const updateTodo = (req: any, res: any) => {
  // read file json and return it
  fs.readFile("data.json", "utf8", (err: any, data: any) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    let todoList = JSON.parse(data).todoApp;
    const { id, ...updateData } = req.body;

    console.log("id", id);
    console.log("updateData", updateData);

    const index = todoList.findIndex((item: any) => item.id == id);
    todoList[index] = { ...todoList[index], ...updateData };

    fs.writeFile(
      "data.json",
      JSON.stringify({ todoApp: todoList }),
      (err: any) => {
        if (err) {
          console.error("Error writing JSON file:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json({
          todoList,
        });
      }
    );
  });
};

const deleteTodo = (req: any, res: any) => {
  // read file json and return it
  fs.readFile("data.json", "utf8", (err: any, data: any) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    let todoList = JSON.parse(data).todoApp;

    console.log("todoList", todoList);
    const { id } = req.body;

    const index = todoList.findIndex((item: any) => item.id == id);
    todoList.splice(index, 1);

    fs.writeFile(
      "data.json",
      JSON.stringify({ todoApp: todoList }),
      (err: any) => {
        if (err) {
          console.error("Error writing JSON file:", err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json({
          todoList,
        });
      }
    );
  });
};

export { getTodoList, createTodo, updateTodo, deleteTodo };
3;
