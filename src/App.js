import React from 'react';
import Task from './components/Task'
import TaskInput from './components/TaskInput';

//const API = 'http://localhost:3000/tasks';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: 'Create todo-react-app', done: false }, 
        { id: 1, title: 'Make a video about it', done: true },
        { id: 2, title: 'Create simple todo-app', done: false }
      ]    
    }
  }

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done: false
      });
      return tasks;
    });
  };
     
  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTask = tasks.filter(task => task.done);


    return(
      <div className='App'>
        <h1 className='top'>Tasks: {activeTasks.length}</h1>
        <TaskInput addTask={this.addTask}></TaskInput>
        {[...activeTasks, ...doneTask].map(task => (
          <Task 
          doneTask={() => this.doneTask(task.id)}
          deleteTask={() => this.deleteTask(task.id)} 
          task={task} 
          key={task.id}
          ></Task>
          ))}
      </div>
    );
  } 
}





export default App;
