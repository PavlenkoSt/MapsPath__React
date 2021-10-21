import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { useLoadScript, GoogleMap, DistanceMatrixService, Marker } from '@react-google-maps/api'
import MarkerType from '../../models/marker'

type MapPropsType = {
  setMarkers: Dispatch<SetStateAction<MarkerType[]>>
  setLength: Dispatch<SetStateAction<string>>
  markers: MarkerType[]
}

const Map: FC<MapPropsType> = ({ setMarkers, markers, setLength }) => {
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

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }

  const clickMap = (e: any) => {
    const newMark = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    }
    setMarkers([...markers, newMark])
  }

  const renderMarkers = markers.map(mark => (
    <Marker draggable={true} key={mark.lat} position={{ lat: mark.lat, lng: mark.lng }} />
  ))

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={markers[markers.length - 1] || center}
      onClick={clickMap}
      options={options}
    >
      {renderMarkers}
      {markers.length >= 2 && (
        <DistanceMatrixService
          options={{
            destinations: [markers[0]],
            origins: [...markers.filter((mark, idx) => idx !== 0)],
            //@ts-ignore
            travelMode: 'WALKING',
          }}
          callback={response => {
            const length = response?.rows[response?.rows.length - 1].elements[0].distance.text
            if (length) {
              setLength(length)
            }
          }}
        />
      )}
    </GoogleMap>
  )
}

export default Map
