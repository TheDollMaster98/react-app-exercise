import React ,{Component} from "react"


export default class Store extends Component {

    constructor(){
        super()
        this.state = {
            prodottoCorrente :"",
            cart :["item1" , "item2" , "sajdjsajda" , "dsajdsajdsja"]
        }
    }

    rimuoviElemento = () =>{
        console.log("------------deleted----------")
        const myVector = [...this.state.cart];
        myVector.pop()
        this.setState({cart : myVector})
    }

    addElemento = () =>{
        console.log("------------Add---------- " + this.state.prodottoCorrente )
        const myVector = [...this.state.cart];
        myVector.push(this.state.prodottoCorrente)
        this.setState({cart : myVector})
    }

    onChangeText = (event) =>{
        this.setState({prodottoCorrente: event.target.value})
    }

    render(){
        return(
            <>
                <button onClick={this.rimuoviElemento} className="btn btn-danger">Rimuovi Elemento</button>


                <ul>
                    {
                        this.state.cart.map(
                            elemento => (
                                <li key={elemento}>
                                    
                                    <strong>{elemento}</strong>
                                    </li>
                            )
                        )
                    }

                </ul>

                <hr />

                <ul>
                    {this.state.cart.map(
                        item => (
                            <li key ={item}>{item}</li>
                        )
                    )}
                </ul>

                <div>
                    <input type="text"  placeholder="scrivi un elemento" className="mb-3" onChange={this.onChangeText}/><br />
                    <button onClick={this.addElemento} className="btn btn-success">Aggiungi Elemento</button>
                </div>
                
            </>
        )
    }

}

/** QUELLO DI ALE
import React, { Component } from "react";
import { Row } from "react-bootstrap";

export default class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [1, 2, 3],
      input: "",
    };
  }

  onRemoveLast = () => {
    const myArr = [...this.state.cart];
    myArr.pop();
    this.setState({ cart: myArr });
  };

  onAddItem() {
    const myArr = [...this.state.cart];
    myArr.push(this.state.input);
    this.setState({ cart: myArr });
    // console.log(this.state.input);
  }

  inputChange(e) {
    this.setState({ input: e.target.value });
  }

  // onInput(e) {
  //   let stringa = "";
  //   stringa += e.target.value;
  //   this.setState({ input: stringa });
  // }

  render() {
    return (
      <div>
        <Row>
          <input
            onChange={this.inputChange}
            type="text"
            placeholder="inserisci qui"
          />
          <button onClick={this.onAddItem}>Aggiungi al carrello</button>
        </Row>
        <Row>
          <button onClick={this.onRemoveLast}>Rimuovi ultimo elemento</button>
        </Row>
        <Row>
          <ul>
            {this.state.cart.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Row>
      </div>
    );
  }
}
             */