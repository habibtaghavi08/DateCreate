import React from 'react';
import SearchResult from './SearchResult/SearchResult'





export default function BusinessSearchResults(props) {
    if (!props.businesses || !props.businesses.length) {
        return (<div />);
    }

    let data = props.businesses
    console.log(data)
    let biznum = Math.floor(Math.random() * data.length)
    console.log(biznum)
    let randombiz = data[biznum]
    console.log(randombiz)
    let selectedbiz = [randombiz]
    const BusinessSearchResults = selectedbiz.map(b => <SearchResult business={b} />)


    return (
        <div>
            {BusinessSearchResults}
        </div>
    );
}