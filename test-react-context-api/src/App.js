import React, { Component } from 'react';
import TestContextApp from './component/TestContextApi/TestContextApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        { true && <TestContextApp />}
      </div>
    );
  }
}

export default App;
