import { ArrowRight, Search, FileCheck } from 'lucide-react';

interface HeroSectionProps {
  onComenzarSolicitud: () => void;
  onConsultarEstado: () => void;
}

export default function HeroSection({ onComenzarSolicitud, onConsultarEstado }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b82f6] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Sistema en línea 24/7</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Realiza tus trámites aduaneros en línea
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100">
                Completa formularios, valida documentos y reduce tiempos de espera en frontera.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onComenzarSolicitud}
                className="group flex items-center justify-center gap-2 bg-white text-[#1e3a8a] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FileCheck className="h-5 w-5" />
                Comenzar Solicitud
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onConsultarEstado}
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/30"
              >
                <Search className="h-5 w-5" />
                Consultar Estado
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              {[
                { value: '15k+', label: 'Solicitudes procesadas' },
                { value: '98%', label: 'Aprobación digital' },
                { value: '24/7', label: 'Disponibilidad' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  {/* Mock Document */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileCheck className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2" />
                        <div className="h-2 bg-gray-100 rounded w-1/2" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-100 rounded" />
                      <div className="h-2 bg-gray-100 rounded w-5/6" />
                      <div className="h-2 bg-gray-100 rounded w-4/6" />
                    </div>
                  </div>

                  {/* QR Code Mock */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded w-24" />
                        <div className="h-2 bg-gray-100 rounded w-32" />
                      </div>
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg" />
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-3 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm font-medium">Solicitud Aprobada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
