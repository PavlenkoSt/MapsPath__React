import React from 'react'
import { useLoadScript, GoogleMap } from '@react-google-maps/api'

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY as string,
    libraries: ['places'],
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

  const clickMap = (e: any) => console.log(e)


  return (
    <div>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} onClick={clickMap} />
    </div>
  )
}

export default Map
