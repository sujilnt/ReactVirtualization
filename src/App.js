import React, { Component } from 'react';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
            headerName = "Learning React Visulations"
        />
      </div>
    );
  }
}

export default App;
