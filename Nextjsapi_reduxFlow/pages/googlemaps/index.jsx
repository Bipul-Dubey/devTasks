import { useLoadScript, GoogleMap, MarkerF, DirectionsRenderer } from '@react-google-maps/api'

export default function Page() {
    return <div>
        <h1>Google Map</h1>
        <Map location={{ lat: 18.52043, lng: 73.856743 }} />
        <Map2 />
    </div >
}

function Map({ location }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBAJN8qUTOgt5-Q68NzMNmAFEntVNC_Ir0",
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

function Map2({ location }) {
    return <div>
        Map2
    </div>
}