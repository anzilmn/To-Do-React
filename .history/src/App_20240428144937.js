//CLASS COMPONENTs

import React from "react";
import App from "./App.css";

 

class TodoList extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      completedTodos: [],
      inputValue: ''
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleAddTodo = () => {
    if (this.state.inputValue.trim() !== '') {
      this.setState((prevState) => ({
        todos: [...prevState.todos, { id: Date.now(), text: prevState.inputValue, completed: false }],
        inputValue: ''
      }));
    }
  };

  handleDeleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
      completedTodos: prevState.completedTodos.filter(todo => todo.id !== id)
    }));
  };

  handleToggleComplete = (id) => {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      const completedTodo = prevState.todos.find(todo => todo.id === id);
      const completedTodos = completedTodo.completed
        ? prevState.completedTodos.filter(todo => todo.id !== id)
        : [...prevState.completedTodos, completedTodo];

      return {
        todos: updatedTodos,
        completedTodos: completedTodos
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Enter a new todo..."
          />
          <button onClick={this.handleAddTodo}>Add</button>
        </div>
        <h3>Incomplete</h3>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button>
              <button onClick={() => this.handleToggleComplete(todo.id)}>
                {todo.completed ? 'Revert' : 'Complete'}
              </button>
            </li>
          ))}
        </ul>
        <h3>Completed</h3>
        <ul>
          {this.state.completedTodos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button>
              <button onClick={() => this.handleToggleComplete(todo.id)}>
                Revert
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
