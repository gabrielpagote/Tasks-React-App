import React, { Component } from 'react';
import './App.css';
import Task from './Components/Task/Task';
import Form from './Components/Form/Form';
import logo from './Images/logo.png';


//localhost:3000

class App extends Component{

    constructor(){
    super()
    this.state = {
      tasks : [
        {autor: "Frederich Nietzsche", phrase: "To live is to suffer; to survive is to find "+
        "some meaning in the suffering."} ,
        {autor: "George Berkeley", phrase: "What I don't understand, doesn't exist."},
        {autor: "Aristoteles", phrase: "The wise man never says everything he thinks, but "+
      "always thinks everything he says." }
    ]
    }
  }

  logo(logo){
    return <img src={logo} alt="Logo" />
  }

  addTask(task){
   
    this.setState({tasks : [...this.state.tasks, task]}
    )
  }

  deleteTask(index){
    let newTasks = this.state.tasks
      newTasks.splice(index, 1)
      this.setState({tasks: newTasks});
  }

  render(){
     return (
      <div className="container">
        <section>
          <h1 className="main-title">Phylosophycal Quotes</h1>
          <Form addTask={this.addTask.bind(this)}/>
        </section>
        <section>
        <img src={logo} alt="Logo" />

        </section>
        <section className="quotes">
         {this.state.tasks.map((task, index) => (
         <Task 
            key={index}
            index={index}
            autor={task.autor}
            phrase={task.phrase}
            deleteTask={this.deleteTask.bind(this)}
         />
      ))}
    </section>
    </div>
    );
  }
}
 
export default App;


/*

*/