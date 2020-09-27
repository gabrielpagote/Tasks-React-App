import React, { Component } from 'react';
import './style.css';

export default class Task extends Component{


        deleteTask(){
            this.props.deleteTask(this.props.index)
        }

    render(){

        return(

            <div className="card-task">
                <h2>{this.props.autor}</h2>
                <p>{this.props.phrase}</p>
                <button className="btn-sm btn-danger" onClick={this.deleteTask.bind(this)}>
                <span className="material-icons"
                >delete
                </span>
                </button>
            </div>

        );
    }

}