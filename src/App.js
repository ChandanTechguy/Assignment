import './App.css';
import React,{useState} from'react'
import Child from './component/Child';
import CurrDate from './component/CurrDate';
import List from './component/List'

function App() {
  const [message] = useState("Welcome to Techmojo!")
return(
  <div className="App">

    <Child state="DEFAULT"></Child>
    <Child state="BAR"></Child>
    <Child state="FOO"></Child>
  
  <h3>The current date is</h3>
  <CurrDate date={Date()} />

  <p>{message}</p>

  <h1>To Do Lists</h1>
  <h2>Today</h2>
  <List tasks={["Walk " ,"Cook ", "Bake "]}/>
  <h2>Tomorrow</h2>
  <List tasks={["Study " ,"Code ", "Eat "]}/>

  </div>
)
}

export default App;


