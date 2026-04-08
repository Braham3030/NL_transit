# NL transit project

Een interactieve kaart met bus, tram, metro en trein lijnen over heel Nederland. Hierbij kunnen de lijnen gezien worden en ook waar het OV op dat moment is. Om dit verder uit te werken, worden er meer api's gebruikt om de kaart meer functies mee te geven. Zo is het idee om een weather api eraan te koppelen. Met deze weather api kunnen er wolken of regen gesimuleerd worden voor de locaties. Ook is het gebruik van geolocation handig, omdat de geolocation de locatie van de gebruiker neemt om relevante OV lijnen weer te geven.

## API

### Content
* OVapi
* openmeteo
* leaflet

### Web

* Geolocatiob
* SVG api

## Dag 1

Astro project opgezet en componenten verbonden. Ook is er een kaart erop gezet met behulp van "leaflet". Ik heb hier leaflet gebruikt, omdat leaflet weinig data nodig heeft. Hierdoor zal de site minder zwaar zijn als ook alle OV data erop wordt geladen.

Verder heb ik een mapPanel toegevoegd, deze component gaat er bijvoorbeeld voor zorgen dat er verschillende routes gezocht kunnen worden. Ook kan deze panel een goed overzicht geven van de aankomende tijden. 

## Voortgangsgesprek

### Week 1

Deze week heb ik nagedacht over een idee voor api gebruik voor een website. Ook heb ik gekeken naar hoe "astro" werkt en wat ik ermee kan doen. Zo heb ik componenten gekoppeld aan de hoofd ".astro" file. Hiermee wordt het overzichtelijk om de files te lezen. Ook heb ik een project opgezet en "leaflet" ingeladen. Het idee is om een openbaar vervoer kaart te maken, waarop de gebruiker de tijden, actieve locatie en de buslijnen kan zien. Hier wil ik meer functies aan toevoegen, zoals het koppelen van de weer api. Met de weer api kan er aangegeven worden wat het weer is/wordt, waardoor de gebruiker de website niet hoeft te verlaten om vervolgens het weer op locatie te bekijken. Ook kan het weer een visuele aandeel leveren aan de kaart, zo kan de kaart wolken bevatten als het bewolkt weer is.


Stap voor stap te werk

Sla weather api aan het begin over

Performance maps en OV lijnen goed checken. Aantal lijnen inkorten, en alleen de lijnen laten zien die relevant zijn. Bijvoorbeeld in een straal van 10km.

Search ook toevoegen om lijnen te zoeken voor de gebruiker.

mapTiler om de kaart te customizen

## Dag 2

Verder gewerkt aan de path's van astro en componenten goed gestructureerd. Verder de "mapPanel gemaakt en verder uitgewerkt. Nu ook 2 opties klikbaar met onCLick animatie. Ook is de "mapPanel nu uitschuifbaar, zodat de gebruiker meer informatie krijgt te zien erover. De zoom knoppen hebben een nieuwe styling, zodat het beter bij de styling van de pagina past. 
Ook is er een loading state toegevoegd aan de kaart, dit inverband met slechte network verbinding. Op deze manier weet de gebruiker dat de kaart nog aan het laden is

<img width="343" height="719" alt="image" src="https://github.com/user-attachments/assets/5a4cdc86-d6f3-452d-907e-e9fbdf7caae3" />


Idëeen voor dag 3:

* Render koppelen aan de main, zodat de build altijd live beschikbaar staat
* OVApi inladen voor de bussen
* Bus locaties op de kaart weergeven
* Performance issues opvangen van alle ingeladen bussen door bijvoorbeeld aantal ingeladen bussen te beperken tot scherm grootte
* Kaart styling bekijken
* mapPanel dragable maken en animaties/transities tweaken


## Bronnen

### Leaflet gebruik voor installeren van leaflet en aanpassen van kaart eigenschappen
[leaflet](https://leafletjs.com/download.html)

### Cubic bezier animatie details
[Cubic_Bezier_Generator](https://www.cssportal.com/css-cubic-bezier-generator/)

### CSS loading animations
[css-loader](https://css-loaders.com/dots-bars/)
