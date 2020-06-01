import React from 'react'


function Completed(props) {
    return (

        <div className="card" key={props.id}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="card-title">{props.dateName}</h1>
                        <h3 className="card-subtitle mb-2 text-muted">{props.dateRestaurant}</h3>
                        <h3 className="card-subtitle mb-2 text-muted">{props.dateEvent}</h3>
                        <h3 className="card-subtitle mb-2 text-muted">{props.dateLocation}</h3>
                    </div>
                    <div className="col-md-3">
                        <h3> Score {props.dateRating}</h3>
                    </div>
                <div className="col-auto - variable width content-wrap">
                {/* <a href={props.link} className="card-text">Your review</a> */}
                    <p className="card-text">{props.dateReview}</p>
                </div>
                </div>
                {/* <hr /> */}
                <br />
                <button className="card-link" onClick={() => props.removeDate(props)}>Delete</button>
            </div>
        </div>
        
    )
}

export default Completed;