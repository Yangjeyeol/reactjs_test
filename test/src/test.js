import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

function ListItem({ item }) {
    return (
        <Fragment>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
        </Fragment>
    );
}

function Glossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                <ListItem item={item} key={item.id} />
            ))}
        </dl>
    );
}

function Glossary2(props) {
    return (
        <dl>
            {props.items.map(item => (
                <Fragment key={item.id}>
                    <dt>- {item.term}</dt>
                    <dd>- {item.description}</dd>
                </Fragment>
            ))}
        </dl>
    );
}

const list = [
    {
        id: 0,
        term: '100 month',
        description: '1 month before'
    },
    {
        id: 1,
        term: '200 month',
        description: '2 month now'
    },
    {
        id: 2,
        term: '300 month',
        description: '3 month after'
    }
];

//==================================================

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
        this.fileInput = React.createRef();
    }

    handleSubmit(e) {
        e.preventDefault();
        //alert('A name was submitted: ' + this.input.current.value);
        alert(
            `Selected file - ${this.fileInput.current.files[0].name}`
        );        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="input_name">Name:</label>
                <input 
                    id="input_name" 
                    type="text" 
                    ref={this.input}
                    defaultValue="test"
                />
                <input type="file" ref={this.fileInput} />
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

//==================================================

class HelloMessage extends React.Component {
    render() {
        return <div>Hello <x-search>{this.props.name}</x-search></div>;
    }
}

class XSearch extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('span');
        this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

        const name = this.textContent;
        const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
        ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
    }
}

customElements.define('x-search', XSearch);

//==================================================

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        this.textInput.current.focus();
    }

    render() {
        const { text, onChange } = this.props;
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput}
                    value={text}
                    onChange={onChange}
                />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.state = {
            text: '123'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    componentDidMount() {
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput} text={this.state.text} onChange={this.handleChange}/>
        );
    }
}

//==================================================

function CustomFunctionTextInput(props) {
    return (
        <div>
            <input ref={props.inputRef} />
        </div>
    );
}

class Parent extends React.Component {
    handleClick = () => {
        alert(this.inputElement.value);
    }

    render() {
        const { handleClick } = this;
        return (
            <Fragment>
                <CustomFunctionTextInput
                    inputRef={
                        el => this.inputElement = el
                    }
                />
                <input type="button" value="click" onClick={handleClick} />
            </Fragment>
        );
    }
}

class MouseTracker1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);   
        this.id = 0;     
        this.state = { 
            x: 0,
            y: 0,
            clicked: []
        };
    }


    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    handleMouseClick(event) {
        const { clientX, clientY } = event;
        this.setState(({ clicked }) => ({ 
            clicked: clicked.concat({ id: this.id++, clickX: clientX, clickY: clientY })
        }));
    }

    render() {
        return (
            <div style={{ height: '100%', backgroundColor: '#eee' }} 
                onMouseMove={this.handleMouseMove}
                onClick={this.handleMouseClick}
            >
                <h1>Move the mouse around!</h1>
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
                <div>
                    <ul>
                    {this.state.clicked.map(pos => <li key={pos.id}>{pos.clickX} - {pos.clickY}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

class Mouse1 extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100%', backgroundColor: '#eee' }} onMouseMove={this.handleMouseMove}>
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
            </div>
        );
    }
}

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        const style = { 
            position: 'absolute', 
            left: mouse.x, 
            top: mouse.y, 
            width: '50px', 
            height: '50px', 
            backgroundColor: 'red' 
        };
        return (
            <span style={style} />
        );
    }
}

class MouseWithCat extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '500px', backgroundColor: '#eee' }} onMouseMove={this.handleMouseMove}>
                <Cat mouse={this.state} />
            </div>
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '500px', backgroundColor: '#eee' }} onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={mouse => <Cat mouse={mouse}/>}/>
            </div>
        );
    }
}

export default MouseTracker;