import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function PersonvernPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4 pt-24 pb-16 md:pt-28 prose lg:prose-xl">
        <AnimateOnScroll>
          <h1>Personvern og Betalingsinformasjon</h1>
        </AnimateOnScroll>

        <h2>SMS-varsling</h2>
        <p>Når du har bestilt taxi hos oss, vil du motta en SMS om hvilken bil som er på veg. Denne SMS-en belaster kr. 1 til ditt mobilabbonement. Dersom du ikke ønsker å motta SMS fra oss, kan du reservere deg mot dette ved å ta kontakt med oss på tlf 61 22 20 20, eller sende en mail til booking@06565.no. Hvis du bestiller over telefon kan du også gi beskjed til kundebehandleren om at du ikke ønsker å motta SMS på bestillingen.</p>

        <h2>Betalingsmåter</h2>
        <p>I tillegg til kontant betaling tar alle våre taxi og maxi taxi betalingskort, TaxiCard, TT-kort og de fleste kjente kredittkort som VISA, American Express, MasterCard og Diners. Alle våre taxi, minibuss og maxi taxi har online EMV betalingsterminaler.</p>
        <p>Dette medfører høyere sikkerhet både for den enkelte kunde og sjåføren da muligheten for svindel og misbruk reduseres betraktelig. Husk derfor å gjøre sjåføren oppmerksom på at du ønsker å benytte kredittkort før turen påbegynnes. Det gjelder uansett kredittkort-type.</p>

        <h2>Klage/Reklamasjon</h2>
        <p>For klage eller reklamasjon, ta kontakt med sentralen på tlf. 61 22 20 20. Be alltid om kvittering for turen.</p>
      </div>
    </main>
  );
}