import { ArrowRight, Briefcase, Plane, ShoppingBag, Users } from "lucide-react";
import ServiceCard from "../content/ServiceCard";

const services = [
  {
    icon: <Plane className="w-10 h-10 text-accent-1" />,
    title: "Flyplasstransport",
    description: "Pålitelig og punktlig transport til og fra Gardermoen og andre flyplasser.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-accent-1" />,
    title: "Bedriftsavtaler",
    description: "Profesjonell transport for bedrifter. Vi sørger for at du og dine ansatte kommer frem i tide.",
  },
  {
    icon: <ShoppingBag className="w-10 h-10 text-accent-1" />,
    title: "Bykjøring",
    description: "Rask og enkel transport i Lillehammer sentrum og omegn, enten det er til butikken eller venner.",
  },
  {
    icon: <Users className="w-10 h-10 text-accent-1" />,
    title: "Gruppetransport",
    description: "Vi tilbyr minibusser for større grupper, perfekt for arrangementer og utflukter.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
