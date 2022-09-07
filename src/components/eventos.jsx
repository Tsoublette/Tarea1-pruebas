import {MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet'
import React from 'react';
import { Icon } from "leaflet";

export default function Eventos(props){
    const evento = props["evento"];
    const aviones = props["vuelos"];

    function isEmpty(obj){
        return Object.keys(obj).length === 0
    }

    /* 
    console.log(evento)
    console.log(Object.keys(aviones))
    if (!(isEmpty(evento))){
        if (Object.keys(aviones).includes(evento["evento"]["id"]))
        evento["evento"]["lat"] = aviones[evento["evento"]["id"]]["lat"];
        evento["evento"]["long"] = aviones[evento["evento"]["id"]]["long"];
        console.log(evento)
        if (evento["tipo"] === "landing"){
            return{


            }
        }

    
}*/
}
