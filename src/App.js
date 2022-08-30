import './App.css';
import ReactDOM from 'react-dom/client';
import React, { Component } from 'react';

const client = new WebSocket("wss://tarea-1.2022-2.tallerdeintegracion.cl/connect");

export default class App extends Component {

  state = {
  messages: []
  }

componentDidMount(){
client.onopen = () => {
console.log("[open] Connection established");
client.send('{"type": "join","id": "15b5c75e-d857-4545-8239-13c9161c97f3","username": "Tomás"}');
};


//var mensajes = [];

client.onmessage = function(event) {
var mensaje = JSON.parse(event.data);
//console.log(event.data);
if (mensaje["type"]=== "message"){
    console.log(mensaje["message"])
    this.setState((state) =>
    ({
      messages: [...state.messages,
      {
        msg: mensaje["message"]["content"],
        user: mensaje["message"]["name"],
      }]                                  
    }));
  }
  //mensajes.push({msg: mensaje["message"]["content"], usr: mensaje["message"]["name"]});
};
}

render() {
return(
    <div className="App">
      <header className="App-header">
        <p>
          Tarea 1 IIC3103
        </p>
        <p id="demo"></p>
        {this.state.messages.map(msg => <p>{msg.usr}: {msg.msg}</p>)}
      </header>
    </div>
    )
};
}



//ReactDOM.createRoot(<App />, document.getElementById('root'));

//export default App;
