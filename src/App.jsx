import { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import InputForm from './InputForm'
import Gallery from './Gallery'
import Navbar from './Navbar'
const Local_Storage_Key = "react_Memory_lane";

function App() {
  const [memories, setMemories] = useState([
    { title: "Lorem ipsum dolor1", name: "Maria Mora", time: "1946-09-03", timePeriod: "", location: "Mexico", memory: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta praesentium doloribus porro, reiciendis deserunt veniam ab dicta consequatur", imageURL: "https://tse3.mm.bing.net/th?id=OIP.rliCHkimK_S9BcNqiK4eDwHaF4" },
    { title: "Lorem ipsum dolor2", name: "Pasqual Lunère", time: "1973-06-14", timePeriod: "", location: "Paris", memory: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta praesentium doloribus porro, reiciendis deserunt veniam ab dicta consequatur", imageURL: "https://footageforpro.com/wp-content/uploads/2019/08/1284Paris1973b.jpg" },
    { title: "Lorem ipsum dolor3", name: "Günther Riedel", time: "1952-04-22", timePeriod: "", location: "Berlin", memory: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta praesentium doloribus porro, reiciendis deserunt veniam ab dicta consequatur", imageURL: "http://www.dezimmer.net/Webalbum%20Berlin1952/slides/Berlin%201952%2020.JPG" }
  ])

  useEffect(() => {
    const storedMemories = JSON.parse(localStorage.getItem(Local_Storage_Key));
    { setMemories(storedMemories) }
  }
    , [])

  useEffect(() => {
    if (memories.length > 3) localStorage.setItem(Local_Storage_Key, JSON.stringify(memories));

  }, [memories])
  console.log(Local_Storage_Key)

  const getData = (newMemoryStateFromForm) => {
    setMemories(memories => [...memories, ...newMemoryStateFromForm])
  };

  const [active, setActive] = useState(false)
  console.log(active)

  return (
    <>
      <div className="App">
        <div className="container">
          <Navbar />
        </div>
        <div className="container text-center m-3">
          <button onClick={() => setActive(!active)} className="btn btn-light">{active ? "➖" : <strong>➕ Add your Memory</strong>}</button>
        </div>
        {active ? <InputForm
          onSubmit={getData} /> : ""}
        <div className="container">
          <div className="row">
            <Gallery memories={memories} />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
