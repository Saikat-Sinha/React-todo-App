import React from 'react';

export class ToDoApplist extends React.Component{
    constructor() {
        super();
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
    }
    remove(){
        var removedTasks = this.props.tasks.shift();
        this.setState({tasks: removedTasks});
        this.props.updateLocalStorage(this.props.tasks);
    }
    edit(){
        console.log('Edit option not yet works')
    }
    render(){
        var items = this.props.tasks.map((elem, id) => {
            return <li key={id}><span>{elem}</span>
                <button onClick={this.remove} className="remove">Remove</button>
                <button onClick={this.edit} className="edit">Edit</button></li>
        });

        return(
            <ul>
                {items}
            </ul>
        )
    }
}