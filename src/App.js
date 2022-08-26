import './App.css';

function App() {

let client = new WebSocket("wss://tarea-1.2022-2.tallerdeintegracion.cl/connect");
client.onopen = function(e) {
console.log("[open] Connection established");
client.send('{"type": "join","id": "15b5c75e-d857-4545-8239-13c9161c97f3","username": "Tomás"}');

client.onmessage = function(event) {
var mensaje = JSON.parse(event.data);
if (mensaje["type"]=== "message"){
    console.log(mensaje["message"]["content"])
  }
};

};
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Tarea 1 IIC3103
        </p>
      </header>
    </div>
  );
}





export default App;
