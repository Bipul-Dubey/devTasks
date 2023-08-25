import { useLoadScript, GoogleMap, MarkerF, PolylineF } from '@react-google-maps/api'
import { useState, useEffect } from 'react';
const apikey = "AIzaSyD6btlQ1RbaniktbEyq_nQAoe7ck7aM5ZI"
export default function Page() {

    const locations = [
        { lat: 38.5816, lng: -121.4944, label: "Completed" },
        { lat: 36.7783, lng: -109.4179, label: "Completed" },
        { lat: 34.0522, lng: -98.2437, label: "In Progress" },
        { lat: 32.7157, lng: -85.1611, label: "Confirmed" },
        { lat: 39.9526, lng: -75.1652, label: "Confirmed" }

    ];

    return <div style={{ margin: "45px" }}>
        <h1>Google Map</h1>
        <MapLocator3 width={1000} height={500} locations={locations} />
    </div>
}

function MapLocator3({ locations, width = 1000, height = 400 }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apikey,
    });

    const [map, setMap] = useState(null);

    const onLoad = (map) => {
        setMap(map);
    };

    useEffect(() => {
        if (isLoaded && map) {
            const bounds = new window.google.maps.LatLngBounds();

            locations.forEach(coord => {
                bounds.extend(new window.google.maps.LatLng(coord.lat, coord.lng));
            });

            map.fitBounds(bounds);
        }
    }, [isLoaded, map]);

    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }

    const findMarkerIcon = (label) => {
        if (label === "Completed") {
            return {
                path: window.google.maps.SymbolPath.CIRCLE,
                fillColor: 'white',
                fillOpacity: 1,
                strokeColor: '#26e151',
                strokeOpacity: 1,
                strokeWeight: 5,
                scale: 8,
            }
        } else if (label === "In Progress") {
            return {
                path: window.google.maps.SymbolPath.CIRCLE,
                fillColor: 'white',
                fillOpacity: 1,
                strokeColor: '#0D99FF',
                strokeOpacity: 1,
                strokeWeight: 5,
                scale: 8,
            }
        } else if (label === "Confirmed") {
            return {
                path: window.google.maps.SymbolPath.CIRCLE,
                fillColor: 'white',
                fillOpacity: 1,
                strokeColor: '#233455',
                strokeOpacity: 1,
                strokeWeight: 5,
                scale: 8,
            }
        }
    };

    const blueLineOptions = {
        strokeColor: 'green',
        strokeOpacity: 0.8,
        strokeWeight: 3,
    };

    const dashedBlueLineOptions = {
        strokeColor: 'blue',
        strokeOpacity: 0.8,
        strokeWeight: 3,
        icons: [
            {
                icon: { path: 'M 0,-1 0,1', strokeOpacity: 2, scale: 4 },
                offset: '0',
                repeat: '10px',
            },
        ],
    };

    const redLineOptions = {
        strokeColor: 'red',
        strokeOpacity: 0.8,
        strokeWeight: 3,
    };

    return (
        <div style={{ height: `${height}px`, width: `${width}px` }}>
            <h2>Map 2</h2>
            <GoogleMap
                mapContainerStyle={{ height: `${height}px`, width: `${width}px` }}
                onLoad={onLoad}
                options={{
                    mapTypeControl: false,
                    streetViewControl: false
                }}
            >
                {locations?.map((loc, index) => (
                    <MarkerF
                        key={index}
                        position={loc}
                        icon={findMarkerIcon(loc?.label)}
                    />
                ))}
            </GoogleMap>
        </div>
    );
}

function variable() {
    const CompletedLocation = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        strokeColor: '#26e151',
        strokeOpacity: 1,
        strokeWeight: 5,
        scale: 8,
    };

    const nextLocation = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        strokeColor: '#0D99FF',
        strokeOpacity: 1,
        strokeWeight: 5,
        scale: 8,
    };

    const lastLocation = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        strokeColor: '#233455',
        strokeOpacity: 1,
        strokeWeight: 5,
        scale: 8,
    };

    const blueFlagIcon = {
        path: 'M 0,0 L 0,1 L 0.5,1.5 L 1,1 L 1,0 Z',
        fillColor: 'blue',
        fillOpacity: 1,
        strokeColor: 'black',
        strokeWeight: 1,
        scale: 10,
        labelOrigin: new window.google.maps.Point(0.5, 1.6),
    };

    const dashedLine = {
        strokeColor: "#233455",
        strokeOpacity: 1,
        strokeWeight: 3,
        strokeOpacity: 0,
        icons: [
            {
                icon: { path: 'M 0,0 0,1', strokeOpacity: 1, scale: 3 },
                offset: '0',
                repeat: '10px'
            }
        ]
    }
}