import { Briefcase, CheckCircle, FileText } from 'lucide-react';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

const JobbPage = () => {
  const requirements = [
    'Førerkort i minst 2 år.',
    'Bestått kjøremannsprøve eller dokumentasjon på opplæring.',
    'Bestått språktest (om nødvendig).',
  ];

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <AnimateOnScroll>
          <div className="max-w-3xl mx-auto text-center">
            <Briefcase className="h-12 w-12 text-accent-3 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Jobb hos Oss</h1>
            <p className="text-lg text-gray-300 mb-8">
              Vi ser etter serviceinnstilte og dyktige sjåfører til å bli en del av teamet vårt. 
              Selv om vi ikke alltid har ledige stillinger, tar vi gjerne imot åpne søknader.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {/* Krav */}
          <AnimateOnScroll delay={0.1} animationType="fadeInUpWithRotate">
            <div className="bg-primary-1 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-accent-2 mb-4">Krav til sjåfører</h2>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>

          {/* Søknadsprosess */}
          <AnimateOnScroll delay={0.2} animationType="fadeInUpWithRotate">
            <div className="bg-primary-1 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-accent-2 mb-4">Søknadsprosess</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-accent-3 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold">Åpen søknad</h3>
                    <p className="text-gray-400">
                      Send en åpen søknad på e-post til <a href="mailto:booking@06565.no" className="text-accent-2 hover:underline">booking@06565.no</a>, 
                      eller kom innom oss i Oskar Skoglys veg 2 for å fylle ut et søknadsskjema.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
};

export default JobbPage;
