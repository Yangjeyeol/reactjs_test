import React, { Component } from 'react';
import PhoneForm2 from './component/PhoneForm2';
import PhoneInfoList from './component/PhoneInfoList';

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
        ],
        keyword: ''
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat({ id: this.id++, ...data })
        });
    }
    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        });
    }
    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
            information: information.map(
                info => id === info.id 
                    ? ({...info, ...data}) 
                    : info
            )
        });
    }
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }
    render() {
        const { information, keyword } = this.state;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1
        );
        return (
            <div>
                Hello, world!
                <PhoneForm2
                    onCreate={this.handleCreate}
                />
                <input
                    placeholder="이름입력"
                    onChange={this.handleChange}
                    value={keyword}
                />
                <PhoneInfoList 
                    data={filteredList}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}

export default App2;