import React from 'react';
import {AddTask} from './addTask';
import {ToDoApplist} from './appList';

export class Todo extends React.Component{
    constructor(props) {
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
        this.updateLocalStorage = this.updateLocalStorage.bind(this);
    }

    updateList(text){
            var updatedTasks = this.state.tasks;
            updatedTasks.unshift(text);
            this.setState({tasks: updatedTasks});
            this.updateLocalStorage(updatedTasks);
    }

    updateLocalStorage(updatedTasks){
        console.log(updatedTasks);
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
    }

    render(){
        return(
            <div>
                <h1>To Do App</h1>
                <AddTask updateList = {this.updateList}/>
                <ToDoApplist tasks={this.state.tasks} updateLocalStorage={this.updateLocalStorage}/>
            </div>
        )
    }
}