import React from 'react';
import "./activityresult.css";

export default function ActivityResults(props) {
    console.log(props.activities)
    const a = props.activity;
    if (!a) {
        return (<div />);
    }


    return (
        <div className="activity-details">
            <h3 className="act-name">Activity Name: {a.name}</h3>
            <h3 className="act-rating">Rating: {a.rating}</h3>
            <h3 className="act-location">Location: {a.location.addres1} {a.location.city}, {a.location.state} {a.location.zip_code} </h3>
            <h3 className="act-phone">Phone: {a.phone.display_phone} </h3>
            <h3 className="act-distance">Mile(s) Away: {Math.round(a.distance * 0.00062137)} </h3>
            <img src={a.image_url} alt='' className="activity-image" /><br />
            <a href={a.url}>Click for more info</a>
            <h4 className="rest-reviews"></h4>
        </div>

    )
}