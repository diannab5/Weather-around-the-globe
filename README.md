# Weather-around-the-globe

https://weather-around-the-globe.herokuapp.com/

<h1>Introducere</h1>
Aplicația Weather around the world este o aplicație cu un design simplu, având următorul stack: javascript, css, html, express și două api-uri: Mapbox și Darksky, realizată pentru cursul de Cloud Computing în cadrul masterului de Sisteme Informatice pentru Managementul Proceselor si Resurselor Economice și publicată cu ajutorul Heroku.

<h1>Descriere problema</h1>
Scopul ei este de a comunica utilizatorului vremea dintr-o anumită locație prin intermediul celor două api-uri folosite. Când utilizatorul introduce locația, o cerere de preluare este trimisă către API-ul Mapbox pentru a obține latitudinea și longitudinea locației trimise și locul exact. Aceste date sunt trimise inapoi pentru  pentru a genera prognoza folosind API-ul DarkSky. Api-ul folosește latitudinea și longitudinea pentru a genera vremea și le trimite înapoi la app.js care apoi trimite aceste date înapoi la client care apoi afișează datele către utilizator.

<h1>Descriere APIs</h1>
Mapbox este un serviciu de hărți avansat și flexibil care poate fi integrat în aplicații mobile. Dezvoltatorii au acces la informații complete despre locație pentru a crea și personaliza hărți dinamice și statice. Este utilizat de aplicații precum Shopify sau Facebook. În cadrul aplicației dezvoltate am folosit geocodificarea, care este procesul de a lua o adresă sau numele unui loc și a-l converti în valori de latitudine și longitudine. API-ul Mapbox Geocoding permite efectuarea a două tipuri de geocodificare: geocodificare directă și geocodificare inversă. Geocodificarea directă convertește textul în coordonate geografice, de exemplu, transformând 2 Lincoln Memorial Circle NW în -77.050,38.889. Geocodificarea inversă convertește coordonatele geografice într-o descriere a textului, de exemplu, transformând -77.050,38.889 în 2 Lincoln Memorial Circle NW. Toate cererile de geocodificare necesită trimiterea unei interogări. Când se trimite o interogare, se asteapta ca răspuns un document formatat JSON cu cele mai relevante rezultate din interogare.


Descriere API (0,25p)
Flux de date (0,25p)
Exemple de request / response
Metode HTTP
Autentificare și autorizare servicii utilizate (dacă este cazul)

Ecran aplicație web înainte de introducerea unei locații:
![withtout input](https://user-images.githubusercontent.com/51722820/117654947-1b3f9400-b19f-11eb-8893-c0dcc17d103c.JPG)

Ecran aplicație web după introducerea unei locații pentru a afla vremea:
![after](https://user-images.githubusercontent.com/51722820/117655074-432ef780-b19f-11eb-97d8-06dbffdc5319.JPG)
