import { useState } from 'react'
import Pagination from './utility/Pagination'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pagination/>
    </>
  )
}

export default App
