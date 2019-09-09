import React, {Component} from 'react'

export default class TodoItem extends Component{
render(){
    return(
        <div>
            <h2>{this.props.title}</h2>
        <button onClick={this.props.onDeleteItem}>delete</button>
        {this.props.onCompleteItem ? <button onClick={this.props.onCompleteItem}>done</button> : null}
        </div>
    )
}
}