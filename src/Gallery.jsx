import React from 'react'
import { useState } from 'react';

export default function Gallery(props) {
    const memList = props.memories;
    console.log('from memList', props.memories)
    const [readM, setReadM] = useState(false);
    const [index, setIndex] = useState(Number)
    function handleReadMore(i) {
        console.log(i)
        { console.log(memList[i]) }
        setIndex(i)
        // console.log("Index", index)
        setReadM(!readM);


    }
    console.log(readM)
    if (!readM) {
        return (
            <>
                {memList.map((mem, i) => (
                    <div className="col-12 col-sm-6 col-md-4 g-3" key={i}>


                        <div className="card border-secondary mb-sm-3 mb-lg-5">
                            <img src={mem.imageURL} alt="Gallery-img-from-db" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{mem.title}</h5>
                                <p className="card-text">{mem.memory}</p>
                                <button onClick={() => handleReadMore(i)} className="btn btn-outline-dark">Read more</button>
                            </div>
                            <div className="card-footer bg-dark border-secondary">
                                <small className="text-muted">by {mem.name},<br /> happend {mem.time}{mem.timePeriod} in {mem.location}</small>
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
                {console.log("Index", index)}
                {console.log("Here we go", memList[index].name)}
                <div className="col-12 col-sm-6 col-md-4 g-3"></div>
                <div className="card border-secondary mb-sm-3 mb-lg-5">
                    <img src={memList[index].imageURL} alt="Gallery-img-from-db" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{memList[index].title}</h5>
                        <p className="card-text">{memList[index].memory}</p>
                        <button onClick={handleReadMore} className="btn btn-outline-dark">go back to memorylane</button>
                    </div>
                    <div className="card-footer bg-dark border-secondary">
                        <small className="text-muted">by {memList[index].name},<br /> happend {memList[index].time}{memList[index].timePeriod} in {memList[index].location}</small>
                    </div>
                </div>

            </>
        )
    }
}

