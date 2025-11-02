import ContactForm from '@/components/forms/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';
import AnimateOnScroll from '@/components/animations/AnimateOnScroll';

export default function KontaktPage() {
  return (
    <main className="bg-gray-50">
      <div className="container mx-auto px-4 pt-24 pb-16 md:pt-28">
        <AnimateOnScroll>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-1">Kontakt Oss</h1>
            <p className="text-lg text-gray-600 mt-2">Vi er her for å hjelpe deg, døgnet rundt.</p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <AnimateOnScroll delay={0.1} animationType="fadeInUpWithRotate">
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <h2 className="text-3xl font-bold text-primary-2 mb-4">Kontaktinformasjon</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-accent-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Ring oss</h3>
                    <a href="tel:06565" className="text-gray-700 hover:text-accent-2">06565 (Fra Norge)</a><br/>
                    <a href="tel:+4761222020" className="text-gray-700 hover:text-accent-2">+47 61 22 20 20 (Fra utlandet)</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-8 h-8 text-accent-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Send en e-post</h3>
                    <a href="mailto:booking@06565.no" className="text-gray-700 hover:text-accent-2">booking@06565.no</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-accent-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Besøksadresse</h3>
                    <p className="text-gray-700">Oskar Skoglys veg 2, 2619 Lillehammer</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact Form */}
          <AnimateOnScroll delay={0.2} animationType="fadeInUpWithRotate">
            <ContactForm />
          </AnimateOnScroll>
        </div>
      </div>
    </main>
  );
}
