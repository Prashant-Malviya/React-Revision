import { useState } from 'react'
import './Components/Item'
import './App.css'
import Item from './Components/Item'
import ItemDate from './Components/ItemDate'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  const response = [
    {
      Date : "20 july 2020",
      Name : "Dantakanti"
    },
    {
      Date : "21 july 2015",
      Name : "Colgate"
    },
    {
      Date : "10 july 2014",
      Name : "Dabar"
    }
  ]

  function clickHandler(){
    console.log("button clicked");
  }

  return (
    <div>
    <Card>
    <Item name = {response[0].Name}>
        This is DantKanti Toothpaste
      </Item>
      <ItemDate date = {response[0].Date}/>
      <Item name = {response[1].Name}/>
      <ItemDate date = {response[1].Date}/>
      <Item name = {response[2].Name}/>
      <ItemDate date = {response[2].Date}/>
      <button onClick={clickHandler}>Add To Cart</button>
    </Card>
     
    </div>
  )
}

export default App
