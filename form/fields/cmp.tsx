import L, { icon } from "leaflet";
import {  useMemo, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import Control from "react-leaflet-custom-control";

const CmpMap = (props:any) => {
  const markerRef = useRef<any>(null);
  const pinRef = useRef<any>(null)
  const { center, draggable, onDragMarker, location, pin, setPin, register, fl  } = props;

  const dragHandlers = useMemo(
    () => ({
      dragend() {
        const marker:any = markerRef.current;
        if (marker !== null) {
          onDragMarker(marker?.getLatLng());
          setPin(marker?._latlng)
        }
      },
    }),
    [onDragMarker,setPin]
  );

  const iconRetinaUrl = "/assets/marker-icon-inventory-2x.png";
  const iconUrl = "/assets/marker-icon.png";
  const shadowUrl = "/assets/marker-shadow.png";
  const iconDefault = icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });


  function UpdateMapCentre(props:any) {
    const map = useMap();
    map.flyTo(props.mapCentre, 15);
    return null;
  }

  const [view, setT] = useState(false);

  const showInMapClicked = () => {
    window.open(
      "https://maps.google.com?q=" + location.lat + "," + location.lng
    );
  };


  const M=()=>{

    return <Marker
            icon={iconDefault}
            position={[
              location &&  (parseFloat(location.lat) +2.0028 ).toString() ? location.lat : "",
              location && (parseFloat(location.lng) -.5028 ).toString() ? location.lng : "",
            ]}
            // {...register(`${fl.input}`, location)}
            draggable={draggable}
            eventHandlers={dragHandlers}
            ref={markerRef}
          >
            <Popup>
              <div className="flex flex-row flex-wrap w-full h-full p-1 text-xs  text-gray-600 bg-white rounded-lg">
                located@
                <br />
                {center.lat}
                <br />
                {center.lng}
              </div>
            </Popup>
          </Marker>
  }

  return (
    <div className="flex-1  w-full h-[55vh] overflow-hidden mb-1">
      <MapContainer
        center={{ lat: center.lat, lng: center.lng }}
        zoom={20}
        scrollWheelZoom={false}
        className="w-full h-[50vh]"

      >
        {!view && (
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        )}
        {view && (
          <TileLayer
            url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            maxZoom={20}
            subdomains={["mt1", "mt2", "mt3"]}
            className="opcacity-50"
          />
        )}
        <UpdateMapCentre mapCentre={center} />
 <M/>

        <Control position="bottomright" 
        >
          <div className="flex flex-row gap-2 w-full mb-2">
            <div
              className="w-100 auto-mx shadow-lg p-1 text-center text-white font-bold mt-2 bg-gray-600 rounded-lg"
              onClick={() => {
                showInMapClicked();
              }}
            >
              Get directions
            </div>
          </div>
        </Control>
      </MapContainer>
      <input type="text" className="hidden" 
      value={pinRef?.current?.lat}
      {...register(`${fl.name}`)}
//       ref={(e) => {
//         pinRef.current = e
// console.log(e,'location')

//       }}
      />
    </div>
  );
};


export default CmpMap;
