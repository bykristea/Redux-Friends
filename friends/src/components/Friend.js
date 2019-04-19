import React from 'react'

const Friend = (props) => {
   
  return (
      <div>
    <div>
        <h1>{props.data.name}</h1>
    </div>
    <div>
        <p>Age: {props.data.age}</p>
        <p>Email: {props.data.email}</p>
    </div>
    </div>
  )
}
export default Friend;