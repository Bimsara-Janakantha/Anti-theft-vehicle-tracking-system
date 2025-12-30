import { useEffect, useRef } from "react";
import L, { LatLngExpression } from "leaflet";
import { renderToString } from "react-dom/server";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function createMuiIcon(color = "#d32f2f", size = 40) {
  return L.divIcon({
    html: renderToString(
      <LocationOnIcon sx={{ color, fontSize: size }} />
    ),
    className: "", // IMPORTANT: remove default leaflet styles
    iconSize: [size, size],
    iconAnchor: [size / 2, size], // bottom-center
    popupAnchor: [0, -size],
  });
}

export default function LeafletMap() {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  const location: LatLngExpression = [7.255020712394069, 80.59179042409036];
  const zoomLevel = 17;

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current).setView(
      location,
      zoomLevel
    );

    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    // ✅ MUI marker icon
    const muiIcon = createMuiIcon("#1976d2", 44);

    L.marker(location, { icon: muiIcon })
      .addTo(map)
      .bindPopup(`Lat: ${(location as number[])[0]}, Lng: ${(location as number[])[1]}`);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ height: "100%", width: "100%" }}
    />
  );
}
