/*
creare un componente Card personalizzato con diverse props sfruttate dal componente EsempioMap
*/
import React, {Component} from "react";
import   {Card} from "react-bootstrap";
//props =/= state
//con i props richiamo
export default class MyCard extends Component {
    constructor(props){
        super(props)
        this.item = {
            id: this.props.id,
            name: this.props.name,
            username: this.props.username,
            email: this.props.email,
            address: {
                street: this.props.address.street,
                suite:  this.props.address.suite,
                city: this.props.address.city,
                zipcode: this.props.address.zipcode,
                geo: {
                    lat: this.props.address.geo.lat,
                    lng: this.props.address.geo.lng,
                }
            },
            phone: this.props.phone,
            website: this.props.website,
            company: {
                name: this.props.company.name,
                catchPhrase: this.props.company.catchPhrase,
                bs: this.props.company.bs,
            },    
        }
    }


    render(){
        return(
            <div className="d-flex justify-content-center">
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{this.item.name} {this.item.username} #{this.item.id}</Card.Header>
                    <Card.Body>
                        <ul>
                            <li>Email: {this.item.email}</li>
                            <li>Via: {this.item.address.street}</li>
                            <li>Cell: {this.item.phone}</li>
                            <li>Sito: {this.item.website}</li>
                            <li>Compagnia: {this.item.company.name}</li>
                            <li>Frase: {this.item.company.catchPhrase}</li>
                            <li>Bs: {this.item.company.bs}</li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
/*
"id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
*/