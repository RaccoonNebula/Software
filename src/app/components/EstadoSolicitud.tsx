import { Search, QrCode, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function EstadoSolicitud() {
  const [codigoSolicitud, setCodigoSolicitud] = useState('');
  const [resultado, setResultado] = useState<any>(null);

  const handleBuscar = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de búsqueda
    setResultado({
      codigo: codigoSolicitud || 'ADU-2026-00123',
      estado: 'aprobada',
      solicitante: 'Juan Pérez González',
      fechaSolicitud: '2026-05-05',
      fechaRespuesta: '2026-05-07',
      detalles: 'Todos los documentos han sido validados correctamente.',
    });
  };

  const estadoConfig = {
    pendiente: {
      icon: Clock,
      color: 'text-yellow-600',
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      label: 'Pendiente de Revisión',
    },
    revision: {
      icon: AlertCircle,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      label: 'En Revisión',
    },
    aprobada: {
      icon: CheckCircle,
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
      label: 'Aprobada',
    },
    rechazada: {
      icon: XCircle,
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200',
      label: 'Rechazada',
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Consulta tu Solicitud
          </h2>
          <p className="text-lg text-gray-600">
            Ingresa tu código de solicitud o escanea tu QR
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <form onSubmit={handleBuscar} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Código de Solicitud
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={codigoSolicitud}
                      onChange={(e) => setCodigoSolicitud(e.target.value)}
                      placeholder="Ej: ADU-2026-00123"
                      className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#1e3a8a] text-white py-3 rounded-xl font-semibold hover:bg-[#1e40af] transition-all shadow-lg hover:shadow-xl"
                >
                  Buscar Solicitud
                </button>
                <button
                  type="button"
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  <QrCode className="h-5 w-5" />
                  Escanear QR
                </button>
              </div>
            </form>
          </div>

          {/* Results */}
          {resultado && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                {/* Status Badge */}
                <div className={`flex items-center gap-3 ${estadoConfig[resultado.estado as keyof typeof estadoConfig].bg} ${estadoConfig[resultado.estado as keyof typeof estadoConfig].border} border p-4 rounded-xl`}>
                  {(() => {
                    const Icon = estadoConfig[resultado.estado as keyof typeof estadoConfig].icon;
                    return <Icon className={`h-6 w-6 ${estadoConfig[resultado.estado as keyof typeof estadoConfig].color}`} />;
                  })()}
                  <div>
                    <div className={`font-bold ${estadoConfig[resultado.estado as keyof typeof estadoConfig].color}`}>
                      {estadoConfig[resultado.estado as keyof typeof estadoConfig].label}
                    </div>
                    <div className="text-sm text-gray-600">{resultado.detalles}</div>
                  </div>
                </div>

                {/* Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Código de Solicitud</div>
                    <div className="font-semibold text-gray-900">{resultado.codigo}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Solicitante</div>
                    <div className="font-semibold text-gray-900">{resultado.solicitante}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Fecha de Solicitud</div>
                    <div className="font-semibold text-gray-900">{resultado.fechaSolicitud}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Fecha de Respuesta</div>
                    <div className="font-semibold text-gray-900">{resultado.fechaRespuesta}</div>
                  </div>
                </div>

                {/* QR Code */}
                {resultado.estado === 'aprobada' && (
                  <div className="border-t pt-6">
                    <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
                      <div className="w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <QrCode className="h-20 w-20 text-[#1e3a8a]" />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="font-bold text-lg text-gray-900 mb-2">
                          Tu Código QR está Listo
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Presenta este código en el control aduanero para agilizar tu paso
                        </p>
                        <button className="bg-[#1e3a8a] text-white px-6 py-2 rounded-lg hover:bg-[#1e40af] transition-all">
                          Descargar QR
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
