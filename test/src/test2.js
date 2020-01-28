import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Menu/>
                <hr/>
                <Route exact path="/">Home</Route>
                <Route exact path="/about">About</Route>
                <Route path="/about/foo">About Foo</Route>
                <Route path="/period">Period</Route>
            </BrowserRouter>
        );
    }
}

export default App;