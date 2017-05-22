import React from 'react';
var ReactDOM = require('react-dom');

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Spencer</h1>
        <p>makes and fixes things</p>
      </div>
    );
  }
}

var app = document.getElementById('app');
ReactDOM.render(<App />, app)
