import React , { Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBar } from './components/search-bar/search-bar.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters :  [],
      searchField : '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( user => this.setState( { monsters : user}))
    .catch( (e) => console.log("api not working...."));
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBar placeholder="search monsters" handleChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
