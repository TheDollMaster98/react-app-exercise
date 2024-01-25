/**
 * prendere in input una stringa con il nostro nome
 * stampare la stringa in h1 colorata di rosso
 * dove scrive "ciao" + tuo nome + data ed ora attuale
 * h1 in rosso e font preso da google fonts
 */
 import React, { Component } from "react";
import { Card } from "react-bootstrap";
//* versione con le classi
export default class MyName extends Component {
  constructor() {
    super();
    this.state = {
      nome: "", 
    };
  }
  onChangeName = (event) => {
    this.setState({nome:"Ciao " +  event.target.value + " " + new Date().toLocaleString()});
  };
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Header>MyName</Card.Header>
          <Card.Body>
            <Card.Title>Saluto</Card.Title>
            <Card.Text>
              <input
                type="text"
                placeholder="Inserisci il tuo nome"
                onChange={this.onChangeName}
              />
              <h6 style={{ color: "red" }} class ="font1">
                {this.state.nome}
              </h6>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}
