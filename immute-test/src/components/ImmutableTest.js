import React from 'react';
import { Map, List } from 'immutable';

function ImmutableTest() {

    const obj = Map({
        foo: 1,
        inner: Map({
            bar: 10
        })
    });

    console.log(obj.toJS());

    const arr = List([
        Map({ foo: 1 }),
        Map({ bar: 2 })
    ]);

    console.log(arr.toJS());

    let nextObj = obj.set('foo', 5);
    console.log(nextObj.toJS());
    console.log(nextObj !== obj);

    console.log(obj.get('foo'));
    console.log(arr.get(0));

    let nextObj2 = nextObj.update('foo', value => value + 1);
    console.log(nextObj2 !== nextObj);
    nextObj = nextObj2;
    console.log(nextObj.toJS());

    nextObj = obj.setIn(['inner', 'bar'], 20);
    console.log(nextObj.getIn(['inner', 'bar']));
    console.log(nextObj.toJS());

    let nextArr = arr.setIn([0, 'foo'], 10);
    console.log(nextArr.getIn([0, 'foo']));
    console.log(nextArr.toJS());

    nextArr = arr.push(Map({ qaz: 3 })).push(Map({ foo: 3 }));
    console.log(nextArr.toJS());
    nextArr = arr.filter(item => item.get('foo') === 1);
    console.log(nextArr.toJS());

    nextObj = nextObj.delete('foo');
    console.log(nextObj.toJS());

    nextArr = nextArr.delete(0);
    console.log(nextArr.toJS());

    nextArr = nextArr.delete(0);
    nextArr = nextArr.delete(0);
    nextArr = nextArr.delete(0);
    console.log(nextArr.toJS());

    return (
        <div>Immutable Test !!</div>
    );
}

export default ImmutableTest;