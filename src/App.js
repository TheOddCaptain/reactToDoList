import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodos from './components/Addtodos'
import uuid from 'uuid';

class App extends Component {
  state = { 
    todos: [
      
    ]
  }

  // Toggles the styles for completed todos
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id ) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }
  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      complete: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      
      <div className="todo-container">
        <Header />
        <AddTodos addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete}
      delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;

