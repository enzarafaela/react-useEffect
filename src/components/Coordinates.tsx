import { fetchCoordinates } from "../services";

function Coordinates() {
    fetchCoordinates();
    return (
        <h1>Coordenadas ISS:</h1>    
    )
}

export default Coordinates;