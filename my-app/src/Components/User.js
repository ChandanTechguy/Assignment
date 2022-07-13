import React, { useState } from 'react'
import Users from "../users.json"
export const User = ()=> {
    const [data, setdata] = useState(Users)
    const [order, setorder] = useState("ASC")
    const sorting =(col)=>{
        if(order === "ASC"){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("DSC")
        }
        if(order === "DSC"){
            const sorted = [...data].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            )
            setdata(sorted);
            setorder("ASC")
        }
    }
  return (
    <div className="container">
      <table>
        <tr>
            <th>Serial No</th>
            <th onClick={()=>sorting("firstname")}>Name</th>
            <th onClick={()=>sorting("email")}>Email</th>
            <th>Address</th>
        </tr>
        <tr>
        <td></td>
            <td>{ Users.map( users =>{
          return(
            <div key="id">
          
            {users.name.firstname} {" "} 
            {users.name.lastname}
            
            </div>
          )
        })}</td>
            <td>{Users.map(users=>{
                return(
                    <div key="id">
          
                    {users.email}
                    
                    </div>
                )
            })}</td>
            <td>{Users.map(users=>{
                return(
                    <div key="id">
          
                    {users.address.number},
                    {users.address.city}
                    </div>
                )
            })}</td>
        </tr>
      </table>
    </div>
  )
}