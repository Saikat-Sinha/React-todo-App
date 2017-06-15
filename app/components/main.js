import React from 'react';
import {AddTask} from './addTask';
import {ToDoApplist} from './appList';

export class Todo extends React.Component{
    constructor(props) {
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
    }

    updateList(text){
            var updatedTasks = this.state.tasks;
            updatedTasks.push(text);
            this.setState({tasks: updatedTasks});
    }

    render(){
        return(
            <div>
                <h1>To Do App</h1>
                <AddTask updateList = {this.updateList}/>
                <ToDoApplist tasks={this.state.tasks}/>
            </div>
        )
    }
}