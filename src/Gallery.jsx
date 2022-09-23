import React from 'react'

export default function Gallery(props) {
    const memList = props.memories;
    console.log('from memList', props.memories)
    return (
        <>
            {memList.map((mem) => (
                <div className="col-12 col-sm-6 col-md-4 g-3">
                    <div className="card border-secondary mb-sm-3 mb-lg-5">
                        <img src={mem.imageURL} alt="Gallery-img-from-db" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{mem.title}</h5>
                            <p className="card-text">{mem.memory}</p>
                            <button className="btn btn-outline-dark">Read more</button>
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

// export default Gallery;