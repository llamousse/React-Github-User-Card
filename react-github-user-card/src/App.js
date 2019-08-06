import React from 'react';
// import ReactDOM from 'react-dom';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ''
    };
  }

  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

export default App;
