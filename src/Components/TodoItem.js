import React, {Component} from 'react'

export default class TodoItem extends Component{
render(){
    return(
        <div>
            <h2>{this.props.title}</h2>
        <button>delete</button>
        <button>done</button>
        </div>
    )
}
}