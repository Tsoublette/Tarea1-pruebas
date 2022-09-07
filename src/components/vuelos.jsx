import "../App.css"

export default function Vuelos(props){
    const pack_vuelos = props;
    const vuelos_tabla = {}
       
    //console.log(props);
    //console.log(pack_vuelos)
    for (var key in pack_vuelos["dict"]){
        vuelos_tabla[pack_vuelos["dict"][key]["id"]] = {id: pack_vuelos["dict"][key]["id"], origen: pack_vuelos["dict"][key]["departure"]["name"], destino: pack_vuelos["dict"][key]["destination"]["name"], hora_des: pack_vuelos["dict"][key]["departure_date"]}
    }
    //console.log(vuelos_tabla)
    return(
        <div className="table_scroll">
        <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Origen</th>
                <th scope="col">Destino</th>
                <th scope="col">Fecha y Hora del despegue</th>
                </tr>
            </thead>
            <tbody>
             
            {Object.entries(vuelos_tabla).map(([key, value])=>(
                <tr key = {key}>
                <th scope="row" >{key}</th>
                <td>{value["origen"]}</td>
                <td>{value["destino"]}</td>
                <td>{value["hora_des"].split(" ")[0] +" "+ value["hora_des"].split(" ")[1].split(".")[0]}</td>
                </tr>   
            ))}
                
          
            </tbody>
        </table>
        </div>
    );
}



