const fs = require("fs");

class Todo{
    constructor(id, name, year, type, createdAt){
        this.id = id;
        this.name = name;
        this.year = year;
        this.type = type;
        this.createdAt = createdAt;
    }

    static getTodos() {
        let todos = JSON.parse(fs.readFileSync("./wines.json", "utf8"));
        todos = todos.map((todo) => {
          const { id, name, year, type, createdAt} = todo;
          return new Todo(id, name, year, type, createdAt);
        });
        return todos;
      }
}

module.exports = Todo;