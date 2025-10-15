# 06565
Best taxi website in Norway


Color Pallette:
#522a5b
#923d67
#c95b66
#ef875e x
#ffbd5b
#f9f871

# README: Ny Nettside for 06565 Taxi

Dette dokumentet beskriver den tekniske stacken og arkitekturen for den nye nettsiden til 06565 Taxi. Målet er å bygge en moderne, rask og brukervennlig nettside som er enkel å vedlikeholde og rustet for fremtiden.

## 1\. Teknisk Stack (Tech Stack)

Vi velger en moderne JAMstack-tilnærming. Det gir oss en lynrask, sikker og skalerbar nettside.

### **Frontend: Next.js (React)**

  * **Hva er det?** Next.js er et rammeverk bygget på toppen av React, det mest populære biblioteket for å bygge brukergrensesnitt.
  * **Hvorfor Next.js?**
      * **Fantastisk Ytelse:** Siden kan bygges som statiske filer (Static Site Generation - SSG), noe som gjør den ekstremt rask å laste for brukeren. Dette er perfekt for en tjeneste som taxi, hvor kunden vil ha informasjon umiddelbart.
      * **Søkemotoroptimalisering (SEO):** Next.js har innebygget støtte for Server-Side Rendering (SSR) og SSG, som gjør det enkelt for Google å indeksere siden og rangere den høyt i søkeresultatene.
      * **Moderne Utvikleropplevelse:** Gir en strukturert og effektiv måte å bygge nettsiden på, med funksjoner som filbasert ruting, bildeoptimalisering og API-ruter.

### **Styling: Tailwind CSS**

  * **Hva er det?** Et "utility-first" CSS-rammeverk som lar oss bygge design direkte i HTML-koden.
  * **Hvorfor Tailwind CSS?**
      * **Rask Prototyping og Utvikling:** Vi kan bygge et moderne og responsivt design uten å skrive masse egen CSS-kode.
      * **Konsistent Design:** Sikrer at designelementer (farger, avstand, skriftstørrelser) er konsistente over hele nettsiden.
      * **Optimalisert for Ytelse:** Fjerner automatisk all ubrukt CSS, noe som resulterer i en veldig liten filstørrelse.

### **Innholdsadministrasjon (CMS): Headless CMS (f.eks. Sanity.io)**

  * **Hva er det?** Et "Headless" CMS er et system for innholdsstyring hvor innholdet er frikoblet fra presentasjonen. Vi bruker det som en database for alt innhold (tekster, priser, nyheter) og henter det ut via et API.
  * **Hvorfor et Headless CMS?**
      * **Fleksibilitet:** 06565 Taxi kan enkelt oppdatere innhold (f.eks. endre priser, legge til en nyhet om appen) uten å måtte kontakte en utvikler.
      * **Fremtidsrettet:** Det samme innholdet kan enkelt gjenbrukes i andre kanaler, som f.eks. mobilappen "TaxiFix", infoskjermer eller fremtidige plattformer.
      * **Sanity.io** er et godt valg fordi det er veldig fleksibelt, har en god gratis-tier og gir en sanntids redigeringsopplevelse.

### **Hosting/Deploy: Vercel**

  * **Hva er det?** En skyplattform laget av teamet bak Next.js, spesialisert for å hoste moderne webapplikasjoner.
  * **Hvorfor Vercel?**
      * **Optimalisert for Next.js:** Gir den beste ytelsen og de enkleste arbeidsflytene for Next.js-prosjekter.
      * **Automatisk Deploy:** Kobles direkte til GitHub. Hver gang vi pusher ny kode til `main`-branchen, bygges og publiseres nettsiden automatisk.
      * **Globalt CDN:** Sørger for at nettsiden laster raskt for brukere uansett hvor de er i verden.
      * **Gratis for små prosjekter:** Har en generøs gratisplan som passer perfekt for dette prosjektet.

## 2\. Prosjektstruktur (Foreslått)

```
/06565-taxi-website
├── /components         # Gjenbrukbare React-komponenter (Button, Header, Footer, etc.)
├── /pages              # Sidene på nettstedet (index.js for forsiden, priser.js, etc.)
│   ├── /api            # API-ruter for f.eks. kontaktskjema
├── /public             # Statiske filer som bilder, logoer og fonter
├── /styles             # Globale stiler og Tailwind CSS-konfigurasjon
├── /studio             # (Hvis Sanity brukes) Innholdsstudio for CMS
├── package.json        # Prosjektavhengigheter og scripts
└── README.md           # Denne filen
```

## 3\. Kom i gang (Getting Started)

### Forutsetninger

  * Node.js (versjon 18 eller nyere)
  * En `package manager` som `npm` eller `yarn`

### Installasjon

1.  **Klone repoet:**

    ```bash
    git clone [URL-til-ditt-repo]
    cd 06565-taxi-website
    ```

2.  **Installer avhengigheter:**

    ```bash
    npm install
    ```

3.  **Kjør utviklingsserveren:**

    ```bash
    npm run dev
    ```

Åpne [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) i nettleseren din for å se resultatet.

## 4\. Fremtidige Muligheter

Denne stacken gir et solid fundament for videre utvikling. Noen muligheter inkluderer:

  * **Online Booking:** Bygge et enkelt bestillingsskjema som integreres med 06565 sitt bookingsystem via et API.
  * **Priskalkulator:** En interaktiv kalkulator for å estimere prisen på en tur.
  * **Blogg/Nyheter:** Enkel publisering av nyheter om selskapet, nye biler, eller hendelser i Lillehammer.
  * **Integrasjon med Kart:** Vise sanntidsposisjon for biler (krever mer avansert backend).
