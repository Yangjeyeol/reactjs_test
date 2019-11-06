import React, { Component } from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {
    handleIncrement = () => {
        //this.props.increment();
        const { CounterActions } = this.props;
        CounterActions.increment();
    }

    handleDecrement = () => {
        //this.props.decrement();
        const { CounterActions } = this.props;
        CounterActions.decrement();
    }

    render() {
        const { handleIncrement, handleDecrement } = this;
        const { number } = this.props;
        console.log(this.props);
        return (
            <Counter 
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                number={number}
            />
        );
    }
}

// [1]
//export default CounterContainer;

// [2]
/*
const mapStateToProps = (state) => ({
    number: state.counter.number
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
*/

// [3]
/*
export default connect(
    (state) => ({
        number: state.counter.number
    }),
    (dispatch) => ({
        increment: () => dispatch(counterActions.increment()),
        decrement: () => dispatch(counterActions.decrement())
    })
)(CounterContainer);
*/

// [4]
/*
export default connect(
    (state) => ({ number: state.counter.number }),
    (dispatch) => bindActionCreators(counterActions, dispatch)
)(CounterContainer);
*/

export default connect(
    (state) => ({
        number: state.counter.number
    }),
    (dispatch) => ({
        CounterActions: bindActionCreators(counterActions, dispatch)
    })
)(CounterContainer);

