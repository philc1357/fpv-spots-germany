<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FPV-Spots-Germany</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="style_mobile.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="resources/public/css/klassen.css">
    <link rel="stylesheet" href="resources/public/css/cookie_banner.css">
    <!-- Leaflet CSS -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
</head>
<body class="d-flex flex-column min-vh-100">

    <div id="cookie_banner">
        <span class="mb-2">Diese Website verwendet Cookies und möchte auf deinen Standort zugreifen. Bitte akzeptiere oder lehne ab.</span>    
        <button onclick="acceptCookies()" class="btn btn-success mb-2">Akzeptieren</button>
        <button class="btn btn-danger" onclick="rejectCookies()">Ablehnen</button>
    </div>

    <header class="bg-main px-3 d-flex flex-row">
        <a href="" class="no-decoration"><p class="fs-1" title="Startseite"><b>FPV-Spots-Germany</b></p></a>
        <img id="logo" class="my-auto ms-3" width="50" height="50" src="resources/public/imgs/logo.png" alt="fpv-spots-germany">
    </header>

    <main class="px-3 mt-3 flex-fill">

        <div>
            <p>Herzlich Willkommen auf FPV-Spots-Germany.de</p>
            <p>Hier findest du FPV-Spots und kannst deine Spots der Community zeigen.</p>
        </div>

        <div id="map"></div>

        <div id="save_popup" class="mt-4">
            <hr class="mt-3">
            <p class="fs-3 fw-bold">Spot Speichern</p>
            <form action="">
                <input type="text" id="input_name" title="Name" name="name" class="form-control w-100" placeholder="Spotname" required>
                <input type="text" id="input_kategorie" title="Kategorie" name="kategorie" class="form-control w-100 my-1" placeholder="Kategorie" required>
                <input type="text" id="input_bodengrund" title="Bodengrund" name="bodengrund" class="form-control w-100" placeholder="Bodengrund" required>
                <input type="text" id="input_laengengrad" title="Längengrad" name="laengengrad" class="form-control w-100 my-1" placeholder="Längengrad" required>
                <input type="text" id="input_breitengrad" title="Breitengrad" name="breitengrad" class="form-control w-100 my-1" placeholder="Breitengrad" required>
                <button class="btn btn-success mt-1">Speichern</button>
                <button class="btn btn-danger mt-1">Abbrechen</button>
            </form>
            </div>
    </main>

    <footer class="px-3 mt-3 py-1 bg-main">
        <a class="no-decoration btn" href="resources/public/views/impressum.html" title="Impressum">Impressum</a>
        <a class="no-decoration btn" href="resources/public/views/kontakt.html" title="Kontakt">Kontakt</a>
    </footer>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="resources/private/js/cookie.js"></script>
    <script src="resources/private/js/location.js"></script>
    <script src="resources/private/js/save_location.js"></script>
</body>
</html>