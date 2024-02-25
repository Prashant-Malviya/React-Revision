import './App.css'

function App() {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2024,2,25)
    },
    {
      id: 'p2',
      title: 'Surf Excel',
      amount: 130,
      date: new Date(2023,2,25)
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 160,
      date: new Date(2021,2,26)
    },
    {
      id: 'p4',
      title: 'Safai',
      amount: 120,
      date: new Date(2024,2,20)
    }
  ]

  return (
    <div>
      <Products items = {products} />
    </div>
  )
}

export default App
