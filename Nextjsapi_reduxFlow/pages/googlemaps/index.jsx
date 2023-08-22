import { useLoadScript, GoogleMap, MarkerF, DirectionsRenderer, Marker } from '@react-google-maps/api'
import { useState, useEffect } from 'react';
const apikey = "AIzaSyBAJN8qUTOgt5-Q68NzMNmAFEntVNC_Ir0"
export default function Page() {
    const waypoints = [
        { location: { lat: 38.5816, lng: -121.4944 } },
        { location: { lat: 36.7783, lng: -119.4179 } }
    ];

    const locations = [
        { location: { lat: 38.5816, lng: -121.4944 } },
        { location: { lat: 36.7783, lng: -119.4179 } },
        { location: { lat: 34.0522, lng: -118.2437 } },
        { location: { lat: 32.7157, lng: -117.1611 } },
        { location: { lat: 39.9526, lng: -75.1652 } }
    ];

    return <div>
        <h1>Google Map</h1>
        <MapLocator locations={locations} width={1000} height={400} />
        <Map location={{ lat: 18.52043, lng: 73.856743 }} />
        <Map2 locations={waypoints} center={{ lat: 38.5816, lng: -121.4944 }} />
        <MapWithRoutes />
    </div >
}

function MapLocator({ locations, width, height }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apikey,
    });

    const [dir, setDir] = useState(null);

    useEffect(() => {
        if (isLoaded) {
            const source = locations[0];
            const destination = locations[locations.length - 1];
            const waypoints = locations.slice(1, -1);

            let dirService = new window.google.maps.DirectionsService();

            dirService.route(
                {
                    origin: source,
                    destination: destination,
                    waypoints: waypoints,
                    travelMode: 'DRIVING'
                },
                (result, status) => {
                    if (status === 'OK') {
                        setDir(result);
                    }
                }
            );
        }
    }, [isLoaded, locations]);

    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }

    return (
        <div style={{ height: `${height}px`, width: `${width}px` }}>
            <GoogleMap
                mapContainerStyle={{ height: `${height}px`, width: `${width}px` }}
                zoom={8}
            >
                {locations.map((loc, index) => (
                    <MarkerF
                        key={index}
                        position={loc}
                    />
                ))}
                {dir && <DirectionsRenderer directions={dir} />}
            </GoogleMap>
        </div>
    );
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

    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }


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
    );
};