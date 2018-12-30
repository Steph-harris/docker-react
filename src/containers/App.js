import React, { Component } from 'react';
import './App.css';
import Table from '../components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Reload me, bro. One more time.
          </p>
          <p>
            Changing it up in the feature branch
          </p>
        </header>
        <Table></Table>
      </div>
    );
  }
}

export default App;
