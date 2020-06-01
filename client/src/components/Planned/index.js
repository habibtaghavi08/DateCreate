import React from 'react'


function Planned(props) {
    return (

        <div className="card" key={props.id}>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="card-title">{props.dateName}</h1>
                        <h3 className="card-subtitle mb-2 text-muted">  {props.dateLocation}</h3>
                    </div>
                    <div className="col-md-3">
                    <h3 className="card-subtitle mb-2 text-muted">  Score of {props.dateRating}</h3>
                    </div>
                <div className="col-auto - variable width content-wrap">
                    <p className="card-text">{props.dateReview}</p>
                </div>
                </div>
                <hr />
                {/* <a href={props.link} className="card-text">12 miles from 37135</a> */}
                <br />
                <button className="card-link" onClick={() => props.removeDate(props)}>Delete</button>
            </div>
        </div>
        
    )
}

export default Planned;