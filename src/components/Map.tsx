import React from 'react'
import { useLoadScript, GoogleMap } from '@react-google-maps/api'
import { getRoutes } from '../actions/routes'

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
    getRoutes()
    console.log(e)
  }

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} onClick={clickMap} options={options} />
  )
}

export default Map
