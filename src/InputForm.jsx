import { useState } from "react";
import Gallery from "./Gallery";


export default function InputForm(props) {
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [timePeriod, setTimePeriod] = useState("");
    const [location, setLocation] = useState("");
    const [memory, setMemory] = useState("");
    const [imageURL, setImageUrl] = useState("");
    const [memList, setMemList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const memoryEntry = { title, name, time, timePeriod, location, memory, imageURL }
        props.onSubmit([...memList, memoryEntry])

        setTitle("")
        setName("")
        setTime("")
        setTimePeriod("")
        setLocation("")
        setMemory("")
        setImageUrl("")
    }

    return (
        <div className="container">
            <h4>Add your Memory</h4>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group mb-4">
                        <label>Memory Title:*</label>
                        <input className="form-control"
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <div className="form-group mb-4">
                            <label>Your Name:*</label>
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
                            <input className="form-control mb-2"
                                type="date"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                            <input className="form-control"
                                type="text"
                                value={timePeriod}
                                onChange={(e) => setTimePeriod(e.target.value)}
                                placeholder="...or a time period"
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
                            placeholder="happend at..."
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label>Describe your memory*</label>
                        <textarea className="form-control h-100"
                            required
                            value={memory}
                            onChange={(e) => setMemory(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="col">
                        <div className="form-group mb-4">
                            <label>Upload an Image-Url:*</label>
                            <input className="form-control"
                                type="text"
                                required
                                value={imageURL}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="e.g. https://image.com/image.jpg"
                            />
                        </div>
                    </div>
                    <div >
                        <button type="submit" className="btn btn-dark">Submit Memory</button>
                    </div>
                </div>
            </form>
        </div>
    )
}