import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import logo from '../../imports/652354343_1254984190143031_5421609110339168639_n.jpg';

export default function ModernFooter() {
  return (
    <footer className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Aduanas Chile" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="font-bold text-lg">Aduanas Chile</h3>
                <p className="text-sm text-blue-200">Gobierno Digital</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Sistema oficial del Servicio Nacional de Aduanas para trámites digitales seguros y eficientes.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {['Inicio', 'Formularios', 'Estado de Solicitud', 'Requisitos', 'Preguntas Frecuentes', 'Ayuda'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Información Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Información</h4>
            <ul className="space-y-2">
              {[
                'Política de Privacidad',
                'Términos y Condiciones',
                'Ley de Transparencia',
                'Accesibilidad',
                'Gobierno Abierto',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-200 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-blue-100">Mesa de Ayuda</div>
                  <div className="font-medium">+56 2 2345 6789</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-200 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-blue-100">Email</div>
                  <div className="font-medium">contacto@aduana.cl</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-200 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-blue-100">Horario</div>
                  <div className="font-medium">Lun - Vie: 8:00 - 18:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-blue-100">
              © 2026 Servicio Nacional de Aduanas - Gobierno de Chile. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
