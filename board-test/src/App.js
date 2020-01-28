import React, { Component } from 'react';

class App extends Component {
  state = {
    maxNo: 3,
    selectedRow: null,
    boards: [
      {
        brdno: 1,
        brdwriter: 'Lee SunSin',
        brdtitle: 'If you intend to live then you die',
        brddate: new Date()
      },
      {
        brdno: 2,
        brdwriter: 'So SiNo',
        brdtitle: 'Founder for two countries',
        brddate: new Date()
      }
    ]
  };
  handleSaveData = (data) => {
    if ( data.brdno !== null ) {
      this.setState({
        maxNo: this.state.maxNo+1,
        selectedRow: null,
        boards: this.state.boards.concat({
          brdno: this.state.maxNo,
          brddate: new Date(),
          ...data
        })
      });
    } else {
      this.setState({
        maxNo: this.state.maxNo+1,
        selectedRow: null,
        boards: this.state.boards.concat({
          brdno: this.state.maxNo,
          brddate: new Date(),
          ...data
        })
      });
    }    
  };
  handleRemove = (brdno) => {
    this.setState({
      boards: this.state.boards.filter(row => row.brdno !== brdno)
    });
  };
  handleSelectRow = (row) => {
    this.setState({
      selectedRow: row
    });
  };

  render() {
    const { boards, selectedRow } = this.state;

    return (
      <div>
        <BoardForm onSaveData={this.handleSaveData} selectedRow={selectedRow}/>
        <table border="1">
        <tr align="center">
          <td width="50">No.</td>
          <td width="300">Title</td>
          <td width="100">Name</td>
          <td width="100">Date</td>
          <td>X</td>
        </tr>
        {
          boards.map(row => 
            (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} />)
          )
        }
        </table>
      </div>
    );
  }
}

class BoardForm extends Component {
  state = {
    error: '',
    brdno: this.props.selectedRow.brdno,
    brdtitle: this.props.selectedRow.brdtitle,
    brdwriter: this.props.selectedRow.brdwriter
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if ( this.state.brdtitle === '' ) {
      this.setState({
        error: 'title is empty!'
      });
      return;
    }
    if ( this.state.brdwriter === '' ) {
      this.setState({
        error: 'name is empty!'
      });
      return;
    }
    this.props.onSaveData(this.state);
    this.setState({
      error: '',
      brdtitle: '',
      brdwriter: ''
    });
  }

  render() {
    const { error, brdtitle, brdwriter } = this.state;
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="title" name="brdtitle" value={brdtitle} onChange={this.handleChange} />
        <input placeholder="name" name="brdwriter" value={brdwriter} onChange={this.handleChange} />
        <button type="submit">발사</button>
        { error && <span style={{color: 'red', marginLeft: '10px'}}>{error}</span> }
      </form>
    );
  }
}

class BoardItem extends Component {

  handleRemove = () => {
    const { row, onRemove } = this.props;
    onRemove(row.brdno);
  }
  render() {
    return (
      <tr>
        <td>{this.props.row.brdno}</td>
        <td>{this.props.row.brdtitle}</td>
        <td>{this.props.row.brdwriter}</td>
        <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
        <td><button onClick={this.handleRemove}>X</button></td>
      </tr>
    );
  }
}

export default App;