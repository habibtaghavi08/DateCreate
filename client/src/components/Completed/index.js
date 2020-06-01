import React from 'react'


function Completed(props) {
    return (

        <div className="card" key={props.id}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-9">
                        <h1 className="card-title">{props.dateName}WaterPark</h1>
                        <h3 className="card-subtitle mb-2 text-muted">3316 Nashboro Pk, henderson, Tn{props.dateEventLocation}</h3>
                    </div>
                    <div className="col-md-3">
               <h4> Score = 4</h4>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="card-text">{props.dateReview}</p>
                </div>
                <a href={props.link} className="card-text">Your review</a>
                <br />
                <button className="card-link" onClick={() => props.deleteDate(props)}>Delete</button>
            </div>
        </div>
        
    )
}

export default Completed;