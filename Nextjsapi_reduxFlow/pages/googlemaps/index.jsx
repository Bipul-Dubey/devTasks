import { useLoadScript, GoogleMap, MarkerF, DirectionsRenderer, Marker } from '@react-google-maps/api'
import { useState } from 'react';
const apikey = "AIzaSyBAJN8qUTOgt5-Q68NzMNmAFEntVNC_Ir0"
export default function Page() {
    const waypoints = [
        { location: { lat: 38.5816, lng: -121.4944 } },
        { location: { lat: 36.7783, lng: -119.4179 } }
    ];

    return <div>
        <h1>Google Map</h1>
        <Map location={{ lat: 18.52043, lng: 73.856743 }} />
        <Map2 locations={waypoints} center={{ lat: 38.5816, lng: -121.4944 }} />
        <MapWithRoutes />
    </div >
}

function Map({ location }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apikey,
    });
    const center = location

    return (
        <>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <div style={{ height: "400px", width: "400px", margin: "20px" }}>
                    <GoogleMap
                        mapContainerStyle={{ height: "100%" }}
                        center={center}
                        zoom={8}
                    >
                        <MarkerF position={center}></MarkerF>

                    </GoogleMap>
                </div>
            )}
        </>
    );
};

function Map2({ center, locations }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apikey,
    });

    return (
        <>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <div style={{ height: "400px", width: "400px", margin: "20px" }}>
                    <GoogleMap
                        mapContainerStyle={{ height: "100%" }}
                        center={center}
                        zoom={5}
                    >
                        {locations.map((waypoint, index) => (
                            <MarkerF
                                key={index}
                                position={waypoint.location}
                            />
                        ))}
                    </GoogleMap>
                </div>
            )}
        </>
    );
};

function MapWithRoutes() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apikey,
    });
    const [dir, setDir] = useState(null)

    const source = { lat: 37.7749, lng: -122.4194 };
    const destination = { lat: 34.0522, lng: -118.2437 };

    const locations = [
        { location: { lat: 38.5816, lng: -121.4944 } },
        { location: { lat: 36.7783, lng: -119.4179 } }
    ];


    let dirService = new google.maps.DirectionsService()

    dirService.route(
        {
            origin: source,
            destination: destination,
            waypoints: locations,
            travelMode: 'DRIVING'
        },
        (result, status) => {
            if (status === 'OK') {
                setDir(result)
            }
        }
    )

    return (
        <>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <div style={{ height: "500px", width: "1000px", margin: "20px" }}>
                    <GoogleMap
                        mapContainerStyle={{ height: "100%" }}
                        // center={center}
                        zoom={1}
                    >
                        {locations.map((loc, index) => (
                            <MarkerF
                                key={index}
                                position={loc.location}
                            />
                        ))}
                        {dir && <DirectionsRenderer directions={dir} />}
                    </GoogleMap>
                </div>
            )}
        </>
    );
};