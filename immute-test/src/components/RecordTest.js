import React, { Component } from 'react';
import { Record } from 'immutable';

class RecordTest extends Component {
    render() {
        const Person = Record({
            name: '홍길동',
            age: 1
        });
        return (
            <div>
                Record Test !!!
            </div>
        );
    }
}

export default RecordTest;