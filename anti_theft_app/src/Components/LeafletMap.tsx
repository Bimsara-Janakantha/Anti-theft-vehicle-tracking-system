import { useEffect, useRef } from "react";
import L from "leaflet";

export default function LeafletMap() {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) return; // prevent double init

    mapRef.current = L.map("map").setView(
      [7.2906, 80.6337], // Kandy
      13
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapRef.current);

    L.marker([7.2906, 80.6337])
      .addTo(mapRef.current)
      .bindPopup("University of Peradeniya");

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return <div id="map" style={{ height: "100%", width: "100%" }} />;
}
