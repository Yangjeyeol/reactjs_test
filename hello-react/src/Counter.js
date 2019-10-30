import React, { Component } from 'react';

class Counter extends Component {
    // 생성자
    /*
    constructor(props) {
        super(props);
        this.state = { number: 0 } // class fields 와 같이 쓰면 이 부분이 늦게 실행 됨
    }
    */

    state = { number: 0 } // class fields 문법

    handleIncrease = () => {
        /*
        this.setState({
            number: this.state.number + 1
        });
        */
        /*
        this.setState(
            (state) => ({
                number: state.number + 1
            })
        );
        */
       this.setState(
           ({ number }) => ({
               number: number + 1
           })
       );
    }

    handleDecrease = () => {
        /*
        this.setState({
            number: this.state.number - 1
        });
        */
        /*
        this.setState(
            (state) => ({
                number: state.number - 1
            })
        );
        */
        this.setState(
            ({ number }) => ({
                number: number - 1
            })
        );
    }

    render() {
        return (
            <div className="wrap">
                <h1>카운터</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}

export default Counter;