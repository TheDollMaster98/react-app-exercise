/**
 creare un componente che stampi i primi 10 elementi del vettore esempioDiLista
 */

import React from "react"
import {Col} from "react-bootstrap"
import esempioDiLista from "./esempioDiLista"
import MyCardEsDiLista from "./MyCardEsDiLista"

export default class MyEsempioDiLista extends React.Component {
    constructor() {
        super()
        this.state = {
            lista: esempioDiLista
        }
    }
    render() {
        return (
            <div className="d-flex justify-content-center">
                {
                    this.state.lista.splice(0, 10).map(item =>
                        <Col key={item.id}>
                            <MyCardEsDiLista 
                            userId = {item.userId}
                            id = {item.id}
                            title = {item.title}
                            body = {item.body}  
                             />
                        </Col>
                    )
                }    
            </div>
        )
    }
}
/* v2
import React from "react";
import { Card } from "react-bootstrap";
import '../scss/MapExample.scss'
import esempioDiLista from "../files/secondList";

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: esempioDiLista,
        }
    }

    render() {
        return (
            <div id="MapExample">
                <Card
                    border="dark"
                >
                    <Card.Header className="fw-bolder fs-4"> Lorem </Card.Header>
                    <Card.Body>
                        <div className="d-flex justify-content-center">
                            <ul className="text-start">

                                {this.state.lista.slice(0, 10).map((element) => (
                                    <li key={element.id} className="mb-4">
                                        {
                                            Object.entries(element).map((item, i) => {
                                                return (

                                                    <div key={i}>
                                                        <span className="fw-bold">{item[0]}</span>
                                                        : {item[1]}
                                                    </div>
                                            )})
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Card.Body>
                </Card>

            </div>

        );
    }
}
*/