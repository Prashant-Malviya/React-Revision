import { useState } from 'react'
import './Components/Item'
import './App.css'
import Item from './Components/Item'
import ItemDate from './Components/ItemDate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Item name = "DantKanti"/>
      <ItemDate date = "20 july 2020"/>
      <Item name = "Colgate"/>
      <ItemDate date = "29 august 2035"/>
      <Item name = "Oralbe"/>
      <ItemDate date = "11 march 2022"/>
    </div>
  )
}

export default App
