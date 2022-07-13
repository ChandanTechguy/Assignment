import React, { useState } from 'react'
import Products from '../products.json'

export const Filter1= ()=> {
    const filtered = Products.map(Products=>Products.title)
    const [filteredProducts, setfilteredProducts] = useState(filtered)
    const filteredFunction = (e) =>{
        setfilteredProducts(filtered.filter((a)=> a.startsWith(e.target.value)));
    }
  return (
    <div>
    <input type="text" onKeyUp={filteredFunction} />
    {filteredProducts?.map((a)=>(
        <p>{a}</p>
    ))}
    <button onClick={(e)=>console.log(filtered)}>Submit</button>
    </div>
  )
}
export const Filter2= ()=> {
    const filtered = Products.map(Products=>Products.category)
    const [filteredProducts, setfilteredProducts] = useState(filtered)
    const filteredFunction = (e) =>{
        setfilteredProducts(filtered.filter((a)=> a.startsWith(e.target.value)));
    }
  return (
    <div>
    <input type="text" onKeyUp={filteredFunction} />
    {filteredProducts?.map((a)=>(
        <p>{a}</p>
    ))}

    </div>
  )
}