class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(task) {
        this.todos.push({ task, completed: false });
        console.log(`Added task: ${task}`);
    }

    completeTodo(index) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index].completed = true;
            console.log(`Completed task: ${this.todos[index].task}`);
        } else {
            console.log('Invalid task index');
        }
    }

    removeTodo(index) {
        if (index >= 0 && index < this.todos.length) {
            const removedTask = this.todos.splice(index, 1)[0];
            console.log(`Removed task: ${removedTask.task}`);
        } else {
            console.log('Invalid task index');
        }
    }

    listTodos() {
        if (this.todos.length === 0) {
            console.log('No tasks in the list');
        } else {
            console.log('Current TODO list:');
            this.todos.forEach((todo, index) => {
                const status = todo.completed ? '[x]' : '[ ]';
                console.log(`${index}: ${status} ${todo.task}`);
            });
        }
    }
}

// 使用例
const myTodoList = new TodoList();

myTodoList.addTodo('買い物に行く');
myTodoList.addTodo('レポートを書く');
myTodoList.addTodo('運動する');

myTodoList.listTodos();

myTodoList.completeTodo(1);

myTodoList.removeTodo(0);

myTodoList.listTodos();f