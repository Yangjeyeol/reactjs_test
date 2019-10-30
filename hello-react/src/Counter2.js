import React, { Component } from 'react';

class Counter2 extends Component {
    state = {
        number: 0
    }

    // 컴포넌트가 생성될 때 1회 호출
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // 컴포넌트 생성(constructor) 후 1회 호출 
    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    // 컴포넌트 생성 완료(render) 후 1회 호출
    componentDidMount() {
        console.log('componentDidMount');
    }

    // 컴포넌트의 변화가 있는 경우 false 이면 렌더링 하지 않음.
    shouldComponentUpdate(nextProps, nextState) {
        // 5의 배수라면 리렌더링 하지 않음.
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) {
            console.log('shouldComponentUpdate false');
            return false;
        } 
        return true;
    }

    // shouldComponentUpdate 가 true 이면 호출 됨.
    // reuder 바로 전 호출
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    // shouldComponentUpdate 가 true 이면 호출 됨.
    // render 바로 후 호출
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
            number: number + 1
        });
    }
    handleDecrease = () => {
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

/*
Counter2.js:11 constructor
Counter2.js:16 componentWillMount (deprecated)
Counter2.js:60 render
Counter2.js:21 componentDidMount

Counter2.js:27 shouldComponentUpdate
Counter2.js:37 componentWillUpdate
Counter2.js:60 render
Counter2.js:42 componentDidUpdate

Counter2.js:27 shouldComponentUpdate
Counter2.js:37 componentWillUpdate
Counter2.js:60 render
Counter2.js:42 componentDidUpdate

Counter2.js:27 shouldComponentUpdate
Counter2.js:37 componentWillUpdate
Counter2.js:60 render
Counter2.js:42 componentDidUpdate

Counter2.js:27 shouldComponentUpdate
Counter2.js:29 shouldComponentUpdate false
*/

export default Counter2;