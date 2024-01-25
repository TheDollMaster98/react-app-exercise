/**
 1-Esercitazione creare una una nuova classe Component
 che abbia come stati 3 cose fondamentali
 una stringa che identifica il tipo di operazione
 che si puo' svolgere 2 variabili di tipo numerico
i valori di default sono impostati a "somma" 0 e 0
 */
import React, { Component } from "react";
import  {Card, Form, ListGroup} from "react-bootstrap"

export default class MyCalcolatrice extends Component {
    constructor() {
        super()
        //valore dello stato
        this.state = {
            operazione: "somma",
            num1: null,
            num2: null,
        }
    }
    //per cambiare lo stato della funzione
    onChangeOperazione = (event) => {
        this.setState({operazione: event.target.value})
    }
    /* onChangeNum1 = (event) => {
         this.setState({num1: event.target.value})
     }
     onChangeNum2 = (event) => {
         this.setState({num2: event.target.value})
     } */
    onChangeValue = (event) => {
        if(event.target.id === "box1"){
            this.setState({num1: event.target.value})
        }
        if(event.target.id === "box2"){
            this.setState({num2: event.target.value})
        }
    }

    //metodo per "stampare il risultato"
    // * creo un menù a tendina che con la funzione onChange che mi punta al metodo per cambiare l'evento in questione
    // * in base all'evento, eseguo l'operazione associata ad esso
    //TODO: https://react-bootstrap.github.io/forms/select/
    render() {
        return (
            <>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Calcolatrice</Card.Header>
                    <Form.Select a
                    ria-label="Default select example" 
                    value={this.state.operazione} 
                    onChange={this.onChangeOperazione}
                    > 
                        <option value="somma">Somma</option>
                        <option value="sottrazione">Sottrazione</option>
                        <option value="moltiplicazione">Moltiplicazione</option>
                        <option value="divisione">Divisione</option>
                    </Form.Select>
                    <ListGroup.Item>
                        <input 
                        aria-label="Default select example" 
                        type="number" 
                        id="box1"  
                        placeholder="Inserisci un numero"
                        onChange ={this.onChangeValue}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <input 
                        aria-label="Default select example" 
                        type="number" id="box2"  
                        placeholder="Inserisci un numero" 
                        onChange ={this.onChangeValue}
                        />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        {this.state.operazione === "somma" ? Number(this.state.num1) + Number(this.state.num2) : null}
                        {this.state.operazione === "sottrazione" ?  (Number(this.state.num1) - Number(this.state.num2)) : null}
                        {this.state.operazione === "moltiplicazione" ? (Number(this.state.num1) * Number(this.state.num2)) : null}
                        {this.state.operazione === "divisione" ? (Number(this.state.num1) / Number(this.state.num2)) : null}
                    </ListGroup.Item>
                </Card>
            </>
        )
    }
}

/**
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
 */
/* BRUTTO MA FUNZIONA

                <Card style={{ width: '18rem' }}>
                <Card.Header>Calcolatrice</Card.Header>
                <Form.Select aria-label="Default select example" value={this.state.operazione} onChange={this.onChangeOperazione}> 
                        <option value="somma">Somma</option>
                        <option value="sottrazione">Sottrazione</option>
                        <option value="moltiplicazione">Moltiplicazione</option>
                        <option value="divisione">Divisione</option>
                    </Form.Select>
                    <input type="number" id="box1"  placeholder="Inserisci un numero" onChange ={this.onChangeValue}/>
                    <input type="number" id="box2"  placeholder="Inserisci un numero" onChange ={this.onChangeValue}/>
                    
                    {this.state.operazione === "somma" ? Number(this.state.num1) + Number(this.state.num2) : null}
                    {this.state.operazione === "sottrazione" ?  (Number(this.state.num1) - Number(this.state.num2)) : null}
                    {this.state.operazione === "moltiplicazione" ? (Number(this.state.num1) * Number(this.state.num2)) : null}
                    {this.state.operazione === "divisione" ? (Number(this.state.num1) / Number(this.state.num2)) : null}
                </Card>
*/

/* PIù CARINO
                <Card style={{ width: '18rem' }}>
                <Card.Header>Calcolatrice</Card.Header>
                <Form.Select aria-label="Default select example">
                    <option value="somma">Somma</option>
                    <option value="sottrazione">Sottrazione</option>
                    <option value="moltiplicazione">Moltiplicazione</option>
                    <option value="divisione">Divisione</option>
                </Form.Select>
                <input type="number" id="box1"  placeholder="Inserisci un numero" onChange ={this.onChangeValue}/>
                <input type="number" id="box2"  placeholder="Inserisci un numero" onChange ={this.onChangeValue}/>
                    {this.state.operazione === "somma" ? Number(this.state.num1) + Number(this.state.num2) : null}
                    {this.state.operazione === "sottrazione" ?  (Number(this.state.num1) - Number(this.state.num2)) : null}
                    {this.state.operazione === "moltiplicazione" ? (Number(this.state.num1) * Number(this.state.num2)) : null}
                    {this.state.operazione === "divisione" ? (Number(this.state.num1) / Number(this.state.num2)) : null}
                </Card>
*/
/* CODICE DI ROB
import React,{Component} from "react"


export default class PassingData extends Component {
    constructor(props){
        super(props)
        this.state = {
           numero1 : 0,
           numero2 : 0,
        }
    }

    onChangeValue1 = (event) =>{
        console.log(event.target.value)
        this.setState({numero1 : event.target.value})
    }

    onChangeValue2 = (event) =>{
        console.log(event.target.value)
        this.setState({numero2 : event.target.value})
    }


    mi prende tutti e due i box che hanno gli id

    onChangeValue = (event) =>{
        console.log(event.target.id)


        if(event.target.id == 'box1'){
            this.setState({numero1 : event.target.value})
        }
        if(event.target.id == 'box2'){
            this.setState({numero2 : event.target.value})
        }
    }

    render(){
        return(
            <>
                <p>Proof of Concept</p>
                <input type="number"  placeholder="Inserisci un numero" onChange ={this.onChangeValue1}/>
                <input type="number"  placeholder="Inserisci un numero" onChange ={this.onChangeValue2}/>



                <h2>{Number(this.state.numero1) +  Number(this.state.numero2)}</h2>
                <hr />
                <input type="number" id="box1"  placeholder="Inserisci un numero" onChange ={this.onChangeValue}/>
                <input type="number" id="box2"  placeholder="Inserisci un numero" onChange ={this.onChangeValue}/>

                <h2>{Number(this.state.numero1) +  Number(this.state.numero2)}</h2>

            </>
        )
    }
}
*/