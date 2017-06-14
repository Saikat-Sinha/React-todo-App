import React from 'react';
import {AddTask} from './addTask';
import {ToDoApplist} from './appList';

export class Todo extends React.Component{
    constructor() {
        super();
    }
    render(){
        return(
            <div>
                <h1>To Do App</h1>
                <AddTask />
                <ToDoApplist />
            </div>
        )
    }
}