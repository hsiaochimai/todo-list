import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  constructor() {
    super();
    this.state = { selectedUserTodos: [] };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.selectedUserId !== nextProps.selectedUserId) {
      fetch(
        `https://jsonplaceholder.typicode.com/todos?userId=${nextProps.selectedUserId}`
      )
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
          this.setState({ selectedUserTodos: resJson });
        });
    }
  }
onCompleteItem(objId){
    
const selectedUserTodosCopy=[...this.state.selectedUserTodos]
const completedTodo=selectedUserTodosCopy.map(todo=>{
    if(todo.id===objId){
        todo.completed=true
    }
    return todo
})
this.setState({selectedUserTodos:completedTodo})


}
onDeleteItem(objId){
    console.log(`hello deleted item ${objId}` )
    const selectedUserTodosCopyTwo=[...this.state.selectedUserTodos]
    const updateTodos=selectedUserTodosCopyTwo.filter(todo=>todo.id!==objId)
    this.setState({selectedUserTodos:updateTodos})
}
  render() {
    const selectedUserTodosCopy = [...this.state.selectedUserTodos] ;
    const unCompletedItems = selectedUserTodosCopy
      .filter(todo => todo.completed !== true)
      .map(t => {
        return <TodoItem onDeleteItem={()=>this.onDeleteItem(t.id)} onCompleteItem={()=>this.onCompleteItem(t.id)}  title={t.title} />;
      });

    const completedItems = selectedUserTodosCopy
      .filter(todo => todo.completed === true)
      .map(t => {
        return <TodoItem onDeleteItem={()=>this.onDeleteItem(t.id)} title={t.title} />;
      });
    return (
      <div className="todo-container">
        <div>{unCompletedItems}</div>
        <div>
          {this.state.selectedUserTodos.length > 1 ? <h2>Completed</h2> : null}
          {completedItems}
        </div>
      </div>
    );
  }
}
