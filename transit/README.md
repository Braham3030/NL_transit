# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).



# NL transit project

Een interactieve kaart met bus, tram, metro en trein lijnen over heel Nederland. Hierbij kunnen de lijnen gezien worden en ook waar het OV op dat moment is. Om dit verder uit te werken, worden er meer api's gebruikt om de kaart meer functies mee te geven. Zo is het idee om een weather api eraan te koppelen. Met deze weather api kunnen er wolken of regen gesimuleerd worden voor de locaties. Ook is het gebruik van geolocation handig, omdat de geolocation de locatie van de gebruiker neemt om relevante OV lijnen weer te geven.

## Dag 1

Astro project opgezet en componenten verbonden. Ook is er een kaart erop gezet met behulp van "leaflet". Ik heb hier leaflet gebruikt, omdat leaflet weinig data nodig heeft. Hierdoor zal de site minder zwaar zijn als ook alle OV data erop wordt geladen.

Verder heb ik een mapPanel toegevoegd, deze component gaat er bijvoorbeeld voor zorgen dat er verschillende routes gezocht kunnen worden. Ook kan deze panel een goed overzicht geven van de aankomende tijden. 

## Voortgangsgesprek

### Week 1

Deze week heb ik nagedacht over een idee voor api gebruik voor een website. Ook heb ik gekeken naar hoe "astro" werkt en wat ik ermee kan doen. Zo heb ik componenten gekoppeld aan de hoofd ".astro" file. Hiermee wordt het overzichtelijk om de files te lezen. Ook heb ik een project opgezet en "leaflet" ingeladen. Het idee is om een openbaar vervoer kaart te maken, waarop de gebruiker de tijden, actieve locatie en de buslijnen kan zien. Hier wil ik meer functies aan toevoegen, zoals het koppelen van de weer api. Met de weer api kan er aangegeven worden wat het weer is/wordt, waardoor de gebruiker de website niet hoeft te verlaten om vervolgens het weer op locatie te bekijken. Ook kan het weer een visuele aandeel leveren aan de kaart, zo kan de kaart wolken bevatten als het bewolkt weer is.


## Bronnen

### Leaflet gebruik voor installeren van leaflet en aanpassen van kaart eigenschappen
[leaflet](https://leafletjs.com/download.html)