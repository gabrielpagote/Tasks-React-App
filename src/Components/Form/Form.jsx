import React, { Component } from 'react'
import './style.css'

class Form extends Component {

    constructor(){
        super()
        this.state = {
            autor: "",
            phrase: ""
        };
    }

    handleChangeAutor(event){
        this.setState({
            autor: event.target.value})

    }

    handleChangePhrase(event){
        this.setState({
            phrase: event.target.value})

    }

    handleSubmit(event){
       event.preventDefault()
        this.props.addTask(this.state)
    }
    


    render() { 
        return (  
         <form className="form" onSubmit={this.handleSubmit.bind(this)}>
             <input type="text" placeholder="Autor"
             onChange={this.handleChangeAutor.bind(this)}
             />
             <textarea placeholder="Quote"
             onChange={this.handleChangePhrase.bind(this)}
             />
            <button className="btn-bg">
                Salvar
            </button>
         </form>

         );
    }
}
 
export default Form;
