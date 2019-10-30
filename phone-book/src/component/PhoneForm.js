import React, { Component } from 'react';

class PhoneForm extends Component {
    /*
    state = {
        name: ''
    }
    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    */
    
    state = {
        name: '',
        phone: '',
        email: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
       e.preventDefault();
       this.props.onCreate(this.state);
       this.setState({
            name: '',
            phone: '',
            email: ''
       });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    placeholder="이름"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                />
                <input 
                    placeholder="전화번호"
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                />
                <input 
                    placeholder="이메일"
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="email"
                />
                <button type="submit">등록</button>
                <div>{this.state.name} {this.state.phone} {this.state.email}</div>
            </form>
        );
    }
}

export default PhoneForm;