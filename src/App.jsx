import './App.css';

import React from 'react';
import Websocket from './components/websockets';

function App(){
  return(
  <div className="container text-center">
  <div className="row">
    <div className="col-sm-8">
      EL RESTO DE LA TONTERA
    </div>
    <div className="col-sm-4">
    <div>
    <React.StrictMode>
      <Websocket/>
    </React.StrictMode>
    </div>
    </div>
  </div>
</div>
    
    


  );
}
export default App;

