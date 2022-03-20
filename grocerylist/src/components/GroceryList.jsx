import React from 'react'

export const GroceryList = (props) => {
  return (
    <div>
        <h1>{props.data}</h1>
        {/* {console.log(props.data)} */}
        <button onClick={() =>props.handleDelete(props.id)}>delete</button>
    </div>
  )
}
