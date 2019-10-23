import React, { Component } from 'react';

class MyName extends Component {
    static defaultProps = {
        name: '기본이름'
    }
    render() {
        return (
            <div>
                Hello? my name is <b>{this.props.name}</b>.
            </div>
        );
    }
}

MyName.defaultProps = {
    name: '기본이름2'
};
export default MyName;