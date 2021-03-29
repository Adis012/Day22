import  React  from  'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Remove code below this line 
class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello, React!</h1>
            </div>
        )
    }
}
// Remove code above this line

ReactDOM.render(<App />, document.getElementById('root'));
