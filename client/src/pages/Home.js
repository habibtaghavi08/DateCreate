import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Player from "../components/Player/Player";
import "./css/home.css"

function Home() {
    return (
        <div className="main">
            <main>
                <Container fluid>
                    <Row>
                        <Col size="md-5">
                            <div className="app-pitch">
                                <h1>DateCreate: </h1>
                                <h2>Generating Unique Dates one click at a time!</h2>
                                <p>If you've ever tried to plan a romantic night out with your
                                special someone, or even a casual night out with friends, you
                                know how hard it can be to choose a great restaurant or to agree
                                on the perfect weekend activity.
                                </p>
                                <h2>DateCreate is your all-in-one automated date generator</h2>
                                <p>Using carefully curated criteria, you can use DateCreate to DateCreate
                                endless combinations of date ideas. Choosing your date time-frame, activity
                                preference, restaurant type and more you can surprise your special someone
                                with a date crafted just for them without spending hours researching across
                                multiple websites.
                                </p>
                                <h2>With DateCreate every date can be an adventure!</h2>
                                <br></br>
                            </div>
                        </Col>
                        <Col size="md-7">
                            <div className="into-video">
                                <Player />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>

        </div>

    );
}

export default Home;