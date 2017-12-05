import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {length: 0};

    this.lengthChangedHandler = this.lengthChangedHandler.bind(this);
  }


  lengthChangedHandler(event) {
    let charCount = event.target.value.length;
    this.setState({length: charCount})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={this.lengthChangedHandler}/>
        </header>
        <p>Characters used: {this.state.length}</p>
      </div>
    );
  }
}

export default App;
