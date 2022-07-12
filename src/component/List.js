import React from 'react';

export const  List=(props)=> {
  return (
    <div>
      <p>{props.tasks.join(",")}</p>
    </div>
  )
}
export default List
