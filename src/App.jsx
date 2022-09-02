import './App.css';

import React from 'react';
import Mensajes from './components/mensajes';
import { Component } from 'react';
import Vuelos from './components/vuelos'



const client = new WebSocket("wss://tarea-1.2022-2.tallerdeintegracion.cl/connect");

export default class App extends Component{
  state = {
    messages: [],
    vuelos: [],
    }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView();
  }

  componentDidMount(){
    client.onopen = () => {
    console.log("[open] Connection established");
    client.send('{"type": "join","id": "15b5c75e-d857-4545-8239-13c9161c97f3","username": "Tomás"}');
    };
    
    client.onmessage = function(event) {
    var mensaje = JSON.parse(event.data);
    
    if (mensaje["type"]=== "message"){
        //console.log(mensaje["message"]) 
        this.setState((state) =>({
          messages: [...state.messages,
          {
            msg: mensaje["message"]["content"],
            user: mensaje["message"]["name"],
            date: mensaje["message"]["date"],
          }]                                  
        }));
      }
    if (mensaje["type"] === "flights"){
        this.setState((state) => ({
            ...state.vuelos = mensaje["flights"]
            
          }
        ))
      
      
    }
    //this.scrollToBottom();
    }.bind(this);

    
    }
    render(){
        return(
  <div className="container text-center">
  <div className="row">
    <div className="col-sm-8">
      EL RESTO DE LA TONTERA
    </div>
    <div className="col-sm-4">
    <div>
    <div className='Chat_titulo'>
      <h1 >Chat</h1>
    </div>
    </div>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-8">
      <div className="holas">
      <h1>dsjbdkjcekjbce</h1>
      </div>
    </div>
    <div className="col-sm-4">
    <div>
    <div className='Chat'>
        {this.state.messages.map(msg => <div  key={msg.user + msg.date} className="card">
        
            <div className="card-body">
            <h5 className="card-title">{msg.user}:</h5>
            <h6 className="card-subtitle mb-2 text-muted">{msg.date.split(" ")[0]}</h6>
            <h6 className="card-text">{msg.msg}</h6>
            </div>
            </div>)}
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
       
    </div>

    </div>


    </div>
    <div>
      <Vuelos dict = {this.state.vuelos} />
    </div>
  </div>
</div>
    
    


  );}
}

