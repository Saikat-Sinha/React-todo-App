var React = require('react');
var ReactDOM = require('react-dom');
import {Todo} from './components/main';

require('../app/index.css');

class App extends React.Component{

    render(){
        return(
            <div>
                <Todo />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));