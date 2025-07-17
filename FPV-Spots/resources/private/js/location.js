let marker

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const map = L.map('map').setView([lat, lon], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
        maxZoom: 19,
      }).addTo(map);

      // Start-Marker
      L.marker([lat, lon]).addTo(map)
        .bindPopup("Du bist hier")
        .openPopup();

      // Klick-Event
      map.on('click', function (e) {
        const { lat, lng } = e.latlng;

        // Falls ein Marker vorhanden ist → entfernen
        if (marker) {
          marker.remove();
        }

        // Neuen Marker setzen und in Variable speichern
        marker = L.marker([lat, lng]).addTo(map)
          .bindPopup(`Neuer Marker bei:<br>${lat.toFixed(5)}, ${lng.toFixed(5)} <br> <button class="mx-auto">Speichern</button>`)
          .openPopup();

        console.log('Marker gesetzt bei:', lat, lng);
      });
    },

    function (error) {
      console.error("Fehler bei der Geolokalisierung:", error);
      alert("Standort konnte nicht ermittelt werden.");

      const lat = 51.54248;
      const lon = 9.91189;

      const map = L.map('map').setView([lat, lon], 5);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
        maxZoom: 19,
      }).addTo(map);

      map.on('click', function (e) {
        const { lat, lng } = e.latlng;

        if (marker) {
          marker.remove();
        }

        marker = L.marker([lat, lng]).addTo(map)
          .bindPopup(`Neuer Marker bei:<br>${lat.toFixed(5)}, ${lng.toFixed(5)} <br> <button>Speichern</button>`)
          .openPopup();

        console.log('Fallback-Marker gesetzt bei:', lat, lng);
      });
    }
  );
} else {
  alert("Geolokalisierung wird von diesem Browser nicht unterstützt.");
}
