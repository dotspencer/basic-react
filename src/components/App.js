import React from 'react';
import style from './app.scss';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>makes and fixes things</p>
      </div>
    );
  }
}

export default App;
