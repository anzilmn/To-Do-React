import React, { Component } from 'react';
import App from "./App.css";

class TodoList extends Component {
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
      <div className="todo-list-container">
        <h2>Todo List</h2>
        <div>
          <input
            type="text"
            className="todo-input"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Enter a new todo..."
          />
          <button className="todo-button" onClick={this.handleAddTodo}>Add</button>
        </div>
        <div className="todo-section">
          <h3>Incomplete</h3>
          <ul className="todo-list">
            {this.state.todos.map(todo => (
              <li key={todo.id} className="todo-item">
                <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                <button className="todo-button" onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button>
                <button className="todo-button" onClick={() => this.handleToggleComplete(todo.id)}>
                  {todo.completed ? 'Revert' : 'Complete'}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="todo-section">
          <h3>Completed</h3>
          <ul className="todo-list">
            {this.state.completedTodos.map(todo => (
              <li key={todo.id} className="todo-item completed">
                <span className="completed">{todo.text}</span>
                <button className="todo-button" onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button>
                <button className="todo-button" onClick={() => this.handleToggleComplete(todo.id)}>Revert</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
