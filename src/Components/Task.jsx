import React, { Component } from 'react';
class Task extends Component{

    render(){

        return(

            <div>
                <h2>{this.props.autor}</h2>
                <p>{this.props.phrase}</p>
                <a href="#">Erase</a>

            </div>

        );
    }

}
export default Task;