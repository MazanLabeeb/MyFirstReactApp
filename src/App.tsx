import './App.css';
import { ChangeEvent, ChangeEventHandler, EventHandler, useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';

export type TUsers = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchQuery, setSearchField] = useState("");
  const [users, setUsers] = useState<TUsers[]>([]);
  const [filteredUsers, setFilteredUsers] = useState(users);


  useEffect(() => {
    
    (async () => {
      const getUsers = await getData<TUsers[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(getUsers);
    })();

  }, [])

  useEffect(() => {
    let newfilteredUsers = users.filter(val => val.name.toLowerCase().includes(searchQuery.toLowerCase()))
    setFilteredUsers(newfilteredUsers);
  }, [users, searchQuery])


  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchQuery = event.target.value.trim();
    setSearchField(searchQuery);
  }



  return (
    <div className={"header"}>
      <SearchBox
        className={"search-box"}
        onSearchHandler={onSearchChange}
        placeholder={"Search..."} />


      <CardList filteredUsers={filteredUsers} />

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
