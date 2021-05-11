# Weather-around-the-globe

<h1>Publicare</h1>
https://weather-around-the-globe.herokuapp.com/

<h1>Introducere</h1>
Aplicația Weather around the world este o aplicație cu un design simplu, având următorul stack: javascript, css, html, express și două api-uri: Mapbox și Darksky, realizată pentru cursul de Cloud Computing în cadrul masterului de Sisteme Informatice pentru Managementul Proceselor si Resurselor Economice și publicată cu ajutorul Heroku.

<h1>Descriere problema</h1>
Scopul ei este de a comunica utilizatorului vremea dintr-o anumită locație prin intermediul celor două api-uri folosite. Când utilizatorul introduce locația, o cerere de preluare este trimisă către API-ul Mapbox pentru a obține latitudinea și longitudinea locației trimise și locul exact. Aceste date sunt trimise inapoi pentru  pentru a genera prognoza folosind API-ul DarkSky. Api-ul folosește latitudinea și longitudinea pentru a genera vremea și le trimite înapoi la app.js care apoi trimite aceste date înapoi la client care apoi afișează datele către utilizator.

<h1>Descriere APIs</h1>
Mapbox este un serviciu de hărți avansat și flexibil care poate fi integrat în aplicații mobile. Dezvoltatorii au acces la informații complete despre locație pentru a crea și personaliza hărți dinamice și statice. Este utilizat de aplicații precum Shopify sau Facebook. În cadrul aplicației dezvoltate am folosit geocodificarea, care este procesul de a lua o adresă sau numele unui loc și a-l converti în valori de latitudine și longitudine. API-ul Mapbox Geocoding permite efectuarea a două tipuri de geocodificare: geocodificare directă și geocodificare inversă. Geocodificarea directă convertește textul în coordonate geografice, de exemplu, transformând 2 Lincoln Memorial Circle NW în -77.050,38.889. Geocodificarea inversă convertește coordonatele geografice într-o descriere a textului, de exemplu, transformând -77.050,38.889 în 2 Lincoln Memorial Circle NW. Toate cererile de geocodificare necesită trimiterea unei interogări. Când se trimite o interogare, se asteapta ca răspuns un document formatat JSON cu cele mai relevante rezultate din interogare.

Request:
 ```
 request({ url, json: true }, (error, { body }={}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                current_weather: body.current.weather_descriptions[0],
                current_img: body.current.weather_icons[0],
                current_temp: body.current.temperature,
                current_humid: body.current.humidity 
 ```

```
latitude: 44.4,
  longitude: 26.08333,
  timezone: 'Europe/Bucharest'
```
DarkSky este un Api care ofera prognoza meteo. Accesul la API-ul DarkSky este controlat de o cheie. Datele returnate despre vreme sunt in format JSON.
  Request:
  ```
   request({ url, json: true }, (error, { body }) => {
    console.log(body);
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.error) {
      callback("no", undefined);
    } else {
      callback(undefined, {
        temp: body.currently.temperature,
        summary: body.currently.summary
    ```
        
```
```
  currently: {
    time: 1620658936,
    summary: 'Clear',
    icon: 'clear-day',
    precipIntensity: 0,
    precipProbability: 0,
    temperature: 21.37,
    apparentTemperature: 21.37,
    dewPoint: 3.55,
    humidity: 0.31,
    pressure: 1021.2,
    windSpeed: 4.09,
    windGust: 4.18,
    windBearing: 120,
    cloudCover: 0,
    uvIndex: 1,
    visibility: 16.093,
    ozone: 336.7
  },
  hourly: {
    summary: 'Clear throughout the day.',
    icon: 'clear-day'
    }
```
<h1>Aplicatie</h1>

Ecran aplicație web înainte de introducerea unei locații:
![withtout input](https://user-images.githubusercontent.com/51722820/117654947-1b3f9400-b19f-11eb-8893-c0dcc17d103c.JPG)

Ecran aplicație web după introducerea unei locații pentru a afla vremea:
![after](https://user-images.githubusercontent.com/51722820/117655074-432ef780-b19f-11eb-97d8-06dbffdc5319.JPG)

<h1>Referinte</h1>
- https://docs.mapbox.com/
- https://darksky.net/
- https://expressjs.com/

