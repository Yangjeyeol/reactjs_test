import React, { Component } from 'react';
import withRequest from './withRequest';

class DataList extends Component {
    render() {
        const { data } = this.props;

        if ( !data ) return null;

        return (
            <div>
                { JSON.stringify(data) }
            </div>
        );
    }
}

export default withRequest('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')(DataList);