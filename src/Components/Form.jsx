import React, { Component } from 'react';
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
         <form onSubmit={this.handleSubmit.bind(this)}>
             <input type="text" placeholder="Autor"
             onChange={this.handleChangeAutor.bind(this)}
             />
             <textarea placeholder="Phrase"
             onChange={this.handleChangePhrase.bind(this)}
             />
            <button>Salvar</button>
         </form>

         );
    }
}
 
export default Form;