import { useLoadScript, GoogleMap, MarkerF, DirectionsRenderer, PolylineF, Polyline } from '@react-google-maps/api'
import { useState, useEffect } from 'react';
const apikey = "AIzaSyD6btlQ1RbaniktbEyq_nQAoe7ck7aM5ZI"
export default function Page() {
    const waypoints = [
        { location: { lat: 38.5816, lng: -121.4944 } },
        { location: { lat: 36.7783, lng: -119.4179 } }
    ];

    const locations = [
        { location: { lat: 38.5816, lng: -121.4944 }, progess: "completed" },
        { location: { lat: 36.7783, lng: -119.4179 }, progess: "completed" },
        { location: { lat: 34.0522, lng: -118.2437 }, progess: "lastlocation" },
        { location: { lat: 32.7157, lng: -117.1611 }, progess: "nextlocation" },
        { location: { lat: 39.9526, lng: -75.1652 }, progess: "nextlocation" }
    ];

    return <div>
        <h1>Google Map</h1>
        <MapLocator3 />
        {/* <MapLocator2 /> */}
        {/* <MapLocator locations={locations} width={1000} height={400} /> */}
        {/* <Map location={{ lat: 18.52043, lng: 73.856743 }} />
        <Map2 locations={waypoints} center={{ lat: 38.5816, lng: -121.4944 }} />
        <MapWithRoutes /> */}
    </div >
}

function MapLocator3({ width = 1000, height = 400 }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apikey,
    });

    const [map, setMap] = useState(null);

    const onLoad = (map) => {
        setMap(map);
    };


    const locations = [
        { lat: 38.5816, lng: -121.4944 },
        { lat: 36.7783, lng: -119.4179 },
        { lat: 34.0522, lng: -118.2437 },
        { lat: 32.7157, lng: -117.1611 },
        { lat: 39.9526, lng: -75.1652 },
        { lat: 45.9526, lng: -75.1652 },
    ]

    const currentLocation = [
        { lat: 34.0522, lng: -118.2437 }
    ]

    const completePathCoordinate = [
        { lat: 38.5816, lng: -121.4944 },
        { lat: 36.7783, lng: -119.4179 },
        { lat: 34.0522, lng: -118.2437 }
    ];


    const nextWareHouseCoordinate = [
        { lat: 34.0522, lng: -118.2437 },
        { lat: 32.7157, lng: -117.1611 },
        { lat: 39.9526, lng: -75.1652 },
    ];

    const lastWareHouseCoordinates = [
        { lat: 39.9526, lng: -75.1652 },
        { lat: 45.9526, lng: -75.1652 },]

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

    const completeCircleIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        strokeColor: '#26e151',
        strokeOpacity: 1,
        strokeWeight: 5,
        scale: 8,
    };

    const nextWareHouseEventIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        strokeColor: '#0D99FF',
        strokeOpacity: 1,
        strokeWeight: 5,
        scale: 8,
    };

    const lastWareHouseEventIcon = {
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
                {/* compeleted warehouse event */}
                <MarkerF position={completePathCoordinate[0]} icon={completeCircleIcon} />
                <MarkerF position={completePathCoordinate[completePathCoordinate.length - 1]} icon={completeCircleIcon} />
                <PolylineF
                    path={completePathCoordinate}
                    options={{
                        strokeColor: "#26e151",
                        strokeOpacity: 1,
                        strokeWeight: 3
                    }}
                />
                <MarkerF position={nextWareHouseCoordinate[1]} icon={nextWareHouseEventIcon} />
                <PolylineF
                    path={nextWareHouseCoordinate}
                    options={{
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
                    }}
                />
                {/* last ware house event */}
                <MarkerF position={lastWareHouseCoordinates[0]} icon={lastWareHouseEventIcon} />
                <MarkerF position={lastWareHouseCoordinates[1]} icon={lastWareHouseEventIcon} />
                <MarkerF position={lastWareHouseCoordinates[1]} icon={blueFlagIcon} />
                <PolylineF
                    path={lastWareHouseCoordinates}
                    options={{
                        strokeColor: "#233455",
                        strokeOpacity: 1,
                        strokeWeight: 3
                    }}
                />
            </GoogleMap>
        </div>
    );
}

function MapLocator2({ width = 1000, height = 400 }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apikey,
    });

    const [map, setMap] = useState(null);

    const onLoad = (map) => {
        setMap(map);
    };


    const completePathCoordinate = [
        { lat: 38.5816, lng: -121.4944 },
        { lat: 36.7783, lng: -119.4179 },
        { lat: 34.0522, lng: -118.2437 }
    ];


    const nextWareHouseCoordinate = [
        { lat: 34.0522, lng: -118.2437 },
        { lat: 32.7157, lng: -117.1611 },
        { lat: 39.9526, lng: -75.1652 },
    ];

    const lastWareHouseCoordinates = [
        { lat: 39.9526, lng: -75.1652 },
        { lat: 45.9526, lng: -75.1652 },
    ]

    const totalRoutes = [...completePathCoordinate, ...nextWareHouseCoordinate, ...lastWareHouseCoordinates]

    useEffect(() => {
        if (isLoaded && map) {
            const bounds = new window.google.maps.LatLngBounds();

            totalRoutes.forEach(coord => {
                bounds.extend(new window.google.maps.LatLng(coord.lat, coord.lng));
            });

            map.fitBounds(bounds);
        }
    }, [isLoaded, map]);

    if (!isLoaded) {
        return <h1>Loading...</h1>;
    }

    const completeCircleIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        strokeColor: '#26e151',
        strokeOpacity: 1,
        strokeWeight: 5,
        scale: 8,
    };

    const nextWareHouseEventIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        strokeColor: '#0D99FF',
        strokeOpacity: 1,
        strokeWeight: 5,
        scale: 8,
    };

    const lastWareHouseEventIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        strokeColor: '#233455',
        strokeOpacity: 1,
        strokeWeight: 5,
        scale: 8,
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
                {/* compeleted warehouse event */}
                <MarkerF position={completePathCoordinate[0]} icon={completeCircleIcon} />
                <MarkerF position={completePathCoordinate[completePathCoordinate.length - 1]} icon={completeCircleIcon} />
                <PolylineF
                    path={completePathCoordinate}
                    options={{
                        strokeColor: "#26e151",
                        strokeOpacity: 1,
                        strokeWeight: 3
                    }}
                />
                <MarkerF position={nextWareHouseCoordinate[1]} icon={nextWareHouseEventIcon} />
                <PolylineF
                    path={nextWareHouseCoordinate}
                    options={{
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
                    }}
                />
                {/* last ware hose event */}
                <MarkerF position={lastWareHouseCoordinates[0]} icon={lastWareHouseEventIcon} />
                <MarkerF position={lastWareHouseCoordinates[1]} icon={lastWareHouseEventIcon} />
                <PolylineF
                    path={lastWareHouseCoordinates}
                    options={{
                        strokeColor: "#233455",
                        strokeOpacity: 1,
                        strokeWeight: 3
                    }}
                />
            </GoogleMap>
        </div>
    );
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

    const opts = {
        polylineOptions: {
            strokeOpacity: 0,
            strokeColor: '#233455',
            strokeWeight: 3,
            icons: [
                {
                    icon: { path: 'M 0,0 0,1', strokeOpacity: 1, scale: 3 },
                    offset: '0',
                    repeat: '10px'
                }
            ]
        }
    }

    const greenCircleIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: 'white',
        fillOpacity: 1,
        strokeColor: '#54D62C',
        strokeOpacity: 1,
        strokeWeight: 5,
        scale: 8,
    };

    return (
        <div style={{ height: `${height}px`, width: `${width}px` }}>
            <GoogleMap
                mapContainerStyle={{ height: `${height}px`, width: `${width}px` }}
                zoom={8}
            >
                {/* <MarkerF position={{ lat: 35.0783, lng: -109.3179 }} icon={{
                    url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Eo_circle_light-green_circle.svg",
                    scaledSize: new google.maps.Size(30, 30)
                }} /> */}
                <MarkerF position={{ lat: 35.0522, lng: -119.0000 }} icon={greenCircleIcon} />
                {locations.map((loc, index) => (
                    <MarkerF
                        key={index}
                        position={loc}
                    />
                ))}
                {dir && <DirectionsRenderer directions={dir} options={opts} />}
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


export function MapLocator({ locations, width, height }) {
  // const googlemapAPIkey = process.env.NEXT_PUBLIC_GOOGLEMAP_APIKEY;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCZEaAvvKDIuLDKAnniiA18SpkH047jcCQ",
  });

  const [dir, setDir] = useState(null);
  //   const completeCircleIcon = {
  //     path: window.google.maps.SymbolPath.CIRCLE,
  //     fillColor: "white",
  //     fillOpacity: 1,
  //     strokeColor: "#26e151",
  //     strokeOpacity: 1,
  //     strokeWeight: 5,
  //     scale: 8,
  //   };
  //   const nextWareHouseEventIcon = {
  //       path: window.google.maps.SymbolPath.CIRCLE,
  //       fillColor: 'white',
  //       fillOpacity: 1,
  //       strokeColor: '#0D99FF'
  //       strokeOpacity: 1,
  //       strokeWeight: 5,
  //       scale: 8,
  //   };
  //   const lastWareHouseEventIcon = {
  //       path: window.google.maps.SymbolPath.CIRCLE,
  //       fillColor: 'white',
  //       fillOpacity: 1,
  //       strokeColor: '#233455',
  //       strokeOpacity: 1,
  //       strokeWeight: 5,
  //       scale: 8,
  //   };
  const lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 2,
    scale: 4,
  };

  const findStatusFromLabel = (label) => {
    if (label == "Completed") {
      return {
        strokeColor: "#233455",
        strokeOpacity: 1,
        strokeWeight: 2,
      };
    }
    if (label == "In Progress") {
      return {
        strokeColor: "#0d99ff",
        strokeOpacity: 1,
        strokeWeight: 2,
        icons: [
          {
            icon: lineSymbol,
            offset: "0",
            repeat: "10px",
          },
        ],
      };
    }
    if (label == "Confirmed") {
      return {
        strokeColor: "#26e151",
        strokeOpacity: 2,
        strokeWeight: 2,
      };
    }
    return {
      strokeColor: "#253328",
      strokeOpacity: 1,
      strokeWeight: 2,
      icons: [
        {
          icon: lineSymbol,
          offset: "0",
          repeat: "10px",
        },
      ],
    };
  };

  const createPloylineLatLng = (index) => {
    if (index == null) {
      return;
    }
    const polyLine = [];
    for (let i = index; i <= index; i++) {
      polyLine.push(
        {
          lat: parseFloat(locations[i].lat),
          lng: parseFloat(locations[i].lng),
        },
        {
          lat: parseFloat(locations[i + 1].lat),
          lng: parseFloat(locations[i + 1].lng),
        }
      );
    }
    return polyLine;
  };

  useEffect(() => {
    if (isLoaded && locations.length > 0) {
      const source = locations[0];
      const destination = locations[locations.length - 1];
      const waypoints = locations.slice(1, -1).map((waypoint) => ({
        location: waypoint,
      }));

      let dirService = new window.google.maps.DirectionsService();
      dirService.route(
        {
          origin: source,
          destination: destination,
          waypoints: waypoints,
          travelMode: "DRIVING",
        },
        (result, status) => {
          if (status === "OK") {
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
    locations.length > 0 &&
    isLoaded &&
    dir && (
      <div style={{ height: `${height}px`, width: `${width}px` }}>
        <GoogleMap
          mapContainerStyle={{ height: `${height}px`, width: `${width}px` }}
          zoom={8}
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            keyboardShortcuts: false,
          }}
        >
          {locations.map((loc, index) => {
            if (typeof window != undefined && dir)
              return (
                <div>
                  <Marker
                    position={loc}
                    icon={
                      index === 0 || index == 1
                        ? {
                            path: window.google.maps.SymbolPath.CIRCLE,
                            fillColor: "white",
                            fillOpacity: 1,
                            strokeColor: "#233455",
                            strokeOpacity: 1,
                            strokeWeight: 5,
                            scale: 8,
                          }
                        : index === locations.length - 1 ||
                          index == locations.length - 2
                        ? {
                            path: window.google.maps.SymbolPath.CIRCLE,
                            fillColor: "white",
                            fillOpacity: 1,
                            strokeColor: "#26e151",
                            strokeOpacity: 1,
                            strokeWeight: 5,
                            scale: 8,
                          }
                        : {
                            path: window.google.maps.SymbolPath.CIRCLE,
                            fillColor: "white",
                            fillOpacity: 1,
                            strokeColor: "#0d99ff",
                            strokeOpacity: 1,
                            strokeWeight: 5,
                            scale: 8,
                          }
                    }
                  />
                  <Polyline
                    path={createPloylineLatLng(
                      index == locations.length - 1 ? null : index
                    )}
                    options={findStatusFromLabel(loc?.label)}
                  />
                  {dir && (
                    <DirectionsRenderer
                      icon=""
                      directions={dir}
                      routeIndex={index}
                      clickableIcons={{ clickable: false }}
                      options={{
                        polylineOptions: {
                          strokeOpacity: 0,
                          strokeColor: findStatusFromLabel(
                            locations[index]?.label
                          ),
                          strokeWeight: 1,
                          icons: [
                            {
                              icon: {
                                path: "M 0,0 0,1",
                                strokeOpacity: 1,
                                scale: 3,
                              },
                              offset: "0",
                              repeat: "10px",
                            },
                          ],
                        },
                      }}
                    />
                  )}
                </div>
              );
          })}
        </GoogleMap>
      </div>
    )
  );
}
