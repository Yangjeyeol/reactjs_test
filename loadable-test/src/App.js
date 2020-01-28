import React, { Component } from 'react';
import withSplitting from './withSplitting';

const SplitMe2 = withSplitting(() => import('./SplitMe'));

class App extends Component {
  state = {
    SplitMe: null,
    visible: false
  };
  handleClick3 = () => {
    this.setState({
      visible: true
    });
  }
  handleClick2 = () => {
    import('./SplitMe').then(({ default: SplitMe }) => {
      this.setState({
        SplitMe
      });
    });
  }
  handleClick = () => {
    import('./notify').then(({ default: notify }) => {
      notify();
    });
  }
  render() {
    const { SplitMe, visible } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button><br/>
        <button onClick={this.handleClick2}>Click2 me</button><br/>
        <button onClick={this.handleClick3}>Click3 me</button><br/>
        <p>1. { SplitMe && <SplitMe/> }</p>
        <p>2. { visible && <SplitMe2/>}</p>
      </div>
    );
  }
}

export default App;