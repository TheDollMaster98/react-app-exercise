/**
scrivo un valore
*/
import React, { Component } from "react";
import {Card} from "react-bootstrap"
//* posso passare anche le proprietà nel costruttore
export default class MyPassingData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: 0,
        }
    }
    onChangeValue = (event) => {
        console.log(event.target.value)
    }
    render() {
        return (
            <>
                <Card style={{ width: "18rem" }}>
                <Card.Header>MyPassingData</Card.Header>
                    <Card.Body>
                        <Card.Title>Inserisci un numero</Card.Title>
                        <Card.Text>
                            <input type="number" placeholder="inserisci un numero" onChange={this.onChangeValue}/>
                        </Card.Text>
                    </Card.Body>
                 </Card>
            </>
        )
    }
}
