/**
creare un nuovo componenete classe
inizialmente un numero inizializzato a zero, ogni volta che si premde
numero : 0
<button  ... .... />
onclick
lo stato cambia con un numero casuale compreso tra 1 - 10
*/
import React, { Component } from "react";
import {Card} from "react-bootstrap"
export default class MyRandomNumber extends Component {
    constructor() {
        super()
        this.state = {
            numero: 0,
        }
    }
    onClick = () => {
        this.setState({numero: Math.floor(Math.random() * 10) + 1})
    }
    render() {
        return (
            <>
                <Card style={{ width: "18rem" }}>
                <Card.Header>MyRandomNumber</Card.Header>
                <Card.Body>
                    <Card.Title>Generatore di numeri</Card.Title>
                    <Card.Text>{this.state.numero}</Card.Text>
                     <Card.Text>
                    <button className="btn btn-danger" onClick={this.onClick}>Genera numero</button>
                    </Card.Text>
                </Card.Body>
                </Card>
            </>
        )
    }
}

