/**
 * sia data la struttura dati:
 * MyLista è un vettore di oggetti
 * ogni elemento ha un suo id, nome, cognome, email, adress (a sua volta un oggetto)
 * stampare tutti gli elementi della lista, prendendo il nome dell'oggetto
 * creare un componente Card personalizzato con diverse props sfruttate dal componente EsempioMap
 */
import React, {Component} from "react";
import MyLista from "./MyLista";
import { Container, Row, Col} from "react-bootstrap";
import MyCard from "./MyCard";
//usare la row per affiancare i nomi
export default class MyEsempioMap extends Component {
    constructor(){
        super()
        this.state = {
            lista: MyLista
        }
    }
    render(){
        return(
            <div className="d-flex justify-content-center">  
            <Container className="mb-5">
                <Row>
                    {
                        this.state.lista.map(item => 
                            <Col key={item}>
                                <MyCard 
                                    id={item.id} 
                                    name={item.name}
                                    username={item.username}
                                    email={item.email}
                                    address={item.address}
                                    phone={item.phone}
                                    website={item.website}
                                    company={item.company}
                                />
                            </Col>
                        
                        )
                    }
                </Row>
                </Container>
            </div>
        )
    }
}