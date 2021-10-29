import './App.css';
import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './search-box/search-box.component'

class App extends Component {
constructor(){
  super()
  this.state = {
    monsters: [],
    searchField: ''
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => this.setState({ monsters: users}))
  .catch(err => console.log(err))
}

render(){

  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase()))

  return(
    <div>
      <SearchBox
        placeholder='search monsters'
        handleChange={e => this.setState({ searchField: e.target.value})}
      />
      <CardList monsters={filteredMonsters}>
      </CardList>

    </div>
  )
}
}

export default App


//setState is part of component