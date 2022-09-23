import React from 'react'
import { useState } from 'react';

export default function Gallery(props) {
    const memList = props.memories;
    console.log('from memList', props.memories)
    const [readM, setReadM] = useState(false);
    const [index, setIndex] = useState(0)
    function handleReadMore(i) {
        //  console.log(i)
        setReadM(!readM);


    }
    console.log(readM)
    if (!readM) {
        return (
            <>
                {memList.map((mem, i) => (
                    <div className="col-12 col-sm-6 col-md-4 g-3" key={i}>
                        {console.log(i)}

                        <div className="card border-secondary mb-sm-3 mb-lg-5">
                            <img src={mem.imageURL} alt="Gallery-img-from-db" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{mem.title}</h5>
                                <p className="card-text">{mem.memory}</p>
                                <button onClick={handleReadMore} className="btn btn-outline-dark">Read more</button>
                            </div>
                            <div className="card-footer bg-dark border-secondary">
                                <small className="text-muted">by {mem.name},<br /> happend {mem.time}{mem.timePeriod} at {mem.location}</small>
                            </div>
                        </div>
                    </div>



                ))}

            </>
        )
    }
    else {
        return (
            <>
                <p>antoherThing</p>

                <div className="col-12 col-sm-6 col-md-4 g-3"></div>
                <div className="card border-secondary mb-sm-3 mb-lg-5">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.rliCHkimK_S9BcNqiK4eDwHaF4" alt="Gallery-img-from-db" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{memList[1].name}</h5>
                        <p className="card-text">smth</p>
                        <button onClick={handleReadMore} className="btn btn-outline-dark">go back to memorylane</button>
                    </div>
                    <div className="card-footer bg-dark border-secondary">
                        <small className="text-muted">by <br /> somewhere at </small>
                    </div>
                </div>

            </>
        )
    }
}

