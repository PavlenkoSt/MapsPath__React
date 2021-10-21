import React from 'react'
import { useLoadScript, GoogleMap, DistanceMatrixService } from '@react-google-maps/api'

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY as string,
    libraries: ['places', 'geometry'],
  })

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
    console.log(e)
  }

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} onClick={clickMap} options={options}>
      <DistanceMatrixService
        options={{
          destinations: [{ lat: 1.296788, lng: 103.778961 }],
          origins: [{ lng: 103.780267, lat: 1.291692 }],
          //@ts-ignore
          travelMode: 'WALKING',
        }}
        callback={response => {
          console.log(response)
        }}
      />
    </GoogleMap>
  )
}

export default Map
