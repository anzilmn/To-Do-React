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
      const todoToToggle = prevState.todos.find(todo => todo.id === id);
      const updatedTodos = prevState.todos.filter(todo => todo.id !== id);
      
      if (todoToToggle) {  
        return {
          todos: updatedTodos,
          completedTodos: [...prevState.completedTodos, { ...todoToToggle, completed: true }]
        };
      } else {  
        const todoToRevert = prevState.completedTodos.find(todo => todo.id === id);
        const updatedCompletedTodos = prevState.completedTodos.filter(todo => todo.id !== id);

        return {
          todos: [...prevState.todos, { ...todoToRevert, completed: false }],
          completedTodos: updatedCompletedTodos
        };
      }
    });
  };

  render() {
    return (
      <div className="todo-list-container">
        <h2 id='heading'>Todo List</h2>
        <div>
          <input
            id='name'
            type="text"
            className="todo-input"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Enter a new todo..."
          />
          <button className="todo-button" id='add' onClick={this.handleAddTodo}>Add</button>
        </div>
        <div className="todo-section">
          <h3>Things to be done</h3>
          <ul className="todo-list">
            {this.state.todos.map((todo, index) => (
              <li key={todo.id} className="todo-item">
                <span>{index + 1}. {todo.text}</span>
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
            {this.state.completedTodos.map((todo, index) => (
              <li key={todo.id} className="todo-item completed">
                <span>{index + 1}. {todo.text}</span>
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
