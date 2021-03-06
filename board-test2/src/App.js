import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    //this.child = React.createRef();
  }

  state = {
    maxNo: 3,
    selectRow: null,
    boards: [
      {
        brdno: 1,
        brdtitle: 'If you intend to live then you die',
        brdwriter: 'Lee SunSin',
        brddate: new Date()
      },
      {
        brdno: 2,
        brdtitle: 'Founder for two countries',
        brdwriter: 'So SiNo',
        brddate: new Date()
      }
    ]
  }
  handleSaveData = (data) => {
    let boards = this.state.boards;
    if ( data.brdno === null || data.brdno === '' ) {
      this.setState({
        maxNo: this.state.maxNo + 1,
        boards: boards.concat({ 
          ...data,
          brdno: this.state.maxNo,
          brddate: new Date()          
        })
      });
    } else {      
      this.setState({
        boards: boards.map(row => data.brdno === row.brdno ? { ...data } : row)
      });
    }
    this.setState({
      selectRow: null
    });
  }
  handleSelectRow = (row) => {
    this.setState({ selectRow: row });
    //this.child.current.handleSelectRow(row);
  }
  handleRemove = (brdno) => {
    this.setState({
      boards: this.state.boards.filter(row => row.brdno !== brdno)
    });
  }
  render() {
    const { boards, selectRow } = this.state;
    
    return (
      <div>
        <BoardForm 
          onSaveData={this.handleSaveData} 
          //ref={this.child} 
          selectRow={selectRow}
        />
        <table border="1">
        <tbody>
          <tr align="center">
            <td width="50">No.</td>
            <td width="300">Title</td>
            <td width="100">Name</td>
            <td width="100">Date</td>
            <td width="50">X</td>
          </tr>
          {
            boards.map(row =>
              (
                <BoardItem 
                  key={row.brdno} 
                  row={row}
                  onSelectRow={this.handleSelectRow}
                  onRemove={this.handleRemove}
                />
              )
            )
          }
        </tbody>
        </table>         
      </div>
    );
  }
}

class BoardForm extends Component {
  state = {
    brdtitle: '',
    brdwriter: ''
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    if ( nextProps !== null && this.props !== nextProps ) {
      this.setState(nextProps.selectRow);
    }
    return true;
  }
  
  //handleSelectRow = (data) => {
  //  this.setState(data);
  //}
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveData(this.state);
    this.setState({
      brdno: '',
      brdtitle: '',
      brdwriter: ''
    });
  }
  render() {
    const { brdtitle, brdwriter } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="title" name="brdtitle" value={brdtitle} onChange={this.handleChange}/>
        <input placeholder="name" name="brdwriter" value={brdwriter} onChange={this.handleChange}/>
        <button type="submit">Save</button>
      </form>
    );
  }
}

class BoardItem extends Component {
  handleSelectRow = () => {
    const { row, onSelectRow } = this.props;    
    onSelectRow(row);
  }
  handleRemove = () => {
    this.props.onRemove(this.props.row.brdno);
  }
  render() {
    return (
      <tr>
        <td>{this.props.row.brdno}</td>
        <td><span onClick={this.handleSelectRow}>{this.props.row.brdtitle}</span></td>
        <td>{this.props.row.brdwriter}</td>
        <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
        <td><button type="button" onClick={this.handleRemove}>X</button></td>
      </tr>
    );
  }
}

export default App;