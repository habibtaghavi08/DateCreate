import React from "react";
import "./css/about.css"
import { Col, Row, Container } from "../components/Grid"


function About() {
    return (
        <div className="main">
        <main>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div className="about-us">
                            <h1>DateCreate</h1>

 
<p>If you’ve ever tried to plan a romantic night out with your special someone, or that perfect first date, or even a casual night out with friends,
   you know how hard it can be to choose a great restaurant or to agree on the perfect weekend activity. Introducing Date Create, 
   an all-in-one automated date generator.</p>
 
  
 <p>The Date Create app allows the user to pick from 8 different categories, in order to generate a random date idea. These choices include a restaurant, 
   with specific food ethnicity choices and genres, along with an activity suggestion. Date Create allows the user to filter out, the specific likes
   and dislikes of the User, so that every experience using the Date Create app, is legitimately a tailor made experience, like none other! 
   The user will be presented with the restaurant and activity details, down to the directions on how to get to the chosen date destinations. If users do 
   not like the generated date, at that time, they can use the shuffle button, to generate a brand new experience of their liking. Use the app to plan a date 
   in advance, or plan on the go with the mobile responsive phone app. Not only gone are the days of negotiating where to eat and what to do, but also, gone 
   are the days of NOT KNOWING where to eat and what to do!</p> 


<p>Date Create! Where Every Date Is An Adventure!</p>

</div>
                       
                            </Col>
                       </Row>
                 </Container>
              </main> 
          </div>
                  
          <div class name = "about-us-2">
 
        
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div className="about-us">
                            <h1>TEAM OVER-REACTORS</h1>

                             <h3><a>CELESTE LEWIS - SOFTWARE ENGINEER</a></h3>
                             <h3><a>MIKE LUSSO -  SOFTWARE ENGINEER</a></h3>
                             <h3><a>DANNIELLE TAYLOR - SOFTWARE ENGINEER</a></h3>
                             <h3><a>TRAVIS BUNN - SOFTWARE ENGINEER</a></h3>
                             <h3><a>SEYED HABIB TAGHAVI - SOFTWARE ENGINEER</a></h3>

                             <h3><a>SEYED HABIB TAGHAVI - REPO OWNER / PROJECT MANGER / TEAM LEAD</a></h3>
                             <h3><a>DANNIELLE TAYLOR - TEAM LEAD</a></h3>
                             <h3><a>MIKE LUSSO - TEAM LEAD</a></h3>
                             
                                </div>
                            </Col>
                      </Row>
                 </Container>
               
          
              
     </div>
                   
                              






   
       
    );
}

export default About;