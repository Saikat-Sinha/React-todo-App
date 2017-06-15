var React = require('react');
var ReactDOM = require('react-dom');
import {Todo} from './components/main';

require('../app/index.css');

var tasksList = ['task1','task2'];

ReactDOM.render(<Todo tasks={tasksList}/>, document.getElementById('app'));