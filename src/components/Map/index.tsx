import React, { Dispatch, FC, SetStateAction } from 'react'
import { useLoadScript, GoogleMap, DistanceMatrixService, Marker, Polyline } from '@react-google-maps/api'
import IMarker from 'models/marker'
import { LoadingOutlined } from '@ant-design/icons'
import { Col } from 'antd'

type MapPropsType = {
  markers: IMarker[]
  isAddRoute: boolean
  setMarkers?: Dispatch<SetStateAction<IMarker[]>>
  setLength?: Dispatch<SetStateAction<number>>
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
    width: '100%',
    height: isAddRoute ? 480 : 400,
  }

  const center = {
    lat: 49.4444,
    lng: 32.0598,
  }

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    draggableCursor: isAddRoute ? 'pointer' : 'grab',
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
          }
          return mark
        })
      )
    }
  }

  const calculateLength = (response: google.maps.DistanceMatrixResponse | null) => {
    const meters = response?.rows.reduce((acc, cur) => {
      return (acc += cur?.elements[0]?.distance?.value)
    }, 0)

    if (meters && setLength) {
      setLength(meters)
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
    <Col className="map-container">
      {isAddRoute && <div className="map-line">Click to map and put markers:</div>}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
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
              travelMode: 'WALKING' as google.maps.TravelMode,
            }}
            callback={calculateLength}
          />
        )}
      </GoogleMap>
    </Col>
  )
}

export default Map
