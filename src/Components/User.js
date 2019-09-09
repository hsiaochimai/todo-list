import React from 'react'

export default function User(props){
    return(
        <div key={props.index} className="user">
          <ul>
            <li onClick={() => props.onSelectedUser(props.id)}>{props.name}</li>
          </ul>
        </div>
    )
}