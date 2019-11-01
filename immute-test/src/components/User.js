import React, { Component } from 'react';

class User extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.user !== this.props.user;
    }
    render() {
        const { user: { username } } = this.props;
        console.log('%s가 렌더링 되고 있어요!!!', username);
        return (
            <div>
                {username}
            </div>
        );
    }
}

export default User;