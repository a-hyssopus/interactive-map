import {useEffect, useState} from "react";
import {MapContainer, TileLayer} from "react-leaflet"

import CountryInformationPopup from "./CountryInformationPopup";
import 'leaflet/dist/leaflet.css'

const Map = () => {
    const [countryCode, setCountryCode] = useState('CH')
    const [coordinates, setCoordinates] = useState({lat: 47.37, lng: 8.54});
    const [error, setError] = useState(false)
    const [isReverseLocationSearchLoading, setIsLoading] = useState(false)

    useEffect(() => {
            setIsLoading(true);
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.lat}&lon=${coordinates.lng}&addressdetails=1`)
                .then(res => res.json())
                .then(data => {
                    if (data?.address) {
                        setCountryCode(data?.address?.country_code?.toUpperCase())
                    }
                }, () => {
                    setError(true)
                })
                .then(() => setIsLoading(false))

            return () => {
                setCountryCode('')
            }
        },
        [coordinates])

    return (
        <>
            {error ? <h1>Sorry, something went wrong</h1> : (
                <MapContainer center={coordinates} zoom={10} scrollWheelZoom={true}
                              style={{height: `calc(100vh - 16px)`, width: "100%"}}>
                    <TileLayer
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                    />
                    <CountryInformationPopup coordinates={coordinates}
                                             setCoordinates={setCoordinates}
                                             code={countryCode}
                                             isReverseLocationSearchLoading={isReverseLocationSearchLoading}/>
                </MapContainer>)}
        </>
    )
}

export default Map
