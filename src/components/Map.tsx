import React, { Dispatch, FC, SetStateAction } from 'react'
import { useLoadScript, GoogleMap, DistanceMatrixService, Marker, Polyline } from '@react-google-maps/api'
import MarkerType from '../models/marker'
import { LoadingOutlined } from '@ant-design/icons'

type MapPropsType = {
  setMarkers?: Dispatch<SetStateAction<MarkerType[]>>
  setLength?: Dispatch<SetStateAction<number>>
  markers: MarkerType[]
  isAddRoute: boolean
}

const libraries = ['places'] as Array<'places' | 'drawing' | 'geometry' | 'localContext' | 'visualization'>

const Map: FC<MapPropsType> = ({ setMarkers, markers, setLength, isAddRoute }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY as string,
    libraries,
  })

  if (loadError) return <div>Error</div>
  if (!isLoaded) return <LoadingOutlined />

  const mapContainerStyle = {
    width: '400px',
    height: 'calc(100vh - 84px)',
  }

  const center = {
    lat: 49.4444,
    lng: 32.0598,
  }

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  }

  const clickMap = (e: any) => {
    if (isAddRoute && setMarkers) {
      const newMark = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        id: Date.now(),
      }
      setMarkers([...markers, newMark])
    }
  }

  const changeMarkerPosition = (latLng: any, id: number) => {
    if (isAddRoute && setMarkers) {
      setMarkers(
        markers.map(mark => {
          if (mark.id === id) {
            mark.lat = latLng.lat()
            mark.lng = latLng.lng()
            console.log(mark)
          }
          return mark
        })
      )
    }
  }

  const renderMarkers = markers.map(mark => (
    <Marker
      onDragEnd={e => changeMarkerPosition(e.latLng, mark.id)}
      draggable={isAddRoute}
      key={mark.id}
      position={{ lat: mark.lat, lng: mark.lng }}
    />
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
      <Polyline
        path={markers}
        options={{
          strokeColor: '#ff2527',
          strokeOpacity: 0.75,
          strokeWeight: 2,
        }}
      />
      {markers.length >= 2 && (
        <DistanceMatrixService
          options={{
            destinations: [markers[0]],
            origins: [...markers.filter((mark, idx) => idx !== 0)],
            //@ts-ignore
            travelMode: 'WALKING',
          }}
          callback={response => {
            const meters = response?.rows.reduce((acc, cur) => {
              return (acc += cur?.elements[0]?.distance?.value)
            }, 0)

            if (meters && setLength) {
              setLength(meters)
            }
          }}
        />
      )}
    </GoogleMap>
  )
}

export default Map
