import { Briefcase, Users, HeartPulse, Camera, Package, Baby, Shield } from "lucide-react";
import ServiceCard from "../content/ServiceCard";
import AnimateOnScroll from "../animations/AnimateOnScroll";

const services = [
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Trygt Hjem",
    description: "En trygg taxi-ordning for ungdom mellom 15 og 21 år i Innlandet, natt til lørdag og søndag.",
    url: "/tjenester/trygt-hjem",
  },
  {
    icon: <HeartPulse className="w-10 h-10" />,
    title: "Pasienttransport",
    description: "Trygg og pålitelig transport til og fra nødvendig undersøkelse og behandling. Tildelt av Pasientreiser Sykehuset Innlandet.",
    url: "/tjenester/pasienttransport",
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Bedriftsavtaler",
    description: "Effektive og profesjonelle transportløsninger for bedrifter, ansatte og kunder.",
    url: "/tjenester/bedriftsavtaler",
  },
  {
    icon: <Camera className="w-10 h-10" />,
    title: "Sightseeing",
    description: "Opplev Lillehammer med våre kunnskapsrike sjåfører som guide. Fleksible turer med moderne minibusser.",
    url: "/tjenester/sightseeing",
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Pakketransport",
    description: "Vi leverer småpakker, dokumenter, mat og andre varer raskt og sikkert i hele Mjøsområdet.",
    url: "/tjenester/pakketransport",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Gruppetransport",
    description: "Moderne minibusser og maxi-taxier for grupper, charterturer, arrangementer og utflukter.",
    url: "/tjenester/gruppetransport",
  },
  {
    icon: <Baby className="w-10 h-10" />,
    title: "Sikring av Barn",
    description: "Vi tilbyr barneseter i alle vektklasser for en trygg reise. Bestill på forhånd for å garantere tilgjengelighet.",
    url: "/tjenester/sikring-av-barn",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 pt-12 pb-10">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-1">Våre Tjenester</h2>
            <p className="text-lg text-gray-600 mt-2">Transportløsninger skreddersydd for dine behov.</p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimateOnScroll key={index} delay={index * 0.1} animationType="fadeInUpWithRotate">
              <ServiceCard icon={service.icon} title={service.title} description={service.description} url={service.url} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
