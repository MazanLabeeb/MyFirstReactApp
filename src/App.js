import './App.css';
import { Component } from 'react';
import React from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      username: 'Mazan Labeeb',
      searchQuery: ''
    }
  }

  componentDidMount() { 
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(res => {
        this.setState(() => {
          return {
            users: res
          }
        })
      })
  }

  onSearchChange = event => {
    const searchQuery = event.target.value.trim();
    this.setState(
      () => {
        return {
          searchQuery
        }
      }
    )
  }

  render() {
    const { users, searchQuery, username } = this.state;
    const { onSearchChange } = this;

    let filteredUsers = users.filter(val => val.name.toLowerCase().includes(searchQuery.toLowerCase()))
    return (
      <div className="mazan">
        <SearchBox username={username} className = {"search-box"} onSearchHandler = {onSearchChange} placeholder = {"Search..."}/>
        <CardList  filteredUsers={filteredUsers} />

      </div>
    );
  }
}


export default App;
