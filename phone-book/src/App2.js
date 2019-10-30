import React, { Component } from 'react';
import PhoneForm2 from './component/PhoneForm2';

class App2 extends Component {
    id = 2
    state = {
        information: [
            {
                id: 0,
                name: '홍길동',
                phone: '010-1111-1111'
            },
            {
                id: 1,
                name: '유관순',
                phone: '010-2222-2222'
            }
        ]
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({ id: this.id++, ...data })
        });
    }
    render() {
        const { information } = this.state;
        return (
            <div>
                Hello, world!
                <PhoneForm2
                    onCreate={this.handleCreate}
                />
                {JSON.stringify(information)}
            </div>
        );
    }
}

export default App2;