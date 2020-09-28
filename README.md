# Moderne Hjemmekino

## Team 60, Prosjekt 2

### Innhold

Prosjektet er utviklet av Team 60, og er ment for å være en web-basert filmplakat-
utstilling som en homage til noen av de beste filmene noensinne laget. Dette valget ble
tatt grunnet gruppemedlemmenes felles kjærlighet for gode filmer,
og et ønske om å hylle både komponistene og regissørene.

## Krav til teknologi og funksjonalitet

### Kodekonvensjon

Gruppen har valgt å benytte seg av [Googles kodekonvensjon for JavaScript](https://google.github.io/styleguide/jsguide.html).
Det var ikke krav for oppgaven å benytte en kodekonvensjon, men gruppen har likevel valgt å benytte dette for å sikre
god, lesbar kode.

### React

Dette punktet løste seg ganske greit, da npx har en egen preset for create-react-app med TypeScript.
Følgelig er løsningen implementert med TypeScript. Både klassekomponenter(Eks: fetching fra API i fetchData.tsx)
og funksjonelle komponenter (Eks: Poster.tsx) er benyttet, i henhold til teknologikravene.

I de funksjonelle komponentene har vi benyttet oss av hooks for å håndtere state og av useEffect som alternativ for lifecycle-metoder.
I klassekomponentene har vi benyttet oss av vanlig react state og lifecycle-metoder. Dersom gruppemedlemmene kunne velge selv hadde
vi kun benyttet oss av funksjonelle komponenter, hooks og useEffect, men ettersom det var krav om å benytte både
funksjonelle og klassekomponenter, ble det slik.

Alle UI-komponenter er implementert fra bunnen av, uten tredjepartsbiblioteker.
Piltastene som benyttes for å bla gjennom de forskjellige filmplakatene, er royalty-free,
og hentet fra [material.io](https://material.io/resources/icons/?style=baseline)

Vi har valgt å benytte oss utelukkende av tekst i knapper i stedet for symboler.
Dette valget ble tatt for å utelukke misforståelser basert på ambiguøse og vage symboler,
og gruppen har på bakgrunn av dette konkludert med at tekst i knappene fungerer hensiktsmessig i denne sammenheng.

### SVG

Teamet benyttet seg utelukkende av SVG-formatet for å lage bildene på nettsiden.
Disse ble laget ved hjelp av Adobe Illustrator, grunnet mulighet for mer komplekse illustrasjoner enn
ved løsningen benyttet i prosjektoppgave 1.
Animasjonene ved bildene er laget ved å bruk av css-keyframes, og ved å manipulere de forskjellige elementene SVG-bildene består av.
Om brukeren ønsker, kan hen skru av animasjonene ved å trykke på knappen "animasjoner".
Denne funksjonaliteten er implementert ved å tildele SVG-elementene en animasjonsklasse, som gjør at animasjonene
kjører når klassen er tildelt.
Vi valgte å løse det på denne måten fordi det er standard prosedyre for animasjoner i css.

### AJAX

Datainnhenting fra API ble gjort med Asynchronous JavaScript.
For å aksessere API-et måtte teamet sende forespørsel for en API-nøkkel, noe vi heldigvis fikk.
Følgelig ligger API-nøkkelen i state i Components/Poster/fetchData.tsx.
Dette er ikke best practice i forhold til sikkerhet, men med tanke på at vi ikke har en backend er dette løsningen vi har gått for.
På denne måten lastes REST-API'et inn dynamisk.

### HTML Web Storage

Vi har valgt å implementere HTML Web Storage ved å la brukeren velge sine favorittfilmplakater, og deretter kunne velge å utelukkende
displaye sine favoritter i karusellen nederst på websiden.
Vi valgte denne funksjonaliteten, da ingen annen funksjonalitet virket formålsmessig å implementere med Web Storage.

### Responsive Web Design

Websiden er utviklet med responsivitet i tankene.
Webelementer tilpasser seg skjermens størrelse og orientering, og har et eget design for datamaskin, nettbrett, og mobil.
Designet er fleksibelt med tanke på viewport, og er dynamisk om en endrer høyde- og/eller breddeformat.

Spesielt karusellvisningen av kortene har en svært god løsning med tanke på responsivitet. Ved visning av websiden i et nedskalert vindu,
vil bruker bli presentert med en slider som gir pen visning av alle filmplakatkortene på en god måte.

Både Viewport, media queries, skalerende bilder, og flytende/fleksibel layout er implementert i løsningen, uten bruk av eksterne css-rammeverk.
Dermed oppfyller websiden alle kravene til responsivitet, i henhold til oppgavebeskrivelsen.

### Node.js og npm

Prosjektet er basert på Node.js og npm, i henhold til kravene. Vi benyttet oss av pakken create-react-app med TypeScript for å
initialisere prosjektet. Bruk av TypeScript, som er et supersett av Javascript, har ingen påvirkning på hvordan koden
leses av nettleseren. TypeScript-kode blir kompilert til vanlig Javascript, og er følgelig bare til for å gi utviklere
mer kontroll og oversikt over koden ved innføring av variabeltyper.

### Testing

Vi har testet appen vår ved hjelp av rammeverket Jest, og laget snapshot-tests for hver komponent. Disse vil detektere om noe ikke vises slik det skal, men dekker kun elementstrukturen,
ikke om context og parametre oppfører seg som de skal. I tillegg har vi testet i Edge, Firefox, Opera, og Chrome på Windows og Safari. I Chrome har vi brukt "Inspiser" til å simulere alle mulige skjermstørrelser, som HD-TV, nettbrett og mobiltelefon.
Vi har kjørt siden i Chrome på Android- og iOS-telefonene våre for å verifisere at de kjører på disse. Dette har fungert utmerket.
På Safari derimot, både macOS og iOS, fungerer animasjonene dårlig. Dermed oppfordrer vi til å bruke Chrome eller tilsvarende fremfor Safari.

### Bruk av Git, Koding

Som nevnt, benyttet gruppen seg av Googles kodekonvensjon for JavaScript. Prosjektkoden er følgelig ryddig strukturert, fornuftig kommentert,
og navngivning av komponenter, variable og funksjoner i tråd med kodekonvensjonen.
Gruppen har i stor grad benyttet seg av Git issues under utvikling, og tagget commits med tilhørende issue. Gruppen benyttet seg først av issues i stor grad
når det ble aktuelt, og de første commits er derfor ikke tagget med issues.
Dette valget ble gjort, da gruppen følte at dersom hele applikasjonen ble først planlagt og dermet utviklet, ville websiden gå glipp av forbedringer
som først ble åpenbare etter initiell utvikling ble gjennomført. Ved å ikke benytte issues i begynnelsen, gav vi oss selv mulighet til å finne forbedringer
i løsningene vi hadde sett for oss, noe som bidro til at websiden ble så bra som den ble.

### Innhold

Musikken er utdrag fra original filmmusikk. Brukt med avklaring fra faglærer.

# Prosjekt 2

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
