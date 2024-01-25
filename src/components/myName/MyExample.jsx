import React, { Component } from "react";
import "./MyExample.css"
import  {Card, ListGroup, Button} from "react-bootstrap"
export default class MyExpample extends Component {
    constructor(){
        super()
        this.state = {
            nome:"Ajeje",
            cognome:"Brazof",
            eta: 0,
            comment: "commento dell'utente",
        }
    }
    //per cambiare lo stato della funzione
    onChangeName = () => {
        this.setState({comment: "Hello"})
    }
    onChangeEta = () => {
        this.setState({eta: Math.floor(Math.random() * 99) + 1})
    }
     //metodo per "stampare il risultato"
    render() {
        return (
            <div className="d-flex justify-content-center">  
                <Card style={{ width: '18rem' }}>
                    <Card.Header>MyExample</Card.Header>
                    <ListGroup.Item>{"Nome: " + this.state.nome}</ListGroup.Item>
                    <ListGroup.Item>{"Cognome: " + this.state.cognome}</ListGroup.Item>
                    <ListGroup.Item>{"Eta: " + this.state.eta}</ListGroup.Item>
                    <ListGroup.Item>{"Commento: " + this.state.comment}</ListGroup.Item>
                    <ListGroup.Item class="fluid">
                        <Button onClick={this.onChangeName}>Hello</Button> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className="sfondo" onClick={this.onChangeEta}>Eta</Button>
                    </ListGroup.Item>
                    
                </Card>
            </div>
             
        )
    }
}
