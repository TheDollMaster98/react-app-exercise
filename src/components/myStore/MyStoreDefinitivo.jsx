import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class MyStore extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      cartItems: 0,
      item: "",
    };
  }

  onAddToCart = () => {
    const myVect = [...this.state.cart];
    myVect.push({ name: this.state.item });
    this.setState({
      cart: myVect,
      cartItems: this.state.cartItems + 1,
      item: "", // Resetta l'input dopo l'aggiunta al carrello
    });
  };

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  onRemoveFromCart = (product) => {
    const myVect = [...this.state.cart];
    let index = myVect.indexOf(product);
    myVect.splice(index, 1);
    this.setState({
      cart: myVect,
      cartItems: this.state.cartItems - 1,
    });
  };

  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Header>Store</Card.Header>
          <Card.Body>
            <Card.Title>Cart</Card.Title>
            <Card.Text>
              <ul>
                {this.state.cart.map((product, index) => (
                  <li key={index}>
                    {product.name}
                    <Button
                      onClick={() => this.onRemoveFromCart(product)}
                      className="btn btn-danger ms-2"
                    >
                      Remove
                    </Button>
                  </li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>

          <input
            type="text"
            placeholder="aggiungi un elemento"
            value={this.state.item}
            onChange={(event) => this.handleChange(event)}
          />
          <Button onClick={this.onAddToCart} className="btn btn-success">
            ADD
          </Button>
          <Card.Footer>
            <small className="text-muted">{this.state.cartItems} items</small>
          </Card.Footer>
        </Card>
      </>
    );
  }
}
