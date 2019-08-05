import React from 'react'
import './components/card/card.styles.css'
import './components/card-list/card-list.css'
import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      hoomans: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ hoomans: users }))
  }

  render() {
    return (
      <div className="App">
        <div className="card-list">
          {this.state.hoomans.map(hooman => (
            <div key={hooman.id} className="card-container">
              <img
                alt="hooman"
                src={`https://robohash.org/${hooman.id}?set=set2&size=180x180`}
              />
              <h2>{hooman.name}</h2>
              <p>{hooman.email}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App
