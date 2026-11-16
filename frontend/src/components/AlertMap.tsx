import Map, { Marker, Popup } from "react-map-gl/maplibre";
import { setWorkerUrl } from "maplibre-gl";
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url";
import "maplibre-gl/dist/maplibre-gl.css";
import { sampleAlerts } from "../data/alerts";
import { useState } from "react";
import type { Alert } from "../types/alerts";
setWorkerUrl(workerUrl);

function AlertMap() {
	const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
    return (
        <div>
		<Map
			initialViewState={{
				longitude: -74.2907041,
				latitude: 41.0053753,
				zoom: 11,
			}}
			mapStyle="https://tiles.openfreemap.org/styles/liberty"
			style={{ width: "100%", height: 500 }}
		>
			{sampleAlerts.map((alert) => (
				<Marker
                    onClick={() => setSelectedAlert(alert)}
					key={alert.id}
					longitude={alert.longitude}
					latitude={alert.latitude}
					anchor="bottom"
				/>
			))}
            {selectedAlert && (
  <Popup
    longitude={selectedAlert.longitude}
    latitude={selectedAlert.latitude}
    anchor="bottom"
    offset={25}
    closeOnClick={false}
    onClose={() => setSelectedAlert(null)}
  >
    <strong>{selectedAlert.title}</strong>
    <p>Status: {selectedAlert.status}</p>
  </Popup>
)}
		</Map>
        {selectedAlert ? 
            <p>{selectedAlert.title}-{selectedAlert.status}</p>:
            <p>No Selected Alert</p>
        }
    </div>
	);
}

export default AlertMap;
