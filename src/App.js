import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        <h2>
                            hello world!
                        </h2>
                    </p>
                    <p className="App-intro">
                        你可以在 <code>src/App.js</code> 文件中修改。
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
