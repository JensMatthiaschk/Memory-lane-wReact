import { useState } from 'react'

import { Container, Row, Col, Card } from "react-bootstrap";
import InputForm from './InputForm'
import Gallery from './Gallery'


function App() {
  const [memories, setMemories] = useState(null)
  const getData = (newMemoryStateFromForm) => {
    console.log("App.js talking:", (newMemoryStateFromForm));
    setMemories(newMemoryStateFromForm)
    console.log("MEM", memories)
  };



  return (
    <>



      <div className="App">
        <InputForm onSubmit={getData} />
        <div className="container">
          <div className="row">

          </div>
        </div>
      </div>
    </>
  )
}
export default App
