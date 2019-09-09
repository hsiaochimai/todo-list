import React, { Component } from "react";
import "./App.css";
import UserList from './Components/UserList'
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(resJson => {
        this.setState({ users: resJson} );
      });
  }
  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>To Do List</h1>
          <UserList users={users}/>
        </header>
      </div>
    );
  }
}

export default App;
