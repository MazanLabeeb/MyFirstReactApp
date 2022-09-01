import './App.css';
import { Component, useState } from 'react';
import React from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';


const App = () => {
  const [searchField, setSearchField] = useState("");
  console.log(searchField);

  const onSearchHandler = event => {
    const searchQuery = event.target.value.trim();
    setSearchField(searchQuery);
  }
  return (
    <div className={"header"}>
      <h1>Monsters Rolodex  </h1>
      <input type="search" className={"className"} placeholder={"Search..."} onChange={onSearchHandler} />

    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       users: [],
//       username: 'Mazan Labeeb',
//       searchQuery: ''
//     }
//   }

//   componentDidMount() { 
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(res => {
//         this.setState(() => {
//           return {
//             users: res
//           }
//         })
//       })
//   }

//   onSearchChange = event => {
//     const searchQuery = event.target.value.trim();
//     this.setState(
//       () => {
//         return {
//           searchQuery
//         }
//       }
//     )
//   }

//   render() {
//     const { users, searchQuery, username } = this.state;
//     const { onSearchChange } = this;

//     let filteredUsers = users.filter(val => val.name.toLowerCase().includes(searchQuery.toLowerCase()))
//     return (
//       <div className="mazan">
//         <SearchBox username={username} className = {"search-box"} onSearchHandler = {onSearchChange} placeholder = {"Search..."}/>
//         <CardList  filteredUsers={filteredUsers} />

//       </div>
//     );
//   }
// }


export default App;
