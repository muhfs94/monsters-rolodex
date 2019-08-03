import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters : []
    };
  }

  componentDidMount(){
    fetch('https://jsconplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState( { monsters: users}));
  }

  render(){
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
      </div>
    );
  }
}

export default App;
