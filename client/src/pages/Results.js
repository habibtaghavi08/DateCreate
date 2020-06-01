import React from "react";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import {Col, Row, Container} from "../components/Grid";
import {SaveCompletedBtn, SavePlannedDateBtn, ShuffleBtn} from "../components/Form";
import useBusinessSearch from "../utils/hooks/yelp-api/useBusinessSearch";
import BusinessSearchResults from "../components/SearchResults/BusinessSearchResults"
import "./css/results.css"
import useActivitySearch from "../utils/hooks/yelp-api/useActivitySearch";
import ActivitySearchResults from "../components/ActivitySearchResults/ActivitySearchResults";

//import Form from 'react-bootstrap/Form';




export default function Search() {
    const dateTime = new Date().getTime();
    const timestamp = Math.floor(dateTime / 1000);
    console.log(timestamp)
    const categories = ("festivals-fairs, music")
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(2, "Mexican", 40000, "nashville,tn")
    const [events, amounteventsResults, searcheventsParams, seteventsSearchParams] = useActivitySearch(categories, 40000, "nashville,tn", 50, timestamp)


    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <Container fluid className="results-container">
            <Row>
                <Col size="md-10">
                    <Jumbotron>
                        <p className="jumboTxt"> Your Selected Date Details </p>
                    </Jumbotron>
                </Col>
                <Col size="md-2 sm-12">
                    <Jumbotron>
                        <h4 className="manTxt">Management of your Dates</h4>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>

                <Col size="md-5">
                    <div className="resturaunt-container">
                        <h1>Resturaunt Selection:</h1>
                        <BusinessSearchResults businesses={businesses} />
                    </div>
                </Col>
                <Col size="md-5">
                    <div className="activity-container" >
                        <h1>Activity Selection: </h1>
                        <ActivitySearchResults events={events} />
                    </div>
                </Col>
                <Col size="md-2">
                    <a className="btn btn-info btn btn-info btn-block btn-lg" href="/planned" role="button">Favorite Dates</a>
                    <a className="btn btn-info btn btn-info btn-block btn-lg" href="/completed" role="button">Completed Dates</a>
                </Col>
            </Row>
            <Row>
                <Col size="sm-8">
                    <div className="dbinterface">
                        <SavePlannedDateBtn>
                            Save To My Favorites!
                            </SavePlannedDateBtn>
                        <SaveCompletedBtn>
                            I'm Going on This Date!
                            </SaveCompletedBtn>
                        <ShuffleBtn onClick={refreshPage}>
                            Show Me A Different Date
                        </ShuffleBtn>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}




