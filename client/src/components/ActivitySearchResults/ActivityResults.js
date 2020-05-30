import React from 'react';
import "./activityresult.css";

export default function ActivityResults(props) {
    console.log(props.events)
    const a = props.event;
    if (!a) {
        return (<div />);
    }


    return (
        <div className="activity-details">
            <h3 className="act-name">Activity Name: {a.name}</h3>
            <h3 className="act-cost">Cost: {a.cost}</h3>
            <h3 className="act-venue">Venue Name: {a.business_id}</h3>
            <h3 className="act-location">Location: {a.location.addres1} {a.location.city}, {a.location.state} {a.location.zip_code} </h3>
            <img src={a.image_url} alt='' className="activity-image" /><br />
            <a href={a.event_site_url}>Click for more info</a>
        </div>

    )
}