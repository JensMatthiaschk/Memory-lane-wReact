import { useState } from "react";
import Gallery from "./Gallery";





export default function InputForm(props) {
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [location, setLocation] = useState("");
    const [memory, setMemory] = useState("");
    const [memList, setMemList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const memoryEntry = { title, name, time, location, memory }
        props.onSubmit([...memList, memoryEntry])



        //Store in array and reset form

        setMemList(memList => [...memList, memoryEntry])



        /*  setTitle("")
         setName("")
         setTime("")
         setLocation("")
         setMemory("") */
    }

    return (
        <div className="container">
            <h2>Add your Memory</h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group mb-4">
                        <label>Memory Title:</label>
                        <input className="form-control"
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <div className="form-group mb-4">
                            <label>Your Name:</label>
                            <input className="form-control"
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group mb-4">
                            <label>When did it happen?</label>
                            <input className="form-control"
                                type="date"
                                required
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group mb-4">
                        <label>Where did it happen?</label>
                        <input className="form-control"
                            type="text"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>Describe your memory</label>
                        <textarea className="form-control"
                            required
                            value={memory}
                            onChange={(e) => setMemory(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="form-group mb-4">
                        <label>Upload an Image:</label>
                        <input className="form-control" type="file" />
                    </div>
                    <div >
                        <button type="submit" className="btn btn-dark">Submit Memory</button>
                    </div>
                    <p>{title}</p>
                    <p>{name}</p>
                    <p>{time}</p>
                    <p>{location}</p>
                    <p>{memory}</p>

                </div>
            </form>
        </div>
    )
}