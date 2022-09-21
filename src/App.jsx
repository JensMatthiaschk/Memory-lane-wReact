import { useState } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import InputForm from './InputForm'
import Gallery from './Gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <InputForm />
      <Gallery />
    </div>
  )
}

export default App
