/**
 * 
 * stampare in una card le temperature e le previsioni dentro consolidated wather di meteo.js
 * in base al campo che ho stampo un'immagine
 * icon1: https://www.metaweather.com/static/img/weather/c.svg
 * icon2: https://www.metaweather.com/static/img/weather/sn.svg
 */
 import React, { Component } from "react";
 import { Card, Container, Row, Col } from "react-bootstrap";
 import myMeteo from "./meteo";
 
 export default class Meteo extends Component {
   /*
    constructor() {
     super();
   }
 */
   render() {
     console.log(myMeteo);
     return (
       <Container>
         <Row>
           <Col>
             {myMeteo.consolidated_weather.map((el) => {
               return (
                 <Card className="mt-2 text-center" key={el.id}>
                   {/* <Card.Img variant="top" src={`/static/img/weather/png/64/${"c"}.png`} /> */}
                   <Card.Img
                     variant="top"
                     src={`https://www.metaweather.com/static/img/weather/${el.weather_state_abbr}.svg`}
                   />
 
                   <Card.Body>
                     <Card.Title>{el.weather_state_name}</Card.Title>
                     <Card.Text></Card.Text>
                   </Card.Body>
                 </Card>
               );
             })}
           </Col>
         </Row>
       </Container>
     );
   }
 }

 