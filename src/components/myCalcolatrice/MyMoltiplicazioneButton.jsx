/**
 * input: 2 valori number
 * sotto un button
 * 
 * prendere in input 2 numeri, solo quando schiaccio il pulsante,
 * viene eseguita la moltiplicazione e sotto mi scrive:
 * "la motiplicazione vale: "
 * usare onClick
*/
import React, {Component} from "react";
import {Card, ListGroup, Button} from "react-bootstrap";
export default class MyCalcolatrice extends Component {
    constructor() {
        super();
        this.state = {
        num1: 0,
        num2: 0,
        ris: null,
        color: "primary"
        };
    }
    
    onChangeValue = (event) => {
        if(event.target.id === "box1"){
            this.setState({num1: event.target.value})
        }
        if(event.target.id === "box2"){
            this.setState({num2: event.target.value})
        }
    }
    
    onChangeMoltiplicazione = () => {
        this.setState({ris: Number(this.state.num1) * Number(this.state.num2)})
        
    }
 
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>MYMoltiplicazioneButton</Card.Header>
                    <ListGroup.Item>
                        <input aria-label="Default select example" type="number" id="box1"  placeholder="Inserisci un numero" onChange ={this.onChangeValue}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <input aria-label="Default select example" type="number" id="box2"  placeholder="Inserisci un numero" onChange ={this.onChangeValue}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {this.state.ris}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button variant={this.color} onClick={this.onChangeMoltiplicazione}>
                        moltiplicazione
                        </Button>
                    </ListGroup.Item>
                </Card>
            </>
        )
    }
}