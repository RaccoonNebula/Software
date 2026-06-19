import { ArrowRight, FileText, Clock, Shield, CheckCircle2 } from 'lucide-react';
import logo from '../../imports/652354343_1254984190143031_5421609110339168639_n.jpg';

interface BienvenidaProps {
  onComenzar: () => void;
}

export default function Bienvenida({ onComenzar }: BienvenidaProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-red-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <img
              src={logo}
              alt="Chile Aduanas"
              className="h-32 w-32 mx-auto mb-6 rounded-full shadow-2xl ring-4 ring-white/30"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Bienvenido a
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Chile Aduanas Digital
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Realiza todos tus trámites aduaneros de forma rápida, segura y completamente en línea
            </p>
          </div>

          {/* Características */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Clock,
                titulo: 'Rápido',
                descripcion: 'Completa tus formularios en minutos',
              },
              {
                icon: Shield,
                titulo: 'Seguro',
                descripcion: 'Protección con Clave Única',
              },
              {
                icon: FileText,
                titulo: 'Simple',
                descripcion: 'Interfaz fácil de usar',
              },
              {
                icon: CheckCircle2,
                titulo: 'Confiable',
                descripcion: 'Plataforma oficial del Estado',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all hover:scale-105"
                >
                  <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.titulo}</h3>
                  <p className="text-blue-100 text-sm">{item.descripcion}</p>
                </div>
              );
            })}
          </div>

          {/* Servicios Disponibles */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Servicios Disponibles
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Asistente inteligente de formularios',
                'Declaración de equipaje y valores',
                'Formularios SAG (productos agrícolas)',
                'Autorización de viaje para menores',
                'Permisos PDI y control migratorio',
                'Registro de vehículos (ingreso/salida)',
              ].map((servicio, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-blue-50">{servicio}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={onComenzar}
              className="group bg-white text-blue-700 px-12 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-3"
            >
              Comenzar Trámites
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-blue-100 mt-4 text-sm">
              No requiere registro previo • Acceso inmediato
            </p>
          </div>

          {/* Footer Info */}
          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <p className="text-blue-100 text-sm">
              Servicio Nacional de Aduanas • Gobierno de Chile
            </p>
            <p className="text-blue-200 text-xs mt-2">
              Para soporte técnico: +56 2 2345 6789 | info@aduana.cl
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
