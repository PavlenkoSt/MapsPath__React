import React, { useState } from 'react'
import { useLoadScript, GoogleMap, DistanceMatrixService, Marker } from '@react-google-maps/api'

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY as string,
    libraries: ['places'],
  })

  const [mockMark, serMockMark] = useState([{ lat: 1.296788, lng: 103.778961 }])

  if (loadError) return <div>Error</div>
  if (!isLoaded) return <div>loading...</div>

  const mapContainerStyle = {
    width: '400px',
    height: 'calc(100vh - 84px)',
  }

  const center = {
    lat: 42.3232,
    lng: 34.2324,
  }

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }

  const clickMap = (e: any) => {
    const newMark = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    }
    serMockMark([...mockMark, newMark])
  }

  const renderMarkers = mockMark.map(mark => <Marker key={mark.lat} position={{ lat: mark.lat, lng: mark.lng }} />)

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={mockMark[mockMark.length - 1] || center}
      onClick={clickMap}
      options={options}
    >
      {renderMarkers}
      {mockMark.length >= 2 && (
        <DistanceMatrixService
          options={{
            destinations: [mockMark[0]],
            origins: [...mockMark.filter((mark, idx) => idx !== 0)],
            //@ts-ignore
            travelMode: 'WALKING',
          }}
          callback={response => {
            console.log(response)
          }}
        />
      )}
    </GoogleMap>
  )
}

export default Map
