import { Briefcase, Users, HeartPulse, Camera, Package, Baby } from "lucide-react";
import ServiceCard from "../content/ServiceCard";

const services = [
  {
    icon: <HeartPulse className="w-10 h-10" />,
    title: "Pasienttransport",
    description: "Trygg og pålitelig transport til og fra nødvendig undersøkelse og behandling. Tildelt av Pasientreiser Sykehuset Innlandet.",
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Bedriftsavtaler",
    description: "Effektive og profesjonelle transportløsninger for bedrifter, ansatte og kunder.",
  },
  {
    icon: <Camera className="w-10 h-10" />,
    title: "Sightseeing",
    description: "Opplev Lillehammer med våre kunnskapsrike sjåfører som guide. Fleksible turer med moderne minibusser.",
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Pakketransport",
    description: "Vi leverer småpakker, dokumenter, mat og andre varer raskt og sikkert i hele Mjøsområdet.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Gruppetransport",
    description: "Moderne minibusser og maxi-taxier for grupper, charterturer, arrangementer og utflukter.",
  },
  {
    icon: <Baby className="w-10 h-10" />,
    title: "Sikring av Barn",
    description: "Vi tilbyr barneseter i alle vektklasser for en trygg reise. Bestill på forhånd for å garantere tilgjengelighet.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-1">Våre Tjenester</h2>
          <p className="text-lg text-gray-600 mt-2">Transportløsninger skreddersydd for dine behov.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
