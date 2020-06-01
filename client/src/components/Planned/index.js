import React from 'react'


function Planned(props) {
    return (

        <div className="card" key={props.id}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-9">
                        <h1 className="card-title">{props.title}</h1>
                        <h3 className="card-subtitle mb-2 text-muted"> Brunch at Cafe BlueBird {props.author}</h3>
                    </div>
                    <div className="col-md-3">
                        <img src={props.img} alt={props.title} />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="card-text">{props.synopsis}</p>
                </div>
                <a href={props.link} className="card-text">12 miles from 37135</a>
                <br />
                <button className="card-link" onClick={() => props.deleteBook(props)}>Delete</button>
            </div>
        </div>
        
    )
}

export default Planned;