import React from 'react';

export class ToDoApplist extends React.Component{
    constructor() {
        super();
    }
    render(){
        var items = this.props.tasks.map((elem, id) => {
           return <li key={id}>{elem}</li>
        });

        return(
            <ul>
                {items}
            </ul>
        )
    }
}