/*
creare un componente Card personalizzato con diverse props sfruttate dal componente EsempioMap
*/
import React, {Component} from "react";
import   {Card, CardGroup} from "react-bootstrap";
//props =/= state
//con i props richiamo
export default class MyCardEsDiLista extends Component {
    constructor(props){
        super(props)
        this.item = {
            userId: this.props.userId,
            id: this.props.id,
            title: this.props.title,
            body: this.props.body,
        }
    }

  render(){
        return(
            <div className="d-flex justify-content-center">
                <CardGroup>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>MyCardEsDiLista</Card.Header>
                    <Card.Body>
                        <ul>
                            <li>UserID: {this.item.userId}</li>
                            <li>ID: {this.item.id}</li>
                            <li>Title: {this.item.title}</li>
                            <li>Body: {this.item.body}</li>
                        </ul>
                    </Card.Body>
                </Card>
                </CardGroup>
            </div>
        )
    }
}
/*
{
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
*/