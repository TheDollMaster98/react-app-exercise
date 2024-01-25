import React from "react";
import   {Card} from "react-bootstrap";
function FormattedDate(props) {
    return <h2>Sono le {props.date.toLocaleTimeString()}</h2>;
  }

  // TODO: https://it.reactjs.org/docs/state-and-lifecycle.html

  export default class MyClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    //! Imposto un timer ogni volta che Clock è renderizzato nel DOM per la prima volta. 
    //! Questo è definito “mounting” (“montaggio”) in React.
    //! posso usarla per fare il fetch dei dati.
    //* viene eseguito dopo che l’output del componente è stato renderizzato nel DOM. È un buon punto in cui impostare un timer.
    //* viene usato per quando chiudo la pagina
    //  TODO: https://developer.mozilla.org/en-US/docs/web/api/setinterval
    //? creo l'item ogni tot tempo, per poi rimuoverlo con unmount, si ripete all'infinito
    
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    //! Per cancellare il timer ogni volta che il DOM prodotto da Clock viene rimosso. 
    //! Questo è definito “unmounting” (“smontaggio”) in React.
    //* Ci occuperemo di cancellare il timer nel metodo del lifecycle componentWillUnmount().
    //* Infine, implementeremo un metodo chiamato tick() che verrà invocato dal componente Clock ogni secondo.
    //* Il nuovo metodo utilizzerà this.setState() per pianificare gli aggiornamenti al local state del componente.
     // TODO: https://developer.mozilla.org/en-US/docs/web/api/clearinterval

    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <>
          <Card>
            <Card.Header>MyClock</Card.Header>
            <FormattedDate date={this.state.date} />
          </Card>
        </>
      );
    }
  }
  

/**
 In questo modo l’orologio scatta ogni secondo.

Ricapitoliamo velocemente quello che sta succedendo e l’ordine con cui i metodi sono invocati:

1) Quando <Clock /> viene passato a ReactDOM.render(), React invoca il costruttore del componente Clock. 
Dal momento che Clock ha bisogno di mostrare l’ora corrente, inizializza this.state con un oggetto che include l’ora corrente. 
In seguito, aggiorneremo questo state.
2) In seguito, React invoca il metodo render() del componente Clock. 
Questo è il modo in cui React apprende cosa dovrebbe essere visualizzato sullo schermo. React si occupa di aggiornare il DOM 
in modo da farlo corrispondere all’output della renderizzazione di Clock.
3) Quando l’output della renderizzazione di Clock viene inserito nel DOM, React invoca il metodo del lifecycle componentDidMount().
Al suo interno, il componente Clock chiede al browser di impostare un timer con cui invocare 
il metodo tick() del componente una volta al secondo.
4) Ogni secondo, il browser invoca il metodo tick(). 
Al suo interno, il componente Clock pianifica un aggiornamento della UI invocando setState() con un oggetto 
che contiene la nuova ora corrente. Grazie alla chiamata a setState(), 
React viene informato del fatto che lo state è cambiato e invoca di nuovo il metodo render() 
per sapere che cosa deve essere mostrato sullo schermo. Questa volta, this.state.date nel metodo render() avrà un valore differente, 
di conseguenza l’output della renderizzazione includerà l’orario aggiornato. React aggiorna il DOM di conseguenza.
5) Se il componente Clock dovesse mai essere rimosso dal DOM, React invocherebbe il metodo del lifecycle componentWillUnmount() 
ed il timer verrebbe cancellato.

1) react invoca il metodo render del componente.
2) quanto viene renderizzato il componente, react invoca il metodo del lifecycle, cioè il componentedidmount.
chiedendo al browser di impostare un timer del metodo del componente, oppure in base ad un'azione.
3) Il componente invocato 

 */