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
          this.setState({ selectedUserTodos: resJson }, () => {});
        });
    }
  }

  render() {
    const stateCopy = { ...this.state };
    const unCompletedItems = stateCopy.selectedUserTodos
      .filter(todo => todo.completed !== true)
      .map(t => {
        return <TodoItem title={t.title} />;
      });

    const completedItems = stateCopy.selectedUserTodos
      .filter(todo => todo.completed === true)
      .map(t => {
        return <TodoItem title={t.title} />;
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
