import React, { Component } from 'react';
import './App.css';
import Task from './Components/Task';
import Form from './Components/Form';
import { render } from '@testing-library/react';

//localhost:3000

class App extends Component{

  constructor(){
    super()
    this.state = [
      {autor: "Nietzsche"},
      {autor: "Karl Marx"},
      {autor: "Gustavo Guanabara"}
    ];
  }

  addTask(task){
    const newState = [
    
    ]
    this.setState(newState)
      }

  render(){
     return (
       <>
    <section>
      <Form addTask={this.addTask.bind(this)}/>
    </section>
    
    <section>
      {this.state.map(task => 
      <Task autor={task.autor}/>)}

    </section>
       </>
  
  );
  }
}
 
export default App;
