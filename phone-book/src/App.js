import React, { Component } from 'react';
import PhoneForm from './component/PhoneForm';

class App extends Component {
  state = {
    name: '',
    phone: ''
  }
  handleCreate = (data) => {
    console.log(data);
    this.setState(data);
  }
  render() {
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <div>전송된데이터 : {this.state.name} | {this.state.phone}</div>
      </div>
    );
  }
}

export default App;