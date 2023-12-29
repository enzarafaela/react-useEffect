import { useState, useEffect } from 'react';
import './App.css';
import Coordinates from './components/Coordinates';
import { fetchCoordinates } from './services';
import ISSLocation from './components/ISSLocation';

type Coordinates = {
    latitude: number;
    longitude: number;
}

function App() {
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
    const [load, setLoad] = useState(true);
    const [issLocation, setIssLocation] = useState<Coordinates>({
        longitude: 0,
        latitude: 0,
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const retorno = await fetchCoordinates();
                const newLocation = { latitude: retorno.latitude, longitude: retorno.longitude };
                setCoordinates(newLocation);
                setLoad(false);
                setIssLocation(newLocation);
                console.log(newLocation);
            } catch (error) {
                console.log('Deu erro:', error);
            }
        }
        
        const intervalId = setInterval(() => {
            fetchData();
        }, 3000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    if (load) {
        return <h1>Loading....</h1>
    }

    return (
        <div className="App">
        <h1>Nice to see you</h1>
        
        {coordinates && 
            <div>
                <h2>{`Latitude: ${coordinates.latitude}`}</h2>
                <h2>{`Longitude: ${coordinates.longitude}`}</h2>

                <ISSLocation
                    latitude={issLocation.latitude}
                    longitude={issLocation.longitude}
                />
            </div>
        }
        </div>
    );
}

export default App;