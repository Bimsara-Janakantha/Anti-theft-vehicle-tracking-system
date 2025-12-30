import { useEffect, useRef } from "react";
import L, { LatLngExpression } from "leaflet";

export default function LeafletMap() {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  const location: LatLngExpression = [7.255020712394069, 80.59179042409036];
  const zoomLevel = 17;

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = L.map(mapContainerRef.current).setView(
      location,
      zoomLevel
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapRef.current);

    L.marker(location)
      .addTo(mapRef.current)
      .bindPopup(`${location}`);

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={mapContainerRef} style={{ height: "100%", width: "100%" }} />
  );
}
