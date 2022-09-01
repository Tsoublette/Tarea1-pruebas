import '../App.css';
import React, { Component } from 'react';

const client = new WebSocket("wss://tarea-1.2022-2.tallerdeintegracion.cl/connect");

export default class Websocket extends Component {

  state = {
  messages: []
  }

componentDidMount(){
client.onopen = () => {
console.log("[open] Connection established");
client.send('{"type": "join","id": "15b5c75e-d857-4545-8239-13c9161c97f3","username": "Tomás"}');
};

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
        date: mensaje["message"]["date"],
      }]                                  
    }));
  }
}.bind(this);
}

render() {
return(
    <div>
      <h1 className='Chat'>Chat</h1>
        {this.state.messages.map(msg => <div  key={msg.user + msg.date} className="card">
            <div className="card-body">
            <h5 className="card-title">{msg.user}:</h5>
            <h6 className="card-subtitle mb-2 text-muted">{msg.date.split(" ")[0]}</h6>
            <h6 className="card-text">{msg.msg}</h6>
            </div>
            </div>)}
    </div>
    )
};
}

//{this.state.messages.map(msg => <p>{msg.usr}: {msg.msg}</p>)}
