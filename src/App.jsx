import { useState } from 'react'
import './App.css'
import InputMem from './InputMem'


function App() {
  const [memory, setTodos] = useState(['mem1', 'mem2'])

  return (
    <>

      <h1> going down memory lane</h1>
      <InputMem memory={memory} />


    </>
  )
}

export default App
