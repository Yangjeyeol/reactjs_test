import React, { Component } from 'react';
import Todos from 'components/Todos';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as todoActions from 'store/modules/todo';

class TodosContainer extends Component {
    handleChange = () => {

    }

    handleInsert = () => {

    }

    handleToggle = () => {

    }

    handleRemove = () => {

    }

    render() {
        return (
            <Todos />
        );
    }
}

export default connect(
    ({ todo }) => ({
        input: todo.input,
        todos: todo.todos
    }),
    (dispatch) => ({
        TodoActions: bindActionCreators(todoActions, dispatch)
    })
)(TodosContainer);