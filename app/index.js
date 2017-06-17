var React = require('react');
var ReactDOM = require('react-dom');
import {Todo} from './components/main';

require('../app/index.css');

var tasksList = [];
var tasks = localStorage.getItem('storedTasks');
if(tasks){
    tasksList = JSON.parse(tasks);
}

ReactDOM.render(<Todo tasks={tasksList}/>, document.getElementById('app'));