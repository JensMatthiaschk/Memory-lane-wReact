import React from 'react'

export default function Gallery(props){
    const memList = props.memories;
    console.log('from memList', props.memories)

    return (
<>
            {memList.map((mem) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 g-3">
                <div className="card">
                    <img src={mem.imageURL} alt="Gallery-img-from-db" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{mem.title}</h5>
                        <p>by{mem.name}from</p>
                        <p>happend at {mem.location}</p>
                        <p className="card-text">{mem.memory}</p>
                    </div>
                </div>
            </div>
            ))}
</>
)
}

// export default Gallery;