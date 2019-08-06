import React from 'react'
import { CardListComponent } from './components/card-list/CardListComponent'
import './App.css'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      hoomans: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ hoomans: users }))
  }

  render() {
    const { hoomans, searchField } = this.state;
    // its the same as :
    // const hoomans = this.state.hoomans;
    // const searchField = this.state.searchField;
    const filteredHoomans = hoomans.filter(hooman =>
      hooman.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
      <input type='search' placeholder='search hooman' onChange={el => this.setState({ searchField: el.target.value })} />
        <CardListComponent humanz={filteredHoomans} />
      </div>
    )
  }
}

export default App
