import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
// import MyExpample from "./components/myName/MyExample";
import MyCalcolatrice from "./components/myCalcolatrice/MyCalcolatrice";
import MyRandomNumber from "./components/myCalcolatrice/MyRandomNumber";
// import MyPassingData from "./components/myName/MyPassingData";
import MyName from "./components/myName/MyName";
import MyMoltiplicazioneButton from "./components/myCalcolatrice/MyMoltiplicazioneButton";
import MyStore from "./components/myStore/MyStoreDefinitivo";
import MyEsempioMap from "./components/myLista/MyEsempioMap";
import MyClock from "./components/myFetch/MyClock";
import MyEsempioDiLista from "./components/myLista/MyEsempioDiLista";
// import MyMeteo from "./components/myMeteo/MyMeteo";
import Cocktail from "./components/myFetch/MyCocktail";
//import MyStore2 from "./components/MyStore2";
function App() {
  return (
    <>
      <Container className="mt-5 text-center">
        <MyClock />
        <Row>
          <Col className="mt-3">
            <MyCalcolatrice />
          </Col>
          <Col className="mt-3">
            <MyRandomNumber />
          </Col>
          <Col className="mt-3 text-center">
            <MyName />
          </Col>
          <Col className="mt-3 text-center">
            <MyMoltiplicazioneButton />
          </Col>
          <Col className="mt-5 text-center">
            <MyStore />
          </Col>
          <br />
          <Col>
            <Cocktail />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 text-center">
        <Row>
          <Col>
            <MyEsempioMap />
          </Col>
        </Row>
      </Container>

      <Container className="mt-12 text-center">
        <Row>
          <Col>
            <MyEsempioDiLista />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
