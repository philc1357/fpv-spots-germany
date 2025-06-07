// Zunächst prüfen, ob Geolocation verfügbar ist
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude

      // Karte zentrieren
      const map = L.map('map').setView([lat, lon], 13);

      // OSM-Tiles laden
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
        maxZoom: 19,
      }).addTo(map);

      // Marker auf aktuellen Standort setzen
      L.marker([lat, lon]).addTo(map);
    },
    function(error) {
      console.error("Fehler bei der Geolokalisierung:", error);
      alert("Standort konnte nicht ermittelt werden.");

      const lat = 51.54248998313184;
      const lon = 9.911891464470985;

      // Karte zentrieren
      const map = L.map('map').setView([lat, lon], 5);

      // OSM-Tiles laden
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
        maxZoom: 19,
      }).addTo(map);
    }
  );
} else {
  alert("Geolokalisierung wird von diesem Browser nicht unterstützt.");
}
