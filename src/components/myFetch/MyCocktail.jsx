import React, {Component} from "react";
import {Card} from 'react-bootstrap'

class Drink extends Component {
  constructor(){
    super()
    this.state = {
      descr: "",
      name: "",
      img: "",
      glass:""
    }
  }
componentDidMount(){
  setInterval(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => this.setState({name: data.drinks[0].strDrink, descr: data.drinks[0].strInstructionsIT, img:data.drinks[0].strDrinkThumb, glass:data.drinks[0].strGlass}))
    },(5*1000));
}

render(){
  if(this.state.name === ""){
    return(
      <>
        <h1>Caricamento...</h1>
      </>
    )
  } else {
    return(
      <>
        <Card className="mt-4">
          <Card.Header className="text-center">{this.state.name}</Card.Header>
          <Card.Img variant="top" src={this.state.img}/>
          <Card.Body>
           <Card.Text>
              <strong>Glass:</strong><br/>{this.state.glass}  
            </Card.Text>
            <Card.Text>
              <strong>Description:</strong><br/>{this.state.descr}  
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

}

export default Drink;