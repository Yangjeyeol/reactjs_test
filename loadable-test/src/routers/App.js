import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Home, About } from '../pages';

class App extends Component {
    handleMouseOver = () => {
        About.preload();
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">here</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about" onMouseOver={this.handleMouseOver}>About</Link></li>
                </ul>
                <hr />
                <Route exact path="/" render={() => (<div>here is ...</div>)} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
            </div>
        );
    }
}

export default App;