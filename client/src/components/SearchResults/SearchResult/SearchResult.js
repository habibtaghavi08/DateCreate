import React from 'react';
import "./searchresult.css"


export default function SearchResult(props) {
    console.log(props.business)
    const b = props.business;
    if (!b) {
        return (<div />);
    }


    return (
        <div className="rest-details">
            <h3 className="rest-name">Restaurant Name: {b.name}</h3>
            <h3 className="rest-budget">Price: {b.price}</h3>
            <h3 className="rest-rating">Rating: {b.rating} </h3>
            <h3 className="rest-location">Location: {b.location.address1} {b.location.city},{b.location.state} {b.location.zip_code} </h3>
            <h3 className="rest-phone">Phone: {b.phone.display_phone} </h3>
            <h3 className="rest-distance">Mile(s) Away: {Math.round(b.distance * 0.00062137)} </h3>
            <img src={b.image_url} alt='' className="business-image" /><br />
            <a href={b.url}>Click for more info</a>
        </div>

    )

}