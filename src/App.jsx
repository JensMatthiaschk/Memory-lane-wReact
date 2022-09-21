import { useState } from 'react'
import InputMem from './InputMem'

import { Container, Row, Col, Card } from "react-bootstrap";
import InputForm from './InputForm'
import Gallery from './Gallery'

function App() {
  const [memory, setTodos] = useState(['mem1', 'mem2'])

  return (
    <>


      {/* <InputMem memory={memory} />
 */}

      <div className="App">
        <InputForm />
        <Gallery />
      </div>
    </>
  )
}

export default App
