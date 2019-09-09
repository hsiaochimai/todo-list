import React, { Component } from "react";
import ToDoList from "./TodoList";
import User from './User'
class UserList extends Component {
  constructor() {
    super();
    this.state = {
      selectedUserId: null
    };
  }
  onSelectedUser(id) {
      console.log(`hello userid`, id)
      this.setState({selectedUserId:id})
  }
  render() {
    console.log(`hello user List props`, this.props);
    const user = this.props.users.map((u, index) => {
     return (
     <User
     id={u.id}
     index={index}
     name={u.name}
     onSelectedUser={(id)=>this.onSelectedUser(id)}
     />)
    });
   const {selectedUserId}= this.state
    return (
      <div className='container'>
        <div className="user-list">{user}</div>
        <ToDoList selectedUserId={selectedUserId}/>
      </div>
    );
  }
}
export default UserList;
