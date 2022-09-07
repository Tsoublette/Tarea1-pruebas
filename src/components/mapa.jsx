import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet'
import React from 'react';
import { Icon } from "leaflet";
import Eventos from './eventos';

export const icon = new Icon({
    iconUrl: "/avion.svg",
    iconSize: [25, 25]
  });
export const icon2 = new Icon({
    iconUrl: "/avion_landing.svg",
    iconSize: [25, 25]
});

export default function Mapa(props){
    const pack_vuelos = props;
    const aviones = props["aviones"];
    const vuelos_mapa = {};
    const aeropuertos = {};
    const evento = props["evento"];
    const [activeAirport, setActiveAirport] = React.useState(null);
       
    //console.log(props);
    //console.log(pack_vuelos)
    for (var key in pack_vuelos["dict"]){
        vuelos_mapa[pack_vuelos["dict"][key]["id"]] = {id: pack_vuelos["dict"][key]["id"], origen_lat: pack_vuelos["dict"][key]["departure"]["location"]["lat"],origen_long: pack_vuelos["dict"][key]["departure"]["location"]["long"], destino_lat: pack_vuelos["dict"][key]["destination"]["location"]["lat"], destino_long: pack_vuelos["dict"][key]["destination"]["location"]["long"]};
        aeropuertos[pack_vuelos["dict"][key]["departure"]["id"]] = {lat: pack_vuelos["dict"][key]["departure"]["location"]["lat"], long: pack_vuelos["dict"][key]["departure"]["location"]["long"], nombre: pack_vuelos["dict"][key]["departure"]["name"] };
        aeropuertos[pack_vuelos["dict"][key]["destination"]["id"]] = {lat: pack_vuelos["dict"][key]["destination"]["location"]["lat"], long: pack_vuelos["dict"][key]["destination"]["location"]["long"], nombre: pack_vuelos["dict"][key]["destination"]["name"] }
    }
 
   /* console.log(props["aviones"])
    if (evento_landing["evento"]){
    console.log(evento_landing["evento"]["id"])
    evento_landing["evento"]["lat"] = aviones[evento_landing["evento"]["id"]]["lat"];
    evento_landing["evento"]["long"] = aviones[evento_landing["evento"]["id"]]["long"];
    }
    else{
        evento_landing["evento"] = {id: 0, tipo: "", lat: 0, long: 0}
        evento_landing["evento"]["lat"] = 0;
        evento_landing["evento"]["long"] = 0;
    }*/
    
    return(
        <MapContainer center={[0, 0]} zoom={2}>
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
         />
         {Object.entries(aeropuertos).map(([key, value]) => (
        <Marker key= {key} position={[value["lat"], value["long"]]}
        onClick={() => {
            console.log("clksncla");
            setActiveAirport(key);
            
          }}
           />
         ))}

        {Object.entries(aviones).map(([key, value]) => (
        <Marker key= {key} position={[value["lat"], value["long"]]}
        onClick={() => {
            console.log("clksncla");
            setActiveAirport(key);
            
            
          }}
          icon={icon}
           />
         ))}
        
        <Eventos evento = {evento} aviones = {aviones}/>
      

        {activeAirport && (
        console.log("clickkk"),
        <Popup
          position={[
            aeropuertos[activeAirport]["lat"],
            aeropuertos[activeAirport]["long"]
          ]}
          onClose={() => {
            setActiveAirport(null);
          }}
        >
          <div>
            <h2>hola</h2>
          </div>
        </Popup>
         )}

        {Object.entries(vuelos_mapa).map(([key, value]) => (
                <Polyline key= {key} positions = {[[value["origen_lat"], value["origen_long"]],[value["destino_lat"], value["destino_long"]]]}
                />
            ))}
      
        </MapContainer>
    );
}
