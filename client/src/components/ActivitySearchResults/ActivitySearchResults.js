import React from 'react';
import ActivityResults from './ActivitySearchResults'


export default function ActivitySearchResults(props) {
    console.log(props.activities)
    if (!props.activities || !props.activities.length) {
        return (<div />)
    }

    let actdata = props.activities
    console.log(actdata)
    let actnum = Math.floor(Math.random() * actdata.length)
    console.log(actnum)
    let randomact = actdata[actnum]
    console.log(randomact)
    let selectedact = [randomact]
    const ActivitySearchResults = selectedact.map(a => <ActivityResults activity={a} />)

    return (
        <div>
            {ActivitySearchResults}
        </div>
    );
}