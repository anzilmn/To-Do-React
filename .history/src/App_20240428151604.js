import React, { Component } from 'react';
import App from "./App.css";
 

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
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
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));
  };

  handleToggleComplete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
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
            {this.state.todos.map((todo, index) => (
              <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <span>{index + 1}. {todo.text}</span>
                <button className="todo-button" onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button>
                <button className="todo-button" onClick={() => this.handleToggleComplete(todo.id)}>
                  {todo.completed ? 'Revert' : 'Complete'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
