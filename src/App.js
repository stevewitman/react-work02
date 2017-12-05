import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {inputValue: ''};

    this.lengthChangedHandler = this.lengthChangedHandler.bind(this);
  }


  lengthChangedHandler(event) {
    let inputValue = event.target.value;
    this.setState({inputValue: inputValue})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" onChange={this.lengthChangedHandler}/><ValidationComponent input={this.state.inputValue} />
        </header>
      </div>
    );
  }
}

export default App;
