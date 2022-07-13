import './App.css';
//import React from 'react'
import Users from './users.json'
import {User} from './Components/User'
import {Product} from './Components/Product'
import {Filter1, Filter2} from './Components/Filter'

function App() {
  return (
    <div className="App">
      {
         Users.map(users => {
          return (
            <div key="id">
              <li>{users.username}</li>
            </div>
          )
        })
      }
      <div><User/></div>
      <div><Product/></div>
      <div><Filter1/></div>
      <div><Filter2/></div>
    </div>
  );
}

export default App;
