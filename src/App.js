import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
    };
  }

  handleAddTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask]
    });
  }

  handleToggleTask = (selectedTask) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === selectedTask.id) {
          return({
            ...todo,
            completed: !todo.completed
          })
        } else {
          return todo;
        }
      })
    });
  }

  handleCompletedTask = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos
      .filter(todo => {
        return !todo.completed;
      })
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm handleAddTask={this.handleAddTask}/>
        </div>
        <TodoList handleToggleTask={this.handleToggleTask} todos={this.state.todos} />
        <button onClick={this.handleCompletedTask}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
